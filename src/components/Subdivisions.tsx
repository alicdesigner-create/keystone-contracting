"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Subdivisions() {
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
    <section id="subdivisions" ref={sectionRef} className="bg-ks-navy border-t border-b border-ks-blue/30">
      <div className="grid md:grid-cols-2 min-h-[480px]">
        {/* Left: image panel with diagonal right clip + parallax */}
        <div className="relative min-h-[320px] overflow-hidden">
          <motion.div
            className="absolute left-0 right-0"
            style={{
              top: "-10%",
              bottom: "-10%",
              clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
              y: isMobile ? 0 : panelY,
              willChange: "transform",
            }}
          >
            <Image
              src="/images/west-wind-estates.jpg"
              alt="West Wind Estates — Montrose County, Colorado"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-ks-dark/25" />
          </motion.div>
        </div>

        {/* Right: content — does not parallax */}
        <div className="px-10 py-16 md:px-14 md:py-20">
          <p className="font-label font-bold text-[11px] tracking-[3px] uppercase text-ks-blue-light mb-5 text-center md:text-left">
            Featured Development
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight tracking-tight mb-2 text-center md:text-left">
            West Wind Estates
          </h2>
          <p className="font-body text-[14px] text-ks-stone mb-6 text-center md:text-left">Montrose County, Colorado</p>
          <p className="font-body font-light text-[14px] text-ks-stone leading-[1.8] mb-10">
            A 33-lot residential community built for long-term value and high-quality living. Thoughtfully developed in phases with strong architectural standards, creating a cohesive environment for custom homes built to last.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pb-8 mb-8 border-b border-ks-blue/30">
            {[
              { number: "33", label: "Residential Lots" },
              { number: "Multi", label: "Phase Development" },
              { number: "100%", label: "Western Slope" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-[28px] text-white leading-none mb-1">{stat.number}</p>
                <p className="font-label text-[10px] uppercase text-ks-blue-light tracking-[1.5px]">{stat.label}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="font-label text-[12px] uppercase tracking-[1.5px] text-ks-cream border-b border-ks-blue-mid pb-0.5 hover:text-white hover:border-white transition-colors inline-block"
          >
            View Development Details →
          </a>
        </div>
      </div>
    </section>
  );
}
