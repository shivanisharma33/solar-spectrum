'use client';

import React from 'react';
import styles from './HeatPumpEVBenefits.module.css';

const benefits = [
    {
        icon: '🔗',
        title: 'Full Solar Sync',
        description: 'Native solar and battery storage compatibility, including advanced battery drain prevention logic.'
    },
    {
        icon: '📱',
        title: 'Intuitive App',
        description: 'Control solar charging, view real-time metrics, and manage multi-mode scheduling from your phone.'
    },
    {
        icon: '⚡',
        title: 'Load Management',
        description: 'Automated load management ensures your home power remains balanced while charging at peak speeds.'
    },
    {
        icon: '🇬🇧',
        title: 'British Engineering',
        description: 'Designed and sustainably manufactured in the UK, engineered for robust long-life performance.'
    },
    {
        icon: '☁️',
        title: 'OTA Updates',
        description: 'Free-for-life over-the-air software updates ensure your charger actually gets better over time.'
    },
    {
        icon: '🛡️',
        title: 'Robust Build',
        description: 'IP66 and IK10 rated construction, built to withstand the harshest environments with ease.'
    }
];

const HeatPumpEVBenefits = () => {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>Next-Gen Features</div>
                    <h2 className={styles.title}>Award-Winning <span className={styles.highlight}>Innovation</span></h2>
                    <p className={styles.intro}>
                        Hypervolt has developed a smart, beautifully-designed charger that meets all domestic needs, powering the electric revolution for thousands.
                    </p>
                </div>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardGlow}></div>
                            <div className={styles.iconContainer}>
                                <span className={styles.icon}>{benefit.icon}</span>
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

export default HeatPumpEVBenefits;
