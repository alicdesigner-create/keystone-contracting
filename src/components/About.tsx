export default function About() {
  return (
    <section id="about" className="bg-ks-navy">
      <div className="grid md:grid-cols-2">
        {/* Left: image with diagonal right clip */}
        <div className="relative min-h-[320px]">
          <div
            className="absolute inset-0 bg-ks-dark flex items-center justify-center"
            style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
          >
            <span className="font-label text-[11px] tracking-[3px] uppercase text-ks-stone/30">About Image</span>
          </div>
        </div>

        {/* Right: content */}
        <div className="px-10 py-16 md:px-14 md:py-20">
          <p className="font-label text-[11px] tracking-[3px] uppercase text-ks-blue-light mb-5">
            About Keystone Contracting
          </p>
          <h2 className="font-heading text-[36px] text-white leading-tight mb-8">
            Built on Execution.<br />Driven by Quality.
          </h2>
          <div className="space-y-5">
            <p className="font-body font-light text-[14px] text-ks-stone leading-[1.8]">
              Based in <strong className="text-ks-cream font-medium">Montrose, CO</strong> with multi-generational ties across the Western Slope, Keystone Contracting represents a new venture built on old roots.
            </p>
            <p className="font-body font-light text-[14px] text-ks-stone leading-[1.8]">
              We leverage <strong className="text-ks-cream font-medium">45 years of construction expertise</strong> to deliver full-service solutions — from raw land to a custom home that reflects your vision, your lifestyle, and your legacy.
            </p>
            <p className="font-body font-light text-[14px] text-ks-stone leading-[1.8]">
              With specialized expertise in <strong className="text-ks-cream font-medium">high-altitude construction</strong> and mountain-specific building requirements, we help clients navigate complex conditions with confidence and precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
