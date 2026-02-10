import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Process from '@/components/Process';
import Services from '@/components/Services';
import CTASection from '@/components/CTASection';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Process />
        <Services />
          <CTASection />
           <Testimonials />
      <ContactSection />
    
    
     
      <Footer />
    </main>
  );
}
