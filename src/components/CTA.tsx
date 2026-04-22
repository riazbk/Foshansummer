export default function CTA() {
  return (
    <section id="cta" className="relative py-32 w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://i.imgur.com/voqru7N.png" 
          alt="Foshan Summer Sourcing Logistics" 
          className="w-full h-full object-cover block scale-105" 
          loading="lazy" 
        />
      </div>
      
      <div className="relative z-20 text-center text-white px-6 max-w-[800px] mx-auto flex flex-col items-center reveal">
        <h2 className="text-[clamp(32px,4vw,52px)] font-serif leading-[1.1] font-light mb-6 uppercase tracking-tight">
          Ready to Source From China?
        </h2>
        <p className="text-gray-300 text-base max-w-[600px] mx-auto leading-relaxed mb-10 font-sans">
          Tell us what you need — we'll source it, manufacture it, 
          and deliver it to your door.
        </p>
        
        <a href="#contact" className="bg-[#B8960C] text-white px-10 py-4 text-[11px] uppercase tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-all border border-[#B8960C] hover:border-white w-fit mx-auto">
          SEND AN INQUIRY
        </a>
      </div>
    </section>
  );
}
