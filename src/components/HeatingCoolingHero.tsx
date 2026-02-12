'use client';

import React from 'react';
import styles from './HeatingCoolingHero.module.css';

const HeatingCoolingHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.meshGradient}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>Next-Gen HVAC Technology</div>
                    <h1 className={styles.mainHeading}>
                        Master Your <span className={styles.highlight}>Indoor Climate</span>
                    </h1>
                    <p className={styles.description}>
                        Experience the zenith of thermodynamic comfort. We engineer bespoke heating and cooling systems that blend intelligence with 100% renewable integration.
                    </p>

                    <div className={styles.ctaButtons}>
                        <button className={styles.primaryButton}>Initiate Free Audit</button>
                        <button className={styles.secondaryButton}>View Tech Specs</button>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>45%</span>
                            <span className={styles.statLabel}>Efficiency Gain</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>12k+</span>
                            <span className={styles.statLabel}>Active Zones</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>Zero</span>
                            <span className={styles.statLabel}>Emissions Profile</span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageSection}>
                    <div className={styles.techDisplay}>
                        <div className={styles.tempCard}>
                            <div className={styles.cardInfo}>
                                <span className={styles.label}>Living Room</span>
                                <span className={styles.value}>22.5°C</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progress}></div>
                            </div>
                        </div>
                        <div className={styles.mainVisual}>
                            <div className={styles.climateRing}></div>
                            <img src="/services1.png" alt="HVAC System" className={styles.heroImage} />
                        </div>
                        <div className={styles.humidityCard}>
                            <span className={styles.label}>Humidity</span>
                            <span className={styles.value}>45%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatingCoolingHero;
