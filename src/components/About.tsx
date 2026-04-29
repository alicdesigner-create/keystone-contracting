"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="about" ref={sectionRef} className="bg-ks-navy">
      <div className="grid md:grid-cols-2">
        {/* Left: image panel with diagonal right clip + parallax */}
        <div className="relative h-72 md:min-h-full overflow-hidden">
          <motion.div
            className="absolute left-0 right-0"
            style={{
              top: "-10%",
              bottom: "-10%",
              clipPath: isMobile ? "none" : "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
              y: isMobile ? 0 : panelY,
              willChange: "transform",
            }}
          >
            <Image
              src="/images/about-bg.jpg"
              alt="Built on Execution — Keystone Contracting"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-ks-dark/20" />
          </motion.div>
        </div>

        {/* Right: content — does not parallax */}
        <div className="px-10 py-16 md:px-14 md:py-20">
          <p className="font-label font-bold text-[11px] tracking-[3px] uppercase text-ks-blue-light mb-5 text-center md:text-left">
            About Keystone Contracting
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight tracking-tight mb-8 text-center md:text-left">
            Built on Execution.<br />Driven by Quality.
          </h2>
          <div className="space-y-5">
            <p className="font-body font-light text-[14px] text-ks-cream leading-[1.8]">
              Based in <strong className="text-ks-cream font-medium">Montrose, CO</strong> with multi-generational ties across the Western Slope, Keystone Contracting represents a new venture built on old roots.
            </p>
            <p className="font-body font-light text-[14px] text-ks-cream leading-[1.8]">
              We leverage <strong className="text-ks-cream font-medium">45 years of construction expertise</strong> to deliver full-service solutions — from raw land to a custom home that reflects your vision, your lifestyle, and your legacy.
            </p>
            <p className="font-body font-light text-[14px] text-ks-cream leading-[1.8]">
              With specialized expertise in <strong className="text-ks-cream font-medium">high-altitude construction</strong> and mountain-specific building requirements, we help clients navigate complex conditions with confidence and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
