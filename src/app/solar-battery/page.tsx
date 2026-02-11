'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProblemFixSection from '@/components/ProblemFixSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ConnectExpertsSection from '@/components/ConnectExpertsSection';
import ServicesGrid from '@/components/ServicesGrid';

export default function SolarBatteryPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[320px] md:h-[420px] lg:h-[460px] flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <Image
                    src="/solar.png"
                    alt="Smart Energy Solutions"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/55 z-10"></div>

                {/* Content Wrapper */}
                <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">

                    {/* Subtitle */}
                    <p className="text-[#65B741] 
                            text-[14px] md:text-[16px] 
                            font-semibold 
                            tracking-[0.5px] 
                            mb-4">
                        Energy Which Matters
                    </p>

                    {/* Main Heading (Reduced Size) */}
                    <h1 className="text-white 
                            font-extrabold 
                            uppercase 
                            text-[22px] sm:text-[28px] md:text-[40px] lg:text-[48px] 
                            leading-[1.2] 
                            tracking-[0.5px]">
                        SMART ENERGY SOLUTIONS FOR <br className="hidden md:block" />
                        EVERY INDUSTRY
                    </h1>

                </div>
            </section>

            {/* Services Grid Section */}
            <ServicesGrid />

            <ProblemFixSection />

            <TestimonialsSection />

            <ConnectExpertsSection />

            <Footer />
        </main>
    );
}
