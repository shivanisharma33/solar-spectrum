'use client';

import React from 'react';
import Image from 'next/image';
import styles from './PowerwallWorthSection.module.css';

const PowerwallWorthSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left - Overlapping Images */}
                <div className={styles.imagesWrapper}>
                    {/* Red Dot */}
                    <div className={styles.redDot}></div>

                    {/* Image 1 - House with solar panels */}
                    <div className={styles.imageBox1}>
                        <Image
                            src="/services2.png"
                            alt="Modern house with solar panels"
                            fill
                            className={styles.image}
                        />
                    </div>

                    {/* Image 2 - Person with solar panels */}
                    <div className={styles.imageBox2}>
                        <Image
                            src="/services1.png"
                            alt="Solar panel technician"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>

                {/* Right - Content */}
                <div className={styles.content}>
                    <p className={styles.subtitle}>
                        <span className={styles.subtitleGreen}>Energy</span>{' '}
                        <span className={styles.subtitleYellow}>Which</span>{' '}
                        <span className={styles.subtitleGray}>Matters</span>
                    </p>

                    <h2 className={styles.title}>
                        IS THE TESLA POWERWALL 3 WORTH IT IN 2026?
                    </h2>

                    <p className={styles.description}>
                        From residential installations to commercial projects, we provide end-to-end
                        solar solutions with expert consultation and ongoing support.
                    </p>

                    <p className={styles.benefitsTitle}>Key Benefits of the Tesla Powerwall 3:</p>

                    <ul className={styles.benefitsList}>
                        <li className={styles.benefitItem}>
                            <span className={styles.arrow}>▶</span>
                            <span>Reduced reliance on the grid</span>
                        </li>
                        <li className={styles.benefitItem}>
                            <span className={styles.arrow}>▶</span>
                            <span>Smart energy management</span>
                        </li>
                        <li className={styles.benefitItem}>
                            <span className={styles.arrow}>▶</span>
                            <span>Reliable backup during blackouts</span>
                        </li>
                        <li className={styles.benefitItem}>
                            <span className={styles.arrow}>▶</span>
                            <span>Protection from rising electricity costs</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PowerwallWorthSection;
