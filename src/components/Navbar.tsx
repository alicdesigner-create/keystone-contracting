"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = ["About", "Services", "Subdivisions", "Process", "Portfolio", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#07090f] border-b border-ks-blue transition-all duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.9)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo lockup */}
        <a href="#" className="flex-shrink-0 flex flex-col md:flex-row md:items-center md:gap-3">
          <Image
            src="/images/keystone_contracting_Logo-02.png"
            alt="Keystone Contracting"
            width={180}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="hidden md:block w-px h-5 bg-ks-blue-mid/60 self-center" />
          <span className="font-label font-semibold text-[10px] md:text-[11px] tracking-widest uppercase text-white mt-0.5 md:mt-0">
            Contracting &amp; Land Development
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative font-label font-semibold text-[12px] tracking-[2px] uppercase text-white hover:text-ks-accent active:scale-95 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-ks-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden md:inline-block font-label font-bold text-[11px] uppercase tracking-[1.5px] text-white bg-ks-blue border border-ks-blue-mid px-4 py-2 hover:bg-ks-blue-mid hover:border-ks-accent/60 hover:shadow-[0_0_14px_rgba(168,196,224,0.18)] active:scale-95 transition-all duration-200"
        >
          Request a Quote
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white hover:text-ks-accent p-1 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#07090f] border-t border-ks-blue px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-label font-semibold text-[12px] tracking-[2px] uppercase text-white hover:text-ks-accent transition-colors duration-200 py-3 border-b border-ks-blue/20 last:border-0"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-label font-bold text-[11px] uppercase tracking-[1.5px] text-white bg-ks-blue border border-ks-blue-mid px-4 py-3 text-center hover:bg-ks-blue-mid active:scale-95 transition-all duration-200 mt-3"
          >
            Request a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
