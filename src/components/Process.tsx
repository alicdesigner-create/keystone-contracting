const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Strategic discussion regarding your architectural vision and the land's unique development potential.",
  },
  {
    number: "02",
    title: "Development & Planning",
    description:
      "Infrastructure coordination, site engineering, and subdivision plans for seamless build-out at any scale.",
  },
  {
    number: "03",
    title: "Structured Execution",
    description:
      "Precision site work and building systems ensuring consistent quality from foundation to frame.",
  },
  {
    number: "04",
    title: "Project Completion",
    description:
      "Final inspection and delivery of high-performance homes built for durability long after completion.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ks-dark py-[72px] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-label font-bold text-[11px] tracking-[3px] uppercase text-ks-blue-light mb-3">How We Work</p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight tracking-tight">
            A Structured Approach<br />to Building
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8 md:gap-0">
          {/* Horizontal connector line (desktop only) */}
          <div className="hidden md:block absolute top-6 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-ks-blue/40" />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 md:px-6 first:md:pl-0 last:md:pr-0 flex flex-col gap-4">
              <div className="w-12 h-12 border border-ks-blue-mid bg-ks-dark flex items-center justify-center flex-shrink-0">
                <span className="font-heading text-[16px] text-ks-blue-light">{step.number}</span>
              </div>
              <div>
                <h3 className="font-label font-bold text-[14px] uppercase tracking-wider text-ks-cream mb-2">
                  {step.title}
                </h3>
                <p className="font-body font-light text-[12px] text-ks-stone leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
