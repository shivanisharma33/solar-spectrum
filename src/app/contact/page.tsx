import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactLocations from '@/components/ContactLocations';

export default function Contact() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactLocations />
      <Footer />
    </main>
  );
}
