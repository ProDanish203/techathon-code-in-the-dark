"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;

  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);

    float waveA = sin(position.y * 3.2 + uTime * 0.32);
    float waveB = cos(position.x * 3.8 + uTime * 0.28);
    float mousePull = 0.04 * length(uMouse);
    vec3 displaced = position + normal * (0.035 * waveA + 0.025 * waveB + mousePull);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;

  varying vec2 vUv;
  varying vec3 vNormal;

  vec3 blendColor(vec3 colorA, vec3 colorB, float amount) {
    return mix(colorA, colorB, smoothstep(0.0, 1.0, amount));
  }

  void main() {
    vec2 centeredUv = vUv - 0.5;
    float radius = length(centeredUv);
    float angle = atan(centeredUv.y, centeredUv.x);
    float swirl = sin(angle * 2.2 + uTime * 0.18) * 0.08;
    float ray = sin(angle * 6.0 + radius * 9.0 - uTime * 0.28) * 0.04;
    float mouseGlow = 0.06 * length(uMouse);

    vec3 peach = vec3(1.0, 0.66, 0.58);
    vec3 lavender = vec3(0.72, 0.64, 1.0);
    vec3 mint = vec3(0.58, 1.0, 0.86);
    vec3 sky = vec3(0.54, 0.82, 1.0);
    vec3 pink = vec3(1.0, 0.52, 0.82);

    vec3 color = blendColor(peach, lavender, vUv.x + swirl);
    color = blendColor(color, mint, vUv.y + ray);
    color = blendColor(color, sky, radius + 0.16 * sin(uTime + vUv.x * 5.0));
    color = blendColor(color, pink, 0.45 + 0.35 * sin(angle + uTime * 0.35));

    float rim = pow(1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 2.2);
    color += rim * vec3(0.45, 0.28, 0.9);
    color += (ray + mouseGlow) * vec3(0.45, 0.35, 0.9);

    gl_FragColor = vec4(color, 0.94);
  }
`;

export const ShaderBlob = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const targetMouseRef = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    };

    const geometry = new THREE.SphereGeometry(1.16, 96, 96);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
    const blob = new THREE.Mesh(geometry, material);
    scene.add(blob);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const updateMouse = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      targetMouseRef.current.x =
        ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      targetMouseRef.current.y =
        -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const resetMouse = () => {
      targetMouseRef.current.set(0, 0);
    };

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      uniforms.uTime.value = elapsed;
      uniforms.uMouse.value.lerp(targetMouseRef.current, 0.08);

      blob.rotation.x = Math.sin(elapsed * 0.08) * 0.04;
      blob.rotation.y = elapsed * 0.035;
      blob.rotation.z = Math.cos(elapsed * 0.07) * 0.03;

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", updateMouse);
    window.addEventListener("pointerleave", resetMouse);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", updateMouse);
      window.removeEventListener("pointerleave", resetMouse);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-1/2 top-1/2 z-0 size-[min(82vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 blur-[0.2px]"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 0.9, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div ref={mountRef} className="size-full" />
    </motion.div>
  );
};
