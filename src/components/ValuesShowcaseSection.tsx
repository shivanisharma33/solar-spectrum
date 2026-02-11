'use client';

import React from 'react';
import styles from './ValuesShowcaseSection.module.css';

const ValuesShowcaseSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Side Info */}
                <div className={styles.leftContent}>
                    <p className={styles.subtitle}>Our Value</p>
                    <h2 className={styles.title}>
                        The Better Source Of<br />
                        Energy For The Better<br />
                        Tomorrow.
                    </h2>
                    <p className={styles.description}>
                        At Solar Spectrum, We Believe In Delivering Sustainable Energy With Integrity,
                        Innovation, And Excellence. We're Committed To Customer Satisfaction,
                        Smart Technology, And Creating A Greener Future For All.
                    </p>
                    <button className={styles.btn}>Discover More</button>
                </div>

                {/* Right Side Cards */}
                <div className={styles.cardsContainer}>
                    {/* Our Vision Card - Gradient */}
                    <div className={`${styles.cardBase} ${styles.visionCard}`}>
                        <div className={`${styles.iconCircle} ${styles.whiteCircle}`}>
                            <svg className={`${styles.icon} ${styles.iconGreen}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={`${styles.cardTitle} ${styles.textWhite}`}>Our Vision</h3>
                            <p className={`${styles.cardText} ${styles.textLight}`}>
                                Smart Solar Systems Designed For Your Needs — Saving Energy With Simple Setup And Lasting Performance.
                            </p>
                        </div>
                    </div>

                    {/* Our Mission Card - White */}
                    <div className={`${styles.cardBase} ${styles.whiteCard}`}>
                        <div className={`${styles.iconCircle} ${styles.greenCircle}`}>
                            <svg className={`${styles.icon} ${styles.iconWhite}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M16 12l-4-4-4 4M12 8v9" />
                            </svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={`${styles.cardTitle} ${styles.textBlack}`}>Our Mission</h3>
                            <p className={`${styles.cardText} ${styles.textGray}`}>
                                Smart Solar Systems Designed For Your Needs — Saving Energy With Simple Setup And Lasting Performance.
                            </p>
                        </div>
                    </div>

                    {/* Our Motto Card - White */}
                    <div className={`${styles.cardBase} ${styles.whiteCard}`}>
                        <div className={`${styles.iconCircle} ${styles.greenCircle}`}>
                            <svg className={`${styles.icon} ${styles.iconWhite}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
                                <line x1="16" y1="8" x2="2" y2="22" />
                                <line x1="17.5" y1="15" x2="9" y2="15" />
                            </svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={`${styles.cardTitle} ${styles.textBlack}`}>Our Motto</h3>
                            <p className={`${styles.cardText} ${styles.textGray}`}>
                                Smart Solar Systems Designed For Your Needs — Saving Energy With Simple Setup And Lasting Performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesShowcaseSection;
