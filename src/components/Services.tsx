const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Custom Home Construction",
    description: "High-quality homes built with premium materials and a focus on lasting structural strength in mountain environments.",
    tags: ["Luxury Builds", "High-Altitude", "Custom Finishes"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Land Development",
    description: "Transforming raw land into build-ready residential communities with strategic infrastructure planning.",
    tags: ["Raw Land", "Subdivision Planning", "Infrastructure"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M4 20V8l8-6 8 6v12" />
        <rect x="9" y="14" width="6" height="6" />
      </svg>
    ),
    title: "Subdivision Construction",
    description: "Scalable construction systems designed for residential subdivisions and investor-driven developments.",
    tags: ["Multi-Lot", "Phased Development", "Investor Ready"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
        <path d="M3 19h18" />
      </svg>
    ),
    title: "Site Work & Excavation",
    description: "Precision earthwork, grading, and drainage across complex terrains ensuring a reliable foundation.",
    tags: ["Grading", "Excavation", "Drainage"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: "Commercial Construction",
    description: "Professional execution for retail, light industrial, and office builds with structural precision.",
    tags: ["Commercial", "Mixed-Use", "Structural Steel"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
    title: "Project Management",
    description: "End-to-end oversight from pre-construction planning through final delivery and client handoff.",
    tags: ["Full Lifecycle", "Timelines", "Communication"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ks-dark py-[72px] px-6 md:px-12" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <p className="font-label font-bold text-[11px] tracking-[3px] uppercase text-ks-blue-light mb-3">What We Build</p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight tracking-tight">
              Full-Scale Construction<br />&amp; Development
            </h2>
          </div>
          <a
            href="#contact"
            className="font-label text-[12px] text-ks-blue-light tracking-wider mt-4 md:mt-0 hover:text-white transition-colors"
          >
            View All Services →
          </a>
        </div>

        {/* 3-col grid with border trick */}
        <div className="bg-ks-blue/30 p-px" style={{ backgroundColor: '#000000' }}>
          <div className="grid md:grid-cols-3 gap-px bg-ks-blue/30" style={{ backgroundColor: '#000000' }}>
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-ks-dark p-8 flex flex-col gap-4 hover:bg-ks-navy transition-colors"
                style={{ backgroundColor: '#000000' }}
              >
                <div className="w-10 h-10 border border-ks-blue flex items-center justify-center text-ks-blue-light flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="font-label font-extrabold text-lg uppercase tracking-[1px] text-ks-cream">
                  {service.title}
                </h3>
                <p className="font-body font-light text-[13px] text-ks-stone leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label text-[10px] uppercase text-ks-blue-light border border-ks-blue px-2 py-1 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
