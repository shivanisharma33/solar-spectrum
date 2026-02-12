'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PricingSection.module.css';

const PricingSection = () => {
    return (
        <section className={styles.section}>
            {/* Header */}
            <div className={styles.header}>
                <p className={styles.subtitle}>Pricing</p>
                <h2 className={styles.title}>Our Best Pricing Plan</h2>
                <p className={styles.description}>
                    We Follow A Simple And Streamlined 4-Step Process To Deliver Efficient And Reliable Solar Solutions.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className={styles.cardsContainer}>
                {/* Card 1 - 62 KW */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div className={styles.capacity}>62 KW</div>
                        <div className={styles.productName}>Tesla Powerwall 3</div>
                    </div>

                    <div className={styles.savings}>Save Up To : $2,000</div>

                    <div className={styles.imageWrapper}>
                        <Image
                            src="/services4.png"
                            alt="Tesla Powerwall 3"
                            fill
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.features}>
                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Designed For Small Businesses</span>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Solar Rebates & Tax Incentives Available</span>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Cut Down Operating Energy Costs</span>
                            </li>
                        </ul>

                        <Link href="/contact">
                            <button className={styles.button}>Enquire Now</button>
                        </Link>
                    </div>
                </div>

                {/* Card 2 - 88 KW (Featured) */}
                <div className={`${styles.card} ${styles.cardFeatured}`}>
                    <div className={styles.cardHeader}>
                        <div className={`${styles.capacity} ${styles.capacityFeatured}`}>88 KW</div>
                        <div className={styles.productName}>Tesla Powerwall 3</div>
                    </div>

                    <div className={styles.savings}>Save Up To : $2,000</div>

                    <div className={styles.imageWrapper}>
                        <Image
                            src="/services4.png"
                            alt="Tesla Powerwall 3"
                            fill
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.features}>
                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Designed For Small Businesses</span>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Solar Rebates & Tax Incentives Available</span>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Cut Down Operating Energy Costs</span>
                            </li>
                        </ul>

                        <Link href="/contact">
                            <button className={`${styles.button} ${styles.buttonFeatured}`}>Enquire Now</button>
                        </Link>
                    </div>
                </div>

                {/* Card 3 - 94 KW */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div className={styles.capacity}>94 KW</div>
                        <div className={styles.productName}>Tesla Powerwall 3</div>
                    </div>

                    <div className={styles.savings}>Save Up To : $2,000</div>

                    <div className={styles.imageWrapper}>
                        <Image
                            src="/services4.png"
                            alt="Tesla Powerwall 3"
                            fill
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.features}>
                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Designed For Small Businesses</span>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Solar Rebates & Tax Incentives Available</span>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Cut Down Operating Energy Costs</span>
                            </li>
                        </ul>

                        <Link href="/contact">
                            <button className={styles.button}>Enquire Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
