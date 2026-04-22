const productsData = [
  {
    title: "Building Materials",
    desc: "Cement, gypsum boards, insulation, waterproofing, roofing, sealants, metal framing, and more.",
    img: "https://i.imgur.com/q2RqXJB.png" 
  },
  {
    title: "Interior Finishing Materials",
    desc: "Wall panels, decorative panels, acoustic panels, ceiling systems, partitions, cladding, cornices, moldings, wallpaper, and fabrics for curtains and upholstery.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85" // Interior room
  },
  {
    title: "Tiles & Flooring",
    desc: "Ceramic, porcelain, marble-look, mosaic, SPC, vinyl, laminate, engineered wood, rubber, and outdoor decking.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85" // Hallway glass/floor
  },
  {
    title: "Bathroom Fittings & Sanitary Ware",
    desc: "Toilets, basins, vanities, bathtubs, shower systems, faucets, mirrors, sensor fittings, and accessories.",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1920&q=85" // Bathroom
  },
  {
    title: "Kitchen Products",
    desc: "Kitchen cabinets, custom cabinetry, countertops, quartz tops, sinks, backsplashes, and built-in hardware.",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=85" // Kitchen
  },
  {
    title: "Lighting",
    desc: "Chandeliers, pendants, track lights, LED strips, facade lighting, smart lighting, hotel and commercial fixtures.",
    img: "https://i.imgur.com/jEbCqEb.png" 
  },
  {
    title: "Doors, Windows & Glass",
    desc: "Wooden, fire-rated, aluminum, sliding glass doors; uPVC windows, curtain walls, glass partitions, shower glass.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85" // Blueprint / Desk
  },
  {
    title: "Furniture",
    desc: "Residential, commercial, hotel, office, restaurant furniture — custom-made, built-in, wardrobes, sofas, and more.",
    img: "https://i.imgur.com/QFuIUrC.png" 
  },
  {
    title: "Soft Furnishings",
    desc: "Curtains, blackout blinds, upholstery, bedding, rugs, carpets, and decorative textiles.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85" // Interior room
  },
  {
    title: "Decorative Accessories",
    desc: "Artworks, sculptures, vases, mirrors, centerpieces, luxury hotel room décor, and bespoke styling accessories.",
    img: "https://i.imgur.com/ympJqdO.png" 
  },
  {
    title: "Contracting & Fit-Out Products",
    desc: "Joinery, millwork, shop fittings, reception counters, office partitions, ironmongery, and architectural hardware.",
    img: "https://i.imgur.com/LSygHVW.png" 
  },
  {
    title: "Exterior & Landscape Materials",
    desc: "Outdoor tiles, interlock pavers, WPC decking, pergolas, fencing, garden lighting, artificial grass, planters.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85" // House
  },
  {
    title: "Custom Manufacturing",
    desc: "OEM/ODM production, private label, custom furniture, custom lighting, metal works, stone cutting, and special fabrication.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85" // Factory
  },
  {
    title: "EV Charging Stations & Batteries",
    desc: "Commercial EV chargers, fast-charging hubs, residential wallboxes, solar batteries, and green energy accessories.",
    img: "https://i.imgur.com/QrDSqNe.png"
  }
];

export default function Products() {
  return (
    <section id="products" className="bg-gray-50 py-[60px] lg:py-[100px] px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-[#B8960C] text-[11px] uppercase tracking-[0.2em] font-bold mb-4 block">
            WHAT WE SUPPLY
          </span>
          <h2 className="text-[clamp(32px,4vw,52px)] font-serif leading-tight font-light text-[#0A0A0A] uppercase tracking-tight mb-4">
            Complete Product Range
          </h2>
          <p className="text-base text-[#444] max-w-[600px] mx-auto font-sans leading-relaxed">
            14 categories covering everything your project needs — sourced 
            directly from verified Chinese manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-100 flex flex-col justify-between hover:-translate-y-1 hover:border-[#B8960C] hover:shadow-xl transition-all duration-300 reveal"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="h-[200px] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-[#0A0A0A] mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-[13px] text-[#444] leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <a href="#products" className="text-[#B8960C] text-[10px] uppercase tracking-widest font-bold flex items-center group-hover:text-[#0A0A0A] transition-colors mt-auto w-fit">
                  View Details <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
