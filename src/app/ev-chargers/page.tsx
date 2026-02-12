import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeatPumpEVHero from '@/components/HeatPumpEVHero';
import HeatPumpEVBenefits from '@/components/HeatPumpEVBenefits';
import HeatPumpEVSolutions from '@/components/HeatPumpEVSolutions';
import HeatPumpEVCharging from '@/components/HeatPumpEVCharging';
import HeatPumpEVFAQ from '@/components/HeatPumpEVFAQ';
import HeatPumpEVCTA from '@/components/HeatPumpEVCTA';

export default function EVChargers() {
  return (
    <main>
      <Navbar />
      <HeatPumpEVHero />
      <HeatPumpEVBenefits />
      <HeatPumpEVSolutions />
      <HeatPumpEVCharging />
      <HeatPumpEVFAQ />
      <HeatPumpEVCTA />
      <Footer />
    </main>
  );
}
