'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SolarSolutionsSection.module.css';

const SolarSolutionsSection = () => {
    return (
        <section className={styles.section}>
            {/* Header */}
            <div className={styles.header}>
                <p className={styles.subtitle}>
                    <span className={styles.subtitleGreen}>Energy</span>{' '}
                    <span className={styles.subtitleYellow}>Which</span>{' '}
                    <span className={styles.subtitleGray}>Matters</span>
                </p>
                <h2 className={styles.title}>Solar Solutions For Every Need</h2>
                <p className={styles.description}>
                    From residential installations to commercial projects, we provide end-to-end solar solutions with expert
                    consultation and ongoing support.
                </p>
            </div>

            {/* Product Cards */}
            <div className={styles.cardsContainer}>
                {/* Card 1 - Sigenergy Battery Storage */}
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/product4.png"
                            alt="Sigenergy Battery Storage"
                            fill
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Sigenergy Battery Storage</h3>
                        <p className={styles.price}>Starting at $19,000</p>
                        <p className={styles.cardDescription}>
                            Professional installation of high-efficiency solar panels tailored to your property's unique requirements and energy needs.
                        </p>

                        <div className={styles.specs}>
                            <div className={styles.specRow}>
                                <span className={styles.specLabel}>Product Warranty:</span>
                                <span className={styles.specValue}>10 Years</span>
                            </div>
                            <div className={styles.specRow}>
                                <span className={styles.specLabel}>Battery Performance:</span>
                                <span className={styles.stars}>★★★★☆</span>
                            </div>
                            <div className={styles.specRow}>
                                <span className={styles.specLabel}>Storage Size:</span>
                                <span className={styles.specValue}>9.6-16.4 Kwh</span>
                            </div>
                        </div>

                        <div className={styles.buttons}>
                            <Link href="/contact">
                                <button className={styles.primaryButton}>Get Your Free Quote</button>
                            </Link>
                            <Link href="/solar-battery">
                                <button className={styles.secondaryButton}>Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Tesla Power Wall 3 */}
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/product5.png"
                            alt="Tesla Power Wall 3"
                            fill
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Tesla Power Wall 3</h3>
                        <p className={styles.price}>Starting at $12,000</p>
                        <p className={styles.cardDescription}>
                            Professional installation of high-efficiency solar panels tailored to your property's unique requirements and energy needs.
                        </p>

                        <div className={styles.specs}>
                            <div className={styles.specRow}>
                                <span className={styles.specLabel}>Product Warranty:</span>
                                <span className={styles.specValue}>10 Years</span>
                            </div>
                            <div className={styles.specRow}>
                                <span className={styles.specLabel}>Battery Performance:</span>
                                <span className={styles.stars}>★★★★★</span>
                            </div>
                            <div className={styles.specRow}>
                                <span className={styles.specLabel}>Storage Size:</span>
                                <span className={styles.specValue}>9.6-18.4 Kwh</span>
                            </div>
                        </div>

                        <div className={styles.buttons}>
                            <Link href="/contact">
                                <button className={styles.primaryButton}>Get Your Free Quote</button>
                            </Link>
                            <Link href="/solar-battery">
                                <button className={styles.secondaryButton}>Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 3 - Goodwe Battery Storage */}
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/product3.png"
                            alt="Goodwe Battery Storage"
                            fill
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Goodwe Battery Storage</h3>
                        <p className={styles.price}>Starting at $15,000</p>
                        <p className={styles.cardDescription}>
                            Professional installation of high-efficiency solar panels tailored to your property's unique requirements and energy needs.
                        </p>

                        <div className={styles.specs}>
                            <div className={styles.specRow}>
                                <span className={styles.specLabel}>Product Warranty:</span>
                                <span className={styles.specValue}>10 Years</span>
                            </div>
                            <div className={styles.specRow}>
                                <span className={styles.specLabel}>Battery Performance:</span>
                                <span className={styles.stars}>★★★★☆</span>
                            </div>
                            <div className={styles.specRow}>
                                <span className={styles.specLabel}>Storage Size:</span>
                                <span className={styles.specValue}>6.6-16.4 Kwh</span>
                            </div>
                        </div>

                        <div className={styles.buttons}>
                            <Link href="/contact">
                                <button className={styles.primaryButton}>Get Your Free Quote</button>
                            </Link>
                            <Link href="/solar-battery">
                                <button className={styles.secondaryButton}>Explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolarSolutionsSection;
