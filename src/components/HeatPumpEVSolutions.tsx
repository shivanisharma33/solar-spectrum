'use client';

import React, { useState } from 'react';
import styles from './HeatPumpEVSolutions.module.css';

const solutions = [
    {
        id: 1,
        category: 'Home 3 Pro',
        icon: '⚪',
        title: 'Ultra White Edition',
        description: 'Pristine, minimalist energy delivery',
        price: 'Premium 7.4kW',
        longDesc: 'The Hypervolt Home 3 Pro in Ultra White is designed to blend seamlessly with modern architectural aesthetics. It features a high-grade automotive finish that is as durable as it is beautiful.',
        specs: {
            'Phase': '7.4kW Single-Phase',
            'Connection': 'WiFi & Ethernet',
            'Tethered': '5m, 7.5m, 10m',
            'Protection': 'IP66 / IK10'
        },
        benefits: ['Manufactured in the UK', '365-Day Support', 'Type-2 Universal', 'Automated Load Sync']
    },
    {
        id: 2,
        category: 'Home 3 Pro',
        icon: '🔘',
        title: 'Space Grey Edition',
        description: 'Sophisticated industrial design',
        price: 'Premium 7.4kW',
        longDesc: 'For those who prefer a more technical aesthetic, the Space Grey edition offers a bold look that complements any modern driveway. Engineered with the same market-leading internal technology.',
        specs: {
            'Hardware': 'G-Wave 2.0',
            'Update': 'OTA Free for life',
            'Safety': 'No Earth Rod Needed',
            'Logic': 'Dynamic Solar Boost'
        },
        benefits: ['Real-time Monitoring', 'Remote lock/unlock', 'Aesthetic Compact', 'Battery Drain Logic']
    },
    {
        id: 3,
        category: 'Home 3 Pro',
        icon: '⚫',
        title: 'Ultra Black Edition',
        description: 'Elite, stealth charging module',
        price: 'Premium 7.4kW',
        longDesc: 'The Ultra Black edition is the ultimate statement in home energy infrastructure. Its stealthy appearance hides a powerful smart charging engine that integrates perfectly with your household energy mix.',
        specs: {
            'Compliance': 'AS/NZS Standards',
            'Install': 'Rapid Wall-Mount',
            'App': 'Mobile Concierge',
            'Network': 'Secure Local Sync'
        },
        benefits: ['Cost Tracking AI', 'Export CSV Data', 'LED Brightness Sync', 'Impact Rated Chassis']
    }
];

const HeatPumpEVSolutions = () => {
    const [selected, setSelected] = useState(1);
    const current = solutions.find(s => s.id === selected);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>Choose Your Style</div>
                    <h2 className={styles.title}>Meet the <span className={styles.highlight}>Home 3 Pro</span></h2>
                    <p className={styles.intro}>Beautiful design. Simple to use. Made in the UK. Hypervolt is the ultimate domestic charging experience.</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.cardsGrid}>
                        {solutions.map((sol) => (
                            <button
                                key={sol.id}
                                className={`${styles.card} ${selected === sol.id ? styles.active : ''}`}
                                onClick={() => setSelected(sol.id)}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardIcon}>{sol.icon}</div>
                                    <div className={styles.cardCategory}>{sol.category}</div>
                                </div>
                                <h3 className={styles.cardTitle}>{sol.title}</h3>
                                <div className={styles.cardPrice}>{sol.price}</div>
                                <div className={styles.selectionIndicator}></div>
                            </button>
                        ))}
                    </div>

                    <div className={styles.detailsPanel}>
                        <div className={styles.panelOverlay}></div>
                        <div className={styles.panelContent}>
                            <div className={styles.panelHeader}>
                                <h3 className={styles.panelTitle}>{current?.title}</h3>
                                <p className={styles.panelDesc}>{current?.longDesc}</p>
                            </div>

                            <div className={styles.specsGrid}>
                                {current?.specs && Object.entries(current.specs).map(([key, value]) => (
                                    <div key={key} className={styles.specBox}>
                                        <div className={styles.specLabel}>{key}</div>
                                        <div className={styles.specValue}>{value}</div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.benefitSection}>
                                <h4 className={styles.benefitsTitle}>Technical Summary</h4>
                                <div className={styles.benefitsList}>
                                    {current?.benefits.map((benefit, idx) => (
                                        <div key={idx} className={styles.benefitItem}>
                                            <div className={styles.checkmark}>✦</div>
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className={styles.ctaBtn}>Get Free Quote →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatPumpEVSolutions;
