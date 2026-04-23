'use client';

import React from 'react';
import Image from 'next/image';

const HistorySection = () => {
    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Visuals */}
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full h-full max-w-[600px]">
                            <Image
                                src="/Green energy solutions on display.png"
                                alt="Renewable Energy History"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="space-y-8 lg:pl-10">
                        <div className="space-y-2">
                            <span className="text-[#28a745] font-bold text-xl uppercase">Our History</span>
                            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight">
                                Innovation In Every Step
                            </h2>
                        </div>

                        {/* Story Content */}
                        <div className="space-y-6">
                            <p className="text-black text-xl leading-[1.6] font-semibold max-w-2xl">
                                At Solar Spectrum, we specialize in smart, affordable, and reliable solar energy and storage solutions. Our history is defined by a continuous focus on innovation and customer satisfaction, helping homes and businesses across Australia switch to clean energy with ease.
                            </p>
                            <p className="text-gray-500 text-[17px] leading-[1.8] max-w-2xl font-medium">
                                We pride ourselves on delivering high-efficiency solar panels and advanced battery technology tailored to your property's unique requirements. Our commitment to excellence ensures a smarter way to generate electricity and power a greener tomorrow for all our clients.
                            </p>


                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HistorySection;
