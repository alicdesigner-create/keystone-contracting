import Image from "next/image";

const navLinks = ["About", "Services", "Subdivisions", "Process", "Portfolio", "Contact"];
const serviceLinks = [
  "Custom Homes",
  "Land Development",
  "Subdivision Construction",
  "Site Work",
  "Commercial",
  "Project Management",
];

export default function Footer() {
  return (
    <footer className="border-t border-ks-blue/30" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-6">

        {/* Top grid — 1 col mobile, 4 col desktop */}
        <div className="grid md:grid-cols-4 gap-10 pb-8 border-b border-ks-blue/20">

          {/* Col 1: Logo + tagline + socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/images/keystone_contracting_Logo-footer.png"
              alt="Keystone Contracting"
              width={160}
              height={36}
              className="h-9 w-auto mb-4"
            />
            <p className="font-body font-light text-[13px] text-ks-cream leading-relaxed mb-5">
              Built Right. Built to Last.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" aria-label="Facebook" className="text-ks-cream hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-ks-cream hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-ks-cream hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-ks-cream hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="text-center md:text-left">
            <p className="font-label text-[10px] uppercase tracking-[3px] text-ks-blue-light mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body font-light text-[13px] text-ks-cream hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="text-center md:text-left">
            <p className="font-label text-[10px] uppercase tracking-[3px] text-ks-blue-light mb-4">Services</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="font-body font-light text-[13px] text-ks-cream hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="text-center md:text-left">
            <p className="font-label text-[10px] uppercase tracking-[3px] text-ks-blue-light mb-4">Contact</p>
            <div className="space-y-3">
              <p className="font-body font-light text-[13px] text-ks-cream">970-314-8384</p>
              <p className="font-body font-light text-[13px] text-ks-cream">build@keystonecontracting.com</p>
              <p className="font-body font-light text-[13px] text-ks-cream">Montrose, CO</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-5 text-center md:text-left">
          <p className="font-body text-[11px] text-ks-cream">
            © 2026 Keystone Contracting. All rights reserved.
          </p>
          <a
            href="https://tesographics.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] text-ks-blue-light hover:text-white transition-colors"
          >
            Developed by tesographics.com
          </a>
        </div>
      </div>
    </footer>
  );
}
