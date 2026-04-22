export default function About() {
  return (
    <section id="about" className="py-[60px] lg:py-[100px] px-6 lg:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2 overflow-hidden reveal group relative">
            <div className="h-[400px] lg:h-[520px] w-full relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85" 
                alt="Chinese Factory Manufacturing Facility" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                loading="lazy" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#0A0A0A]/80 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-[10px] uppercase tracking-widest font-bold">China's Manufacturing Heartland</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center reveal" style={{ transitionDelay: '200ms' }}>
            <span className="text-[#B8960C] text-[11px] uppercase tracking-[0.2em] font-bold mb-4 block">
              WHO WE ARE
            </span>
            <h2 className="text-3xl lg:text-[42px] font-serif leading-[1.2] font-light text-[#0A0A0A] mb-8 uppercase tracking-tight">
              China's Most Reliable Sourcing & Manufacturing Partner
            </h2>
            <p className="text-base text-[#444] leading-[1.8] font-sans mb-8">
              Foshan Summer is a China-based sourcing, manufacturing, and supply company 
              providing complete solutions for construction, interior fit-out, contracting, 
              and custom-made products. We connect clients with reliable Chinese manufacturers 
              and deliver all-in-one procurement for residential, commercial, hospitality, 
              and large-scale projects. Based in Foshan — the heart of southern China's 
              manufacturing industry — we have direct access to verified factories across 
              every product category.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 pt-6 border-t border-gray-100">
              <div className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 text-[#0A0A0A]">
                <span className="text-[#B8960C]">✓</span> Factory Direct
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 text-[#0A0A0A]">
                <span className="text-[#B8960C]">✓</span> Quality Verified
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 text-[#0A0A0A]">
                <span className="text-[#B8960C]">✓</span> Global Delivery
              </div>
            </div>

            <a href="#services" className="inline-block text-[#B8960C] text-[11px] uppercase tracking-[0.2em] font-bold hover:text-[#0A0A0A] transition-colors w-fit group">
              Our Services <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
