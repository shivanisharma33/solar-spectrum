'use client';

import React from 'react';
import Image from 'next/image';

const SolarSolution = () => {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/solar.png"
                    alt="Solar Panel Installation"
                    fill
                    className="object-cover"
                />
                {/* Dark Overlay to match the moody look of the reference */}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center space-y-8">

                {/* Play Button with Pulsing Effect */}
                <div className="relative group cursor-pointer mb-4">
                    {/* Animated Ripple Effects */}
                    <div className="absolute inset-0 rounded-full bg-green-500/40 animate-pulse scale-[1.8] opacity-20" />
                    <div className="absolute inset-0 rounded-full bg-green-500/30 animate-pulse scale-[1.4] opacity-30 delay-700" />

                    {/* Main Button */}
                    <div className="relative w-20 h-20 bg-[#16a34a] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(22,163,74,0.6)] transition-all group-hover:scale-110 duration-500 z-10">
                        <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white ml-1 filter drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Headline */}
                <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl tracking-tight leading-tight">
                    Searching for the Perfect <span className="text-green-500">Solar Solution?</span>
                </h2>

                {/* Sub-headline */}
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl font-medium leading-relaxed">
                    We Bring Smart Solar Energy To Every Home And Business, Combining Innovation, Efficiency, And Lasting Performance For A Brighter, Greener Future.
                </p>

                {/* Consult Now Button */}
                <button className="!bg-[#00B612] hover:!bg-[#009a0f] text-white font-bold !py-3.5 !px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(0,182,18,0.3)] text-lg tracking-tight inline-block whitespace-nowrap">
                    Consult Now
                </button>
            </div>
        </section>
    );
};

export default SolarSolution;
