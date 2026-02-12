import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactBanner from '@/components/ContactBanner';
import ContactLocations from '@/components/ContactLocations';

export default function Contact() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactBanner />
      <ContactLocations />
      <Footer />
    </main>
  );
}
