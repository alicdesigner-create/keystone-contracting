const projects = [
  "West Wind Estates",
  "Custom Mountain Residence",
  "Commercial Development",
  "Luxury Custom Home",
  "Site & Excavation Project",
  "Subdivision Infrastructure",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-ks-navy py-[72px] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="font-label text-[11px] tracking-[3px] uppercase text-ks-blue-light mb-3">Recent Projects</p>
          <h2 className="font-heading text-[36px] text-white leading-tight">Our Work</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {projects.map((name) => (
            <div key={name} className="relative aspect-[4/3] bg-ks-dark border border-ks-blue group overflow-hidden cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-label text-[10px] tracking-[2px] uppercase text-ks-stone/30">Project Image</span>
              </div>
              <div className="absolute inset-0 bg-ks-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="font-heading text-[20px] text-white text-center px-6 leading-snug">{name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="font-label text-[12px] uppercase tracking-[2px] text-ks-blue-light hover:text-white transition-colors"
          >
            Request a Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
