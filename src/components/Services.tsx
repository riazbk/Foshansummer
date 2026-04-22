export default function Services() {
  const servicesData = [
    {
      num: "01",
      title: "Product Sourcing from China",
      desc: "We identify the right factories, negotiate prices, and arrange samples for any product category — from building materials to custom furniture."
    },
    {
      num: "02",
      title: "Supplier Management",
      desc: "We manage your supplier relationships — communication, timelines, compliance, and performance — so you don't have to."
    },
    {
      num: "03",
      title: "Quality Inspection",
      desc: "Independent factory audits and pre-shipment inspections to guarantee product quality before it leaves China."
    },
    {
      num: "04",
      title: "Consolidation & Shipping",
      desc: "We consolidate orders from multiple suppliers into a single shipment, handling export packaging, freight, and customs."
    },
    {
      num: "05",
      title: "Project Procurement Management",
      desc: "Full-service procurement for large-scale projects — one point of contact for all your China sourcing needs."
    }
  ];

  return (
    <section id="services" className="bg-[#0A0A0A] py-[60px] lg:py-[100px] px-6 lg:px-10 text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal mb-16 lg:mb-24">
          <span className="text-[#B8960C] text-[11px] uppercase tracking-[0.2em] font-bold mb-4 block">
            HOW WE WORK
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <h2 className="text-[clamp(32px,4vw,52px)] font-serif leading-tight font-light uppercase tracking-tight max-w-[500px]">
              Our Services
            </h2>
            <p className="text-[14px] text-gray-400 font-sans max-w-[400px]">
              End-to-end procurement and supply chain management.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {servicesData.map((service, index) => (
            <div 
              key={service.num}
              className="py-10 border-b border-white/10 flex flex-col md:flex-row gap-6 md:gap-16 items-start reveal group transition-colors hover:bg-white/5 px-4 -mx-4"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-[#B8960C] font-serif italic text-4xl lg:text-5xl shrink-0 leading-none">
                {service.num}
              </div>
              <div className="flex-grow flex flex-col lg:flex-row gap-4 lg:gap-16 justify-between lg:items-center">
                <h3 className="text-xl lg:text-2xl font-serif tracking-wide uppercase max-w-[400px] group-hover:text-[#B8960C] transition-colors shrink-0">
                  {service.title}
                </h3>
                <p className="text-[13px] text-gray-400 leading-relaxed max-w-[500px]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
