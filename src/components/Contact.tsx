const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.89 10.11 19.79 19.79 0 01.82 1.45a2 2 0 012-.22h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "970-314-8384",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "build@keystonecontracting.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Montrose, CO — Western Slope",
  },
];

const inputClass =
  "w-full bg-ks-navy border border-ks-blue text-ks-cream font-body text-[13px] px-3.5 py-2.5 outline-none focus:border-ks-blue-mid transition-colors placeholder:text-ks-cream/40 rounded-none";

const labelClass = "font-label font-bold text-[10px] uppercase tracking-[2px] text-ks-cream block mb-1.5";

export default function Contact() {
  return (
    <section id="contact" className="bg-ks-dark py-[72px] px-6 md:px-12 border-t border-ks-blue/30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="font-label font-bold text-[11px] tracking-[3px] uppercase text-ks-blue-light mb-4 text-center md:text-left">Get in Touch</p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight tracking-tight mb-6 text-center md:text-left">Start Your Project</h2>
          <p className="font-body font-light text-[14px] text-ks-cream leading-[1.8] mb-10 text-center md:text-left">
            Provide your project details and our team will follow up with a technical assessment, clear next steps, and a firm timeline for your vision on the Western Slope.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex flex-col items-center md:flex-row md:items-start gap-3 text-center md:text-left">
                <div className="w-8 h-8 border border-ks-blue flex items-center justify-center text-ks-blue-light flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[2px] text-ks-accent mb-0.5">{item.label}</p>
                  <p className="font-body text-[14px] text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>First Name</label>
              <input type="text" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Last Name</label>
              <input type="text" className={inputClass} />
            </div>
          </div>

          {(
            [
              { label: "Email Address", type: "email" },
              { label: "Phone Number", type: "tel" },
              { label: "Project Address", type: "text" },
            ] as const
          ).map((field) => (
            <div key={field.label}>
              <label className={labelClass}>{field.label}</label>
              <input type={field.type} className={inputClass} />
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Project Type</label>
              <select className={inputClass}>
                {["Custom Home", "Land Development", "Subdivision", "Commercial", "Site Work", "Other"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Budget Range</label>
              <select className={inputClass}>
                {["Under $500K", "$500K–$1M", "$1M–$2M", "$2M–$5M", "$5M+"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Project Details</label>
            <textarea rows={4} className={`${inputClass} resize-none`} />
          </div>

          <button
            type="submit"
            className="w-full bg-ks-blue text-white font-label text-[12px] uppercase tracking-[2px] py-4 hover:bg-ks-blue-mid transition-colors"
          >
            Request Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
