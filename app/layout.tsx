import type { Metadata } from "next";
import { Poppins, Roboto, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { ShaderBlob } from "@/components/shared/shader-blob";
import { SmoothScroll } from "@/components/shared/smooth-scroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Code in the dark - Techathon",
  description: "Code in the dark - Techathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={cn(
          "antialiased overflow-x-clip bg-zinc-950 text-white",
          poppins.className,
          roboto.variable,
        )}
      >
        <ShaderBlob />
        <SmoothScroll>
          <div className="relative z-10">
            <Header />
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
