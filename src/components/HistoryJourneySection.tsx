'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './HistoryJourneySection.module.css';

const HistoryJourneySection = () => {
    const [activeYear, setActiveYear] = useState('2020');

    const journeyData = {
        '2020': {
            title: "Proud Recipient Of Our First Award From Australia",
            description: "Despite Applying For Three Times And Even Hiring A Lawyer To Assist With The Process. Morgan Was Unable To Get Authorization To Fly To The USA For The Premiere Of Her Film About A Factory-Farmed Pig."
        },
        '2021': {
            title: "Expanded Our Operations To Global Markets",
            description: "After a successful year of growth, we expanded our services to multiple international locations, bringing sustainable energy solutions to a wider audience."
        },
        '2022': {
            title: "Innovation Peak: New Battery Technology",
            description: "We introduced a breakthrough in energy storage technology, significantly increasing the efficiency and lifespan of our residential battery systems."
        },
        '2023': {
            title: "Reaching 1 Million Solar Installations",
            description: "A major milestone was achieved as we surpassed one million successful solar panel installations across residential and commercial properties."
        },
        '2024': {
            title: "Partnership with Leading Tech Giants",
            description: "Strategic partnerships with global technology leaders enabled us to integrate smart home features and advanced energy management systems."
        },
        '2025': {
            title: "Vision 2025: Net Zero Commitment",
            description: "We officially launched our commitment to achieving net-zero carbon emissions across all our operations and supply chains by the end of the year."
        }
    };

    const years = ['2020', '2021', '2022', '2023', '2024', '2025'];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Side - Visual Composition */}
                <div className={styles.visualContainer}>
                    <Image
                        src="/Solar Spectrum.png"
                        alt="Renewable Energy Evolution"
                        width={600}
                        height={700}
                        className={styles.mainImage}
                        priority
                    />
                </div>

                {/* Right Side - Content */}
                <div className={styles.content}>
                    <p className={styles.subtitle}>Our <span>History</span></p>
                    <h2 className={styles.title}>Journey Was Started</h2>

                    {/* Timeline Navigation */}
                    <div className={styles.timeline}>
                        {years.map((year) => (
                            <button
                                key={year}
                                className={`${styles.yearButton} ${activeYear === year ? styles.activeYear : ''}`}
                                onClick={() => setActiveYear(year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Milestone Details */}
                    <div className={styles.milestone}>
                        <div className={styles.yearLabel}>
                            <div className={styles.dot}></div>
                            Year {activeYear}
                        </div>
                        <h3 className={styles.milestoneTitle}>
                            {journeyData[activeYear as keyof typeof journeyData].title}
                        </h3>
                        <p className={styles.description}>
                            {journeyData[activeYear as keyof typeof journeyData].description}
                        </p>

                        <button className={styles.button}>
                            See Our Achievement
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoryJourneySection;
