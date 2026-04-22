export default function Industries() {
  const industries = [
    { icon: "🏠", name: "Residential Villas" },
    { icon: "🏢", name: "Apartments" },
    { icon: "🏨", name: "Hotels & Resorts" },
    { icon: "🍽️", name: "Restaurants & Cafes" },
    { icon: "🏥", name: "Hospitals" },
    { icon: "🏫", name: "Schools" },
    { icon: "🏬", name: "Retail & Shopping Malls" },
    { icon: "🕌", name: "Mosques" },
    { icon: "🏗️", name: "Commercial Towers" },
    { icon: "🏢", name: "Mixed-Use Developments" },
    { icon: "🏢", name: "Office Buildings" },
    { icon: "🌿", name: "Outdoor & Landscape" },
  ];

  return (
    <section id="industries" className="py-[60px] lg:py-[100px] px-6 lg:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-[#B8960C] text-[11px] uppercase tracking-[0.2em] font-bold mb-4 block">
            WHO WE SERVE
          </span>
          <h2 className="text-[clamp(32px,4vw,52px)] font-serif leading-tight font-light text-[#0A0A0A] uppercase tracking-tight">
            Projects We Supply
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className="bg-gray-50 border border-gray-100 p-8 flex flex-col items-center justify-center text-center hover:border-[#B8960C] hover:bg-white hover:shadow-lg transition-all duration-300 reveal group"
              style={{ transitionDelay: `${(i % 4) * 50}ms` }}
            >
              <span className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{ind.icon}</span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#333] group-hover:text-[#0A0A0A]">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
