export default function Contact() {
  return (
    <section id="contact" className="py-[60px] lg:py-[100px] px-6 lg:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-5/12 reveal">
            <span className="text-[#B8960C] text-[11px] uppercase tracking-[0.2em] font-bold mb-4 block">
              REACH US
            </span>
            <h2 className="text-[clamp(32px,4vw,52px)] font-serif leading-tight font-light text-[#0A0A0A] uppercase tracking-tight mb-6">
              Get In Touch
            </h2>
            <p className="text-base text-[#444] mb-12 leading-relaxed">
              Send us your project requirements or sourcing inquiry. 
              Our team will respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col gap-2 border-b border-gray-100 pb-6 group">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#999] group-hover:text-[#B8960C] transition-colors">Direct Line</span>
                <a href="tel:+8613059589294" className="text-xl font-serif text-[#0A0A0A] hover:text-[#B8960C] transition-colors">+86 130 5958 9294</a>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 pb-6 group">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#999] group-hover:text-[#B8960C] transition-colors">WhatsApp</span>
                <a href="https://wa.me/97333199172" target="_blank" rel="noopener noreferrer" className="text-xl font-serif text-[#0A0A0A] hover:text-[#B8960C] transition-colors">+973 33199172</a>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 pb-6 group">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#999] group-hover:text-[#B8960C] transition-colors">Middle East Representative</span>
                <a href="tel:+97333199172" className="text-xl font-serif text-[#0A0A0A] hover:text-[#B8960C] transition-colors">+973 33199172</a>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 pb-6 group">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#999] group-hover:text-[#B8960C] transition-colors">Sales Inquiry</span>
                <a href="mailto:sales@foshansummer.com" className="text-lg font-serif text-[#0A0A0A] hover:text-[#B8960C] transition-colors">sales@foshansummer.com</a>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 pb-6 group">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#999] group-hover:text-[#B8960C] transition-colors">General Manager</span>
                <a href="mailto:Summer@foshansummer.com" className="text-lg font-serif text-[#0A0A0A] hover:text-[#B8960C] transition-colors">Summer@foshansummer.com</a>
              </div>
              <div className="flex flex-col gap-2 group pt-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#999] group-hover:text-[#B8960C] transition-colors">Headquarters</span>
                <span className="text-lg font-serif text-[#0A0A0A]">Foshan, Guangdong Province, China</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="bg-gray-50 border border-gray-100 p-2 h-[500px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1847146.5298135893!2d111.83984334999998!3d23.01166665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34025178659174df%3A0x2da86bb391322cae!2sFoshan%2C%20Guangdong%20Province%2C%20China!5e0!3m2!1sen!2sus!4v1714081001234!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 object-cover"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
