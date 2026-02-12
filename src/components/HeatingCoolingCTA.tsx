'use client';

import React from 'react';
import Link from 'next/link';
import styles from './HeatingCoolingCTA.module.css';

const HeatingCoolingCTA = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.statusBadge}>
                            <span className={styles.pulse}></span>
                            Precision Ready
                        </div>
                        <h2 className={styles.title}>Transition to <span className={styles.highlight}>Elite Comfort</span> Today</h2>
                        <p className={styles.description}>
                            Join the community of forward-thinking property owners who have optimized their indoor climate for performance, efficiency, and well-being.
                        </p>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✦</div>
                            <span>Comprehensive Thermal Energy Audit</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✦</div>
                            <span>Personalized System Architecture</span>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkIcon}>✦</div>
                            <span>Accelerated ROI & Rebate Integration</span>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Link href="/contact">
                            <button className={styles.ctaButton}>Request Technical Audit</button>
                        </Link>
                        <p className={styles.smallText}>No-obligation review • Engineer-led consultation</p>
                    </div>
                </div>

                <div className={styles.visualSide}>
                    <div className={styles.abstractShape}>
                        <div className={styles.innerCircle}></div>
                        <img src="/solar.png" alt="Thermal Solution" className={styles.ctaImage} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatingCoolingCTA;
