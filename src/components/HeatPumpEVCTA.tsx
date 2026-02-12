'use client';

import React from 'react';
import styles from './HeatPumpEVCTA.module.css';

const HeatPumpEVCTA = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.statusBadge}>
                            <span className={styles.pulse}></span>
                            Hypervolt Ready
                        </div>
                        <h2 className={styles.title}>Bring the <span className={styles.highlight}>Future of Charging</span> to Your Driveway</h2>
                        <p className={styles.description}>
                            Join the EV revolution with Hypervolt. Fast, smart, and solar-integrated charging, expertly installed by SolarRun technicians across Australia.
                        </p>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✦</div>
                            <span>Complimentary Home Assessment</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✦</div>
                            <span>Certified Technical Installation</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✦</div>
                            <span>Personalized Solar Sync Audit</span>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.ctaButton}>Get Your FREE Quote Now</button>
                        <p className={styles.smallText}>No obligation • Takes only 2 minutes • Expert advice</p>
                    </div>
                </div>

                <div className={styles.visualSide}>
                    <div className={styles.abstractShape}>
                        <div className={styles.innerCircle}></div>
                        <img src="/product2.png" alt="EV Charging Station" className={styles.ctaImage} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatPumpEVCTA;
