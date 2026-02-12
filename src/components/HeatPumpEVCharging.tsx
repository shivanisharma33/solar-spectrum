'use client';

import React from 'react';
import styles from './HeatPumpEVCharging.module.css';

const appFeatures = [
    {
        type: 'Technical',
        id: 'APP',
        image: '/product3.png',
        voltage: 'Real-time Metrics',
        speed: 'Instant Connect',
        description: 'Track energy tariffs for cost tracking and export PDF consumption reports for reimbursement.',
        bestFor: 'Cost Management'
    },
    {
        type: 'Smart',
        id: 'SOL',
        image: '/product.png',
        voltage: 'Solar Optimization',
        speed: 'Zero Waste',
        description: 'Intuitively control solar charging and view real-time solar export monitoring directly from the app.',
        bestFor: 'Eco-conscious Homes',
        highlighted: true
    },
    {
        type: 'Secure',
        id: 'LOCK',
        image: '/product4.png',
        voltage: 'Remote Control',
        speed: 'Secure Sync',
        description: 'Define different charging periods via Multi-Mode Scheduling and remotely lock/unlock your device.',
        bestFor: 'Security & Planning'
    }
];

const HeatPumpEVCharging = () => {
    return (
        <section className={styles.chargingSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>Intelligence System</div>
                    <h2 className={styles.title}>Meet the <span className={styles.highlight}>Hypervolt App</span></h2>
                    <p className={styles.intro}>
                        Bringing innovation and sustainability into your home with advanced features designed for both convenience and efficiency.
                    </p>
                </div>

                <div className={styles.grid}>
                    {appFeatures.map((feature, index) => (
                        <div key={index} className={`${styles.card} ${feature.highlighted ? styles.highlighted : ''}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.typeTag}>{feature.type}</div>
                                <div className={styles.idTag}>{feature.id}</div>
                            </div>
                            <div className={styles.featurePreview}>
                                <img src={feature.image} alt={feature.voltage} className={styles.featureImage} />
                            </div>
                            <h3 className={styles.voltage}>{feature.voltage}</h3>
                            <div className={styles.speedBox}>
                                <span className={styles.speedLabel}>Connectivity</span>
                                <p className={styles.speedValue}>{feature.speed}</p>
                            </div>
                            <p className={styles.description}>{feature.description}</p>
                            <div className={styles.separator}></div>
                            <div className={styles.footer}>
                                <span className={styles.bestForLabel}>Primary Benefit</span>
                                <p className={styles.bestForValue}>{feature.bestFor}</p>
                            </div>
                            <button className={styles.cardButton}>Explore App</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeatPumpEVCharging;
