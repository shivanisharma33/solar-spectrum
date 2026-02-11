'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ProductInfoSection.module.css';

const ProductInfoSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Card - About Tesla Powerwall - STICKY */}
                <div className={styles.infoCard}>
                    <h3 className={styles.cardTitle}>About the tesla powerwall</h3>
                    <p className={styles.cardDescription}>
                        A Tesla powerwall is a cutting-edge home battery system that stores solar energy,
                        providing reliable backup power during outages and helping reduce electricity costs.
                    </p>

                    <ul className={styles.specsList}>
                        <li className={styles.specItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Battery Capacity — 13kWh</span>
                        </li>
                        <li className={styles.specItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Cycles: 4000+ charging cycles</span>
                        </li>
                        <li className={styles.specItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Warranty: 10 Years</span>
                        </li>
                        <li className={styles.specItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Type — Lithium-ion</span>
                        </li>
                        <li className={styles.specItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Weight: 75 kg</span>
                        </li>
                    </ul>

                    <button className={styles.ctaButton}>
                        <span className={styles.phoneIcon}>📞</span>
                        Let's Talk
                    </button>
                </div>

                {/* Right Column - Image and Features */}
                <div className={styles.rightColumn}>
                    {/* Product Image */}
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/product.png"
                            alt="Tesla Powerwall Installation"
                            fill
                            className={styles.productImage}
                        />
                    </div>

                    {/* Arrow */}
                    <div className={styles.arrowContainer}>
                        <span className={styles.arrowIcon}>↓</span>
                    </div>

                    {/* Features Grid */}
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.iconNumber}>01</span>
                            </div>
                            <span className={styles.featureText}>Integrated Solar Inverter</span>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.iconNumber}>02</span>
                            </div>
                            <span className={styles.featureText}>10-Year Warranty Protection</span>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.iconNumber}>03</span>
                            </div>
                            <span className={styles.featureText}>13.5kWh Usable Capacity</span>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.iconNumber}>04</span>
                            </div>
                            <span className={styles.featureText}>Smartphone Control & Monitoring</span>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.iconNumber}>05</span>
                            </div>
                            <span className={styles.featureText}>Powers Home for 24+ Hours</span>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.iconNumber}>06</span>
                            </div>
                            <span className={styles.featureText}>Zero Noise Operation</span>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.iconNumber}>07</span>
                            </div>
                            <span className={styles.featureText}>IP67 Weatherproof Rating</span>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconBox}>
                                <span className={styles.iconNumber}>08</span>
                            </div>
                            <span className={styles.featureText}>Stackable Up to 10 Units</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductInfoSection;
