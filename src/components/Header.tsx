import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 py-4 lg:py-6 transition-all duration-300 ${
          isScrolled ? 'bg-white border-b border-[#B8960C]/20 shrink-0 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-4">
          <img 
            src="https://i.imgur.com/hhIB3tH.png" 
            alt="Foshan Summer Logo" 
            className="h-16 lg:h-24 w-auto object-contain cursor-pointer transition-transform hover:scale-105 drop-shadow-sm"
            onClick={() => window.location.href = '#hero'}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          <div className={`flex gap-6 uppercase text-[11px] font-semibold tracking-widest ${isScrolled ? 'text-[#333]' : 'text-white/90'}`}>
            <a href="#hero" className="hover:text-[#B8960C] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#B8960C] transition-colors">About</a>
            <div className="relative group cursor-default py-6 -my-6"> {/* Expanded hover area */}
              <span className="flex items-center gap-1 hover:text-[#B8960C] transition-colors">
                Products <span className="text-[8px]">▼</span>
              </span>
              <div className="absolute hidden group-hover:block top-full pt-2 left-0 w-64 z-[9999]">
                <div className="bg-white border border-gray-100 shadow-xl p-4 space-y-3">
                  {[
                    'Building Materials', 'Interior Finishes', 'Tiles & Flooring', 'Lighting',
                    'Bathroom Fittings', 'Kitchen Products', 'Doors, Windows & Glass', 'Furniture',
                    'Soft Furnishings', 'Decoration Accessories', 'Contracting & Fit-Out', 'Exterior & Landscape', 'Custom Manufacturing', 'EV Charging & Batteries'
                  ].map(item => (
                    <a key={item} href="#products" className="block text-[10px] text-[#333] hover:text-[#B8960C] transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group cursor-default py-6 -my-6">
              <span className="flex items-center gap-1 hover:text-[#B8960C] transition-colors">
                Services <span className="text-[8px]">▼</span>
              </span>
              <div className="absolute hidden group-hover:block top-full pt-2 left-0 w-64 z-[9999]">
                <div className="bg-white border border-gray-100 shadow-xl p-4 space-y-3">
                  {[
                    'Sourcing from China', 'Supplier Management', 'Quality Inspection',
                    'Consolidation & Shipping', 'Project Procurement'
                  ].map(item => (
                    <a key={item} href="#services" className="block text-[10px] text-[#333] hover:text-[#B8960C] transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="#industries" className="hover:text-[#B8960C] transition-colors">Industries</a>
          </div>
          <a href="#contact" className="border border-[#B8960C] text-[#B8960C] px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-[#B8960C] hover:text-white transition-all">
            Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden p-2 ${isScrolled ? 'text-[#0A0A0A]' : 'text-white'}`}
          aria-label="Toggle Menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[10000] bg-black text-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          onClick={closeMobileMenu}
          className="absolute top-6 right-6 p-2 text-white hover:text-[#B8960C] transition-colors"
          aria-label="Close Menu"
        >
          <X size={36} />
        </button>
        <nav className="flex flex-col items-center gap-8 justify-center h-full">
          {['Home', 'About', 'Products', 'Services', 'Industries', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMobileMenu}
              className="text-[28px] font-serif uppercase tracking-[0.2em] hover:text-[#B8960C] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
