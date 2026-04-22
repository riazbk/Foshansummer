export default function WhyUs() {
  const features = [
    {
      title: "Factory Direct Access",
      desc: "Direct relationships with verified manufacturers across Foshan, Guangzhou, and the wider Pearl River Delta — the world's most concentrated manufacturing region."
    },
    {
      title: "Single Procurement Partner",
      desc: "From a single product to a complete project fit-out — one relationship, one point of contact, every category handled."
    },
    {
      title: "Quality Control",
      desc: "Every order includes factory vetting, sample approval, production monitoring, and pre-shipment inspection before goods leave China."
    },
    {
      title: "Global Logistics",
      desc: "Full export coordination — consolidation, freight, customs documentation, and door-to-door delivery to your destination."
    }
  ];

  return (
    <section id="why-us" className="py-[60px] lg:py-[100px] px-6 lg:px-10 bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-[#B8960C] text-[11px] uppercase tracking-[0.2em] font-bold mb-4 block">
            OUR ADVANTAGE
          </span>
          <h2 className="text-[clamp(32px,4vw,52px)] font-serif leading-tight font-light text-[#0A0A0A] uppercase tracking-tight">
            Why Choose Foshan Summer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white p-8 border border-gray-100 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 reveal group shadow-sm hover:shadow-xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-gray-50 border border-gray-100 rounded-sm group-hover:border-[#B8960C] group-hover:bg-[#B8960C]/5 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8960C" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
                  {i === 0 && <path d="M3 21h18M5 21V5l7-3 7 3v16M9 21v-4h6v4" />}
                  {i === 1 && <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />}
                  {i === 2 && <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />}
                  {i === 3 && <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>}
                </svg>
              </div>
              <h3 className="text-lg font-serif uppercase tracking-wider text-[#0A0A0A] mb-4">
                {feature.title}
              </h3>
              <p className="text-[13px] text-[#444] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
