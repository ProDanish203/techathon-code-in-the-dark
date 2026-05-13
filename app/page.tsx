import { Hero } from "@/components/shared/hero";
import { HeroSupport } from "@/components/shared/hero-support";
import { Testimonials } from "@/components/shared/testimonials";
import { Work } from "@/components/shared/work";
import { Awards } from "@/components/shared/awards";
import { CTA } from "@/components/shared/cta";
import { ImageNavigator } from "@/components/shared/image-navigator";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroSupport />
      <Testimonials />
      <ImageNavigator />
      <Work />
      <Awards />
      <CTA />
    </main>
  );
}
