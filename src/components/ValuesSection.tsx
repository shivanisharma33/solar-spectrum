'use client';

import React from 'react';

const ValuesSection = () => {
    return (
        <section className="bg-white py-24 overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1240px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side: Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-[#65B741] font-bold text-[18px] uppercase tracking-wider">Our Value</span>
                            <h2 className="text-[48px] md:text-[60px] font-[900] text-black leading-[1.05] tracking-tight">
                                The Better Source Of<br />
                                Energy For The Better<br />
                                Tomorrow.
                            </h2>
                        </div>

                        <p className="text-[#666666] text-[17px] leading-[1.8] max-w-xl font-medium">
                            At Solar Spectrum, We Believe In Delivering Sustainable Energy With Integrity,
                            Innovation, And Excellence. We're Committed To Customer Satisfaction,
                            Smart Technology, And Creating A Greener Future For All.
                        </p>

                        <button className="!bg-[#28A745] hover:!bg-green-700 text-white font-bold !py-4.5 !px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_12px_30px_rgba(40,167,69,0.3)] text-[18px]">
                            Discover More
                        </button>
                    </div>

                    {/* Right Side: Cards */}
                    <div className="space-y-8 lg:pl-4">
                        {/* Our Vision Card - Gradient */}
                        <div className="relative p-8 rounded-[35px] bg-gradient-to-r from-[#28A745] via-[#28A745] to-[#FFB800] flex items-center gap-8 shadow-[0_25px_50px_rgba(40,167,69,0.25)] hover:-translate-y-1 transition-transform duration-500">
                            <div className="flex-shrink-0 w-22 h-22 bg-white rounded-full flex items-center justify-center shadow-xl">
                                <svg className="w-11 h-11 text-[#28A745]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-white text-[26px] font-[800]">Our Vision</h3>
                                <p className="text-white/90 text-[15px] leading-relaxed max-w-[280px] font-medium">
                                    Smart Solar Systems Designed For Your Needs — Saving Energy With Simple Setup And Lasting Performance.
                                </p>
                            </div>
                        </div>

                        {/* Our Mission Card - White */}
                        <div className="relative p-8 rounded-[35px] bg-white border border-gray-50 flex items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500">
                            <div className="flex-shrink-0 w-22 h-22 bg-[#28A745] rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.59 8.31m5.84 3.49a15.2 15.2 0 01-1.95 5.57m-9.48-1.57a15.2 15.2 0 01-1.95-5.57m11.43 7.14a15.2 15.2 0 01-5.57 1.95m1.57-9.48a15.2 15.2 0 015.57-1.95M9.59 8.31a6 6 0 00-7.38 5.84h4.8m2.58-5.84a14.98 14.98 0 0112.12-6.16A14.98 14.98 0 0114.37 7.59" />
                                </svg>
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-black text-[26px] font-[800]">Our Mission</h3>
                                <p className="text-[#666666] text-[15px] leading-relaxed max-w-[280px] font-medium">
                                    Smart Solar Systems Designed For Your Needs — Saving Energy With Simple Setup And Lasting Performance.
                                </p>
                            </div>
                        </div>

                        {/* Our Motto Card - White */}
                        <div className="relative p-8 rounded-[35px] bg-white border border-gray-50 flex items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500">
                            <div className="flex-shrink-0 w-22 h-22 bg-[#28A745] rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-11 h-11 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.59 8.31m5.84 3.49a15.2 15.2 0 01-1.95 5.57m-9.48-1.57a15.2 15.2 0 01-1.95-5.57m11.43 7.14a15.2 15.2 0 01-5.57 1.95m1.57-9.48a15.2 15.2 0 015.57-1.95M9.59 8.31a6 6 0 00-7.38 5.84h4.8m2.58-5.84a14.98 14.98 0 0112.12-6.16A14.98 14.98 0 0114.37 7.59" />
                                </svg>
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-black text-[26px] font-[800]">Our Motto</h3>
                                <p className="text-[#666666] text-[15px] leading-relaxed max-w-[280px] font-medium">
                                    Smart Solar Systems Designed For Your Needs — Saving Energy With Simple Setup And Lasting Performance.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default ValuesSection;
