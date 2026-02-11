'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductHero from '@/components/ProductHero';
import ProductInfoSection from '@/components/ProductInfoSection';
import WhyChoosePowerwall from '@/components/WhyChoosePowerwall';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PowerwallWorthSection from '@/components/PowerwallWorthSection';
import SolarSolutionsSection from '@/components/SolarSolutionsSection';
import FAQSection from '@/components/FAQSection';

export default function ProductPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <ProductHero />

            <ProductInfoSection />

            <WhyChoosePowerwall />

            <PricingSection />

            <PowerwallWorthSection />
          <TestimonialsSection />
            <SolarSolutionsSection />

            <FAQSection />

            <Footer />
        </main>
    );
}
