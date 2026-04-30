"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, -150]);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Background image — parallax layer only */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: isMobile ? 0 : bgY, willChange: "transform" }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Keystone Contracting — Western Slope construction"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay — static, does not parallax */}
      <div className="absolute inset-0 z-10 md:bg-gradient-to-r md:from-black/85 md:via-black/60 md:to-black/20 bg-gradient-to-b from-black/90 to-black/70" />

      {/* Subtle grid overlay — static */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(26,58,92,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(26,58,92,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Text content — static, does not parallax */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-24 md:py-0">
          <div className="max-w-2xl">
            <p className="font-label font-bold text-[11px] tracking-[3px] uppercase text-ks-blue-light mb-6 text-center md:text-left">
              Montrose, CO · Western Slope
            </p>
            <h1 className="font-heading font-black text-5xl md:text-7xl leading-[1.05] text-white mb-6 uppercase tracking-tight text-center md:text-left">
              Built Right.<br />
              <span className="text-ks-accent">Built to Last.</span>
            </h1>
            <p className="font-body font-light text-[15px] text-ks-cream leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
              45 years of Western Slope expertise. From raw land to luxury custom homes — we deliver full-scale construction and development with precision at every stage.
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
              <a
                href="#contact"
                className="font-label text-[12px] uppercase tracking-[1.5px] bg-ks-blue text-white px-6 py-3 hover:bg-ks-blue-mid transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="font-label text-[12px] uppercase tracking-[1.5px] text-white border-b border-white py-3 hover:text-ks-accent hover:border-ks-accent transition-colors"
              >
                View Our Work →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — static */}
      <div className="relative z-20 border-t border-ks-blue/20 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-3 divide-x divide-ks-blue/20">
            {[
              { number: "45+", label: "Years of Experience" },
              { number: "33", label: "Lots · West Wind Estates" },
              { number: "100%", label: "Western Slope Focus" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-6 first:pl-0 text-center md:text-left">
                <p className="font-heading text-[32px] text-white leading-none mb-1">{stat.number}</p>
                <p className="font-label text-[11px] text-ks-blue-light tracking-[1.5px] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
