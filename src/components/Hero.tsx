export default function Hero() {
  return (
    <section className="relative min-h-screen bg-ks-dark flex flex-col overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(26,58,92,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(26,58,92,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Right panel — hidden on mobile */}
      <div
        className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 bg-ks-navy z-0"
        style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="bg-ks-blue/10 border border-ks-blue/30 w-3/4 h-3/4 flex items-center justify-center">
            <span className="font-label text-[11px] tracking-[3px] uppercase text-ks-stone/50">Hero Image</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-24 md:py-0">
          <div className="max-w-lg">
            <p className="font-label text-[11px] tracking-[3px] uppercase text-ks-blue-light mb-6">
              Montrose, CO · Western Slope
            </p>
            <h1 className="font-heading text-5xl md:text-[64px] leading-[1.1] text-white mb-6">
              Built Right.<br />
              <span className="text-ks-blue-light">Built to Last.</span>
            </h1>
            <p className="font-body font-light text-[15px] text-ks-stone leading-relaxed mb-10 max-w-md">
              45 years of Western Slope expertise. From raw land to luxury custom homes — we deliver full-scale construction and development with precision at every stage.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
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

      {/* Stats bar */}
      <div className="relative z-10 border-t border-ks-blue/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-3 divide-x divide-ks-blue/20">
            {[
              { number: "45+", label: "Years of Experience" },
              { number: "33", label: "Lots · West Wind Estates" },
              { number: "100%", label: "Western Slope Focus" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 px-6 first:pl-0">
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
