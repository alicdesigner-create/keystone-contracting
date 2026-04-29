"use client";
import Image from "next/image";
import { useState } from "react";

const links = ["About", "Services", "Subdivisions", "Process", "Portfolio", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ks-dark border-b border-ks-blue">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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
          <span className="font-label text-[10px] md:text-[11px] tracking-widest uppercase text-ks-accent/60 mt-0.5 md:mt-0">
            Contracting &amp; Land Development
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-label text-[12px] tracking-[2px] uppercase text-ks-stone hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block font-label text-[11px] uppercase tracking-[1.5px] text-ks-accent bg-ks-blue border border-ks-blue-mid px-4 py-2 hover:bg-ks-blue-mid transition-colors"
        >
          Request a Quote
        </a>

        <button
          className="md:hidden text-ks-stone hover:text-white p-1 transition-colors"
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

      {open && (
        <div className="md:hidden bg-ks-dark border-t border-ks-blue px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-label text-[12px] tracking-[2px] uppercase text-ks-stone hover:text-white transition-colors py-3 border-b border-ks-blue/20 last:border-0"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-label text-[11px] uppercase tracking-[1.5px] text-ks-accent bg-ks-blue border border-ks-blue-mid px-4 py-3 text-center hover:bg-ks-blue-mid transition-colors mt-3"
          >
            Request a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
