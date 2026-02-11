'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const HistorySection = () => {
    const [activeYear, setActiveYear] = useState('2020');
    const years = ['2020', '2021', '2022', '2023', '2024', '2025'];

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
                                Journey Was Started
                            </h2>
                        </div>

                        {/* Timeline Tags */}
                        <div className="flex flex-wrap gap-4 md:gap-8">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setActiveYear(year)}
                                    className={`px-6 py-2 rounded-full transition-all duration-300 font-bold text-lg ${activeYear === year
                                            ? "bg-[#d4edda] text-black border border-[#28a745]"
                                            : "text-gray-500 hover:text-black"
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>

                        {/* Story Content */}
                        <div className="space-y-6 animate-fadeIn">
                            <div className="flex items-center gap-3">
                                <span className="bg-red-500 w-1.5 h-1.5 rounded-full ring-4 ring-red-100"></span>
                                <h4 className="text-xl font-bold text-gray-700">Year {activeYear}</h4>
                            </div>
                            <h3 className="text-3xl md:text-[42px] font-black text-black leading-[1.2]">
                                Proud Recipient Of Our First Award<br />From Australia
                            </h3>
                            <p className="text-gray-500 text-[17px] leading-[1.8] max-w-2xl font-medium">
                                Despite Applying For Three Times And Even Hiring A Lawyer To Assist With The Process.
                                Morgan Was Unable To Get Authorization To Fly To The USA For The Premiere Of
                                Her Film About A Factory-Farmed Pig.
                            </p>

                            <button className="!bg-[#28A745] hover:!bg-green-700 text-white font-bold !py-4.5 !px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_10px_35px_rgba(40,167,69,0.25)] text-lg">
                                See Our Achievement
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HistorySection;
