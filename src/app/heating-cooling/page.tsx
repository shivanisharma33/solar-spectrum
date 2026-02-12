import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeatingCoolingHero from '@/components/HeatingCoolingHero';
import HeatingCoolingBenefits from '@/components/HeatingCoolingBenefits';
import HeatingCoolingSolutions from '@/components/HeatingCoolingSolutions';
import HeatingCoolingFAQ from '@/components/HeatingCoolingFAQ';
import HeatingCoolingCTA from '@/components/HeatingCoolingCTA';

export default function HeatingCooling() {
  return (
    <main>
      <Navbar />
      <HeatingCoolingHero />
      <HeatingCoolingBenefits />
      <HeatingCoolingSolutions />
      <HeatingCoolingFAQ />
      <HeatingCoolingCTA />
      <Footer />
    </main>
  );
}
