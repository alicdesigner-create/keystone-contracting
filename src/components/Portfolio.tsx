import Image from "next/image";

const projects = [
  { name: "West Wind Estates",           image: "/images/card-west-wind-estates.jpg" },
  { name: "Custom Mountain Residence",   image: "/images/card-custom-mountain-residence.jpg" },
  { name: "Commercial Development",      image: "/images/card-commercial-development.jpg" },
  { name: "Luxury Custom Home",          image: "/images/card-luxury-custom-home.jpg" },
  { name: "Site & Excavation Project",   image: "/images/card-site-excavation.jpg" },
  { name: "Subdivision Infrastructure",  image: "/images/card-subdivision-infrastructure.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-ks-navy py-[72px] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <p className="font-label font-bold text-[11px] tracking-[3px] uppercase text-ks-blue-light mb-3">Recent Projects</p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight tracking-tight">Our Work</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {projects.map((project) => (
            <div
              key={project.name}
              className="relative aspect-[4/3] bg-ks-dark border border-ks-blue group overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="font-heading text-[20px] text-white text-center px-6 leading-snug">{project.name}</h3>
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
