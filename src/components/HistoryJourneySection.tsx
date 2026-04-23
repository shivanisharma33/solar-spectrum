'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HistoryJourneySection.module.css';

const HistoryJourneySection = () => {
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
                    <h2 className={styles.title}>Innovation In Every Step</h2>

                    <div className={styles.paragraphContainer}>
                        <p className={styles.mainDescription}>
                            At Solar Spectrum, we specialize in smart, affordable, and reliable solar energy and storage solutions. Our history is defined by a continuous focus on innovation and customer satisfaction, helping homes and businesses across Australia switch to clean energy with ease.
                        </p>
                        <p className={styles.secondaryDescription}>
                            We pride ourselves on delivering high-efficiency solar panels and advanced battery technology tailored to your property's unique requirements. Our commitment to excellence ensures a smarter way to generate electricity and power a greener tomorrow for all our clients.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default HistoryJourneySection;
