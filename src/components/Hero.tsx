import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative h-[100vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/55 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover block" 
          loading="lazy" 
        />
      </div>
      
      <div className="relative z-20 text-center text-white px-6 max-w-[1200px] mx-auto flex flex-col items-center">
        <span className="text-[#B8960C] text-[11px] uppercase tracking-[0.4em] font-medium mb-6 reveal">
          CHINA-BASED SOURCING & MANUFACTURING
        </span>
        <h2 className="text-[clamp(34px,6vw,72px)] font-serif leading-[1.1] font-light mb-6 uppercase tracking-tight reveal" style={{ transitionDelay: '100ms' }}>
          Your Trusted Partner for Global Procurement
        </h2>
        <p className="text-gray-200 text-sm md:text-base max-w-[600px] mx-auto leading-relaxed mb-10 font-sans reveal" style={{ transitionDelay: '200ms' }}>
          From building materials to custom furniture — we source, manufacture, and deliver anywhere in the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 reveal" style={{ transitionDelay: '300ms' }}>
          <a href="#products" className="bg-[#B8960C] text-white px-8 md:px-10 py-4 text-[11px] uppercase tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-all border border-[#B8960C] hover:border-white">
            EXPLORE PRODUCTS
          </a>
          <a href="#contact" className="border border-white text-white px-8 md:px-10 py-4 text-[11px] uppercase tracking-widest hover:bg-white hover:text-[#0A0A0A] transition-all">
            GET A QUOTE
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
