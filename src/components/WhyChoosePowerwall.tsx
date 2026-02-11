'use client';

import React from 'react';
import Image from 'next/image';
import styles from './WhyChoosePowerwall.module.css';

const WhyChoosePowerwall = () => {
    return (
        <section className={styles.section}>
            {/* Header */}
            <div className={styles.header}>
                <p className={styles.subtitle}>
                    <span className={styles.subtitleGreen}>From Energy</span>{' '}
                    <span className={styles.subtitleGray}>Savings To Backup Power</span>
                </p>
                <h2 className={styles.title}>Why Choose Tesla Powerwall 3</h2>
                <p className={styles.description}>
                    We Follow A Simple And Streamlined 4-Step Process To Deliver Efficient And Reliable Solar Solutions.
                </p>
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                {/* Card 1 */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.iconWrapper}>
                            <svg className={styles.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="12" y="12" width="40" height="40" rx="4" stroke="#28a745" strokeWidth="2" fill="none" />
                                <path d="M20 28h24M20 36h24" stroke="#28a745" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="48" cy="20" r="3" fill="#28a745" />
                                <path d="M48 24v8" stroke="#28a745" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Superior Capacity & Output</h3>
                        <p className={styles.cardDescription}>
                            13.5kWh Usable Capacity With More Power To Run Essentials During Outage And Store Solar For Nights.
                        </p>
                    </div>
                    <div className={styles.cardImage}>
                        <Image
                            src="/services2.png"
                            alt="Solar panels with sunlight"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>

                {/* Card 2 */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.iconWrapper}>
                            <svg className={styles.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="16" y="20" width="32" height="28" rx="2" stroke="#28a745" strokeWidth="2" fill="none" />
                                <path d="M24 16v8M40 16v8" stroke="#28a745" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="32" cy="32" r="6" stroke="#28a745" strokeWidth="2" fill="none" />
                                <path d="M32 29v6" stroke="#28a745" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Built-in-Solar Inverter</h3>
                        <p className={styles.cardDescription}>
                            13.5kWh Usable Capacity With More Power To Run Essentials During Outage And Store Solar For Nights.
                        </p>
                    </div>
                    <div className={styles.cardImage}>
                        <Image
                            src="/herro1.png"
                            alt="Green energy battery system"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>

                {/* Card 3 */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.iconWrapper}>
                            <svg className={styles.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="24" r="8" stroke="#28a745" strokeWidth="2" fill="none" />
                                <path d="M32 16v-4M32 32v4M24 24h-4M40 24h4" stroke="#28a745" strokeWidth="2" strokeLinecap="round" />
                                <path d="M20 40c0-2 2-4 4-4h16c2 0 4 2 4 4v8H20v-8z" stroke="#28a745" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Weather-Resistant Design</h3>
                        <p className={styles.cardDescription}>
                            13.5kWh Usable Capacity With More Power To Run Essentials During Outage And Store Solar For Nights.
                        </p>
                    </div>
                    <div className={styles.cardImage}>
                        <Image
                            src="/services4.png"
                            alt="Tesla Powerwall units"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>

                {/* Card 4 */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.iconWrapper}>
                            <svg className={styles.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="24" r="8" stroke="#28a745" strokeWidth="2" fill="none" />
                                <path d="M32 16v-4M32 32v4M24 24h-4M40 24h4" stroke="#28a745" strokeWidth="2" strokeLinecap="round" />
                                <rect x="24" y="38" width="16" height="10" rx="2" stroke="#28a745" strokeWidth="2" fill="none" />
                                <circle cx="28" cy="43" r="1.5" fill="#28a745" />
                                <circle cx="36" cy="43" r="1.5" fill="#28a745" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Smart Energy Control</h3>
                        <p className={styles.cardDescription}>
                            13.5kWh Usable Capacity With More Power To Run Essentials During Outage And Store Solar For Nights.
                        </p>
                    </div>
                    <div className={styles.cardImage}>
                        <Image
                            src="/services1.png"
                            alt="Solar panel monitoring"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoosePowerwall;
