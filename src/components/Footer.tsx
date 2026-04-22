export default function Footer() {
  const products = [
    'Building Materials', 'Interior Finishing Materials', 'Tiles & Flooring',
    'Bathroom Fittings & Sanitary Ware', 'Kitchen Products', 'Lighting',
    'Doors, Windows & Glass', 'Furniture', 'Soft Furnishings', 'Decoration Accessories',
    'Contracting & Fit-Out Products', 'Exterior & Landscape Materials', 'Custom Manufacturing', 'EV Charging & Batteries'
  ];

  const services = [
    'Product Sourcing from China',
    'Supplier Management',
    'Quality Inspection',
    'Consolidation & Shipping',
    'Project Procurement Management'
  ];

  const industries = [
    'Residential Villas', 'Apartments', 'Hotels & Resorts', 'Restaurants & Cafes',
    'Hospitals', 'Schools', 'Retail & Shopping Malls', 'Mosques',
    'Commercial Towers', 'Mixed-Use Developments', 'Office Buildings', 'Outdoor & Landscape'
  ];

  return (
    <footer id="footer" className="bg-[#0A0A0A] text-white pt-20 pb-10 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto border-b border-white/10 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <img 
            src="https://i.imgur.com/hhIB3tH.png" 
            alt="Foshan Summer Logo" 
            className="h-16 lg:h-20 w-auto object-contain bg-white p-2 rounded-sm"
          />
          <a href="#hero" className="text-[10px] uppercase tracking-widest text-[#999] hover:text-white transition-colors flex items-center gap-2">
            Back to Top <span className="text-[#B8960C] text-lg">↑</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <h3 className="text-[#B8960C] text-[10px] uppercase tracking-widest font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {products.map(p => (
                <li key={p}>
                  <a href="#products" className="text-[12px] text-gray-400 hover:text-white transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#B8960C] text-[10px] uppercase tracking-widest font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-[12px] text-gray-400 hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#B8960C] text-[10px] uppercase tracking-widest font-bold mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map(i => (
                <li key={i}>
                  <a href="#industries" className="text-[12px] text-gray-400 hover:text-white transition-colors">{i}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#B8960C] text-[10px] uppercase tracking-widest font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-[12px] text-gray-400 hover:text-white transition-colors uppercase tracking-wider">About Us</a></li>
              <li><a href="#contact" className="text-[12px] text-gray-400 hover:text-white transition-colors uppercase tracking-wider">Contact</a></li>
              <li><a href="#contact" className="text-[12px] text-[#B8960C] hover:text-white transition-colors uppercase tracking-wider">Get a Quote</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
        <p>© 2026 Foshan Summer. All Rights Reserved.</p>
        <p>China-Based Sourcing & Manufacturing</p>
      </div>
    </footer>
  );
}
