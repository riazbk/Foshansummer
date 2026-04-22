import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  // Intersection Observer for scroll reveal functionality across the whole app
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    // Slight delay to ensure DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }, 100);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-[#0A0A0A] font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Industries />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

