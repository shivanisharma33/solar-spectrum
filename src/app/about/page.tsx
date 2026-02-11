'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolarSolution from '@/components/SolarSolution';
import AboutEmpowerSection from '@/components/AboutEmpowerSection';
import PropertyTypesSection from '@/components/PropertyTypesSection';
import HistoryJourneySection from '@/components/HistoryJourneySection';
import ValuesShowcaseSection from '@/components/ValuesShowcaseSection';
import SmartEnergyBanner from '@/components/SmartEnergyBanner';
import AboutHero from '@/components/AboutHero';

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <AboutHero />

            {/* Main Content Section */}
            <AboutEmpowerSection />

          
            {/* Property Types Section */}
            <PropertyTypesSection />

            <SolarSolution />
            {/* History Journey Section (Selected Layout) */}
            <HistoryJourneySection />

            {/* Values Showcase Section */}
            <ValuesShowcaseSection />

            {/* Call to Action Banner */}
            <SmartEnergyBanner />


            <Footer />
        </main>
    );
}
