'use client';

import React from 'react';
import Link from 'next/link';
import styles from './HeatPumpEVHero.module.css';

const HeatPumpEVHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.meshGradient}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>UK's Highest Rated Charger</div>
                    <h1 className={styles.mainHeading}>
                        Power Your Home with the <span className={styles.highlight}>Future of EV Charging</span>
                    </h1>
                    <p className={styles.description}>
                        Hypervolt is a cutting-edge, smart electric vehicle charger, renowned as one of the best-selling in the UK. Now available in Australia through SolarRun, bringing innovation and sustainability into your home.
                    </p>

                    <div className={styles.ctaButtons}>
                        <Link href="/contact">
                            <button className={styles.primaryButton}>Get Hypervolt Quote</button>
                        </Link>
                        <Link href="/product">
                            <button className={styles.secondaryButton}>View Home 3 Pro</button>
                        </Link>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>4.9/5</span>
                            <span className={styles.statLabel}>Trustpilot Rating</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>87%</span>
                            <span className={styles.statLabel}>NPS Score</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>100k+</span>
                            <span className={styles.statLabel}>Households by 2024</span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageSection}>
                    <div className={styles.techDisplay}>
                        <div className={styles.displayCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.dot}></div>
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.chartBar}></div>
                                <div className={styles.chartBar}></div>
                                <div className={styles.chartBar}></div>
                            </div>
                        </div>
                        <div className={styles.mainVisual}>
                            <div className={styles.energyRing}></div>
                            <img src="/product.png" alt="Hypervolt EV Charger" className={styles.heroImage} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatPumpEVHero;
