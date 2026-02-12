'use client';

import React from 'react';
import styles from './HeatingCoolingBenefits.module.css';

const benefits = [
    {
        image: '/services1.png',
        title: 'Precision Airflow',
        description: 'Multi-zone technology that delivers the exact temperature to every corner of your property with zero waste.'
    },
    {
        image: '/services2.png',
        title: 'Real-time Analytics',
        description: 'Track your consumption and performance in real-time with our intuitive dashboard and AI insights.'
    },
    {
        image: '/services3.png',
        title: 'Acoustic Silence',
        description: 'Engineered for near-silent operation, our systems maintain comfort without the industrial noise polution.'
    },
    {
        image: '/services4.png',
        title: 'Elite Engineering',
        description: 'Bespoke installation by master technicians, optimized for the unique layout of your architectural space.'
    },
    {
        image: '/product.png',
        title: 'Universal Sync',
        description: 'Native integration with all major smart home ecosystems for a truly unified climate experience.'
    },
    {
        image: '/product2.png',
        title: 'Shield Warranty',
        description: 'A holistic 12-year platinum warranty that covers everything from the core unit to the smallest valve.'
    }
];

const HeatingCoolingBenefits = () => {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>System Superiority</div>
                    <h2 className={styles.title}>The Standard of <span className={styles.highlight}>Modern Comfort</span></h2>
                    <p className={styles.intro}>
                        We define the future of indoor living by harmonizing environmental responsibility with uncompromising thermodynamic performance.
                    </p>
                </div>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardGlow}></div>
                            <div className={styles.imageContainer}>
                                <img src={benefit.image} alt={benefit.title} className={styles.benefitImage} />
                            </div>
                            <h3 className={styles.cardTitle}>{benefit.title}</h3>
                            <p className={styles.cardDescription}>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeatingCoolingBenefits;
