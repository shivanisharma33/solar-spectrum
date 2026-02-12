'use client';

import React, { useState } from 'react';
import styles from './HeatingCoolingSolutions.module.css';

const solutions = [
    {
        id: 1,
        category: 'Central Climate',
        image: '/product3.png',
        title: 'Nexus Central Air',
        description: 'Elite whole-property thermal management',
        price: 'From $4,500',
        longDesc: 'The Nexus series represents the pinnacle of central climate control. Engineered for expansive properties, it utilizes variable-speed compression to maintain a consistent environment with surgical precision.',
        specs: {
            'Rating': '24+ SEER2',
            'Range': 'Full Property',
            'Saving': 'Up to 45%',
            'Support': 'Platinum 15Y'
        },
        benefits: ['Variable-speed logic', 'Ultra-filtration HEPA', 'Solar-direct ready', 'Zoned distribution']
    },
    {
        id: 2,
        category: 'Hybrid Thermal',
        image: '/product4.png',
        title: 'Quantum Heat Pump',
        description: 'Bi-directional thermodynamic efficiency',
        price: 'From $5,800',
        longDesc: 'Our Quantum heat pumps leverage advanced geothermal and air-source technology to provide both heating and cooling from a single, high-efficiency unit. Perfect for zero-emission goals.',
        specs: {
            'Efficiency': '400% COP',
            'Operation': 'Dual-Mode',
            'Extreme': '-25°C Rated',
            'Warranty': '12Y Comprehensive'
        },
        benefits: ['Zero-combustion tech', 'Instant mode switching', 'Whisper-quiet fans', 'AI defrost logic']
    },
    {
        id: 3,
        category: 'Zone Precision',
        image: '/product5.png',
        title: 'Apex Ductless Split',
        description: 'Bespoke zone climate control',
        price: 'From $3,200',
        longDesc: 'The Apex series is designed for surgical comfort in specific areas. Without the need for ductwork, it delivers localized cooling and heating with the highest energy ratings in its class.',
        specs: {
            'Precision': '±0.5°C Control',
            'Install': 'Rapid Setup',
            'Connectivity': 'Native WiFi',
            'Design': 'Aesthetic Compact'
        },
        benefits: ['Individual room sync', 'Multi-stage filtering', 'Occupancy sensing', 'Humidity balance']
    }
];

const HeatingCoolingSolutions = () => {
    const [selected, setSelected] = useState(1);
    const current = solutions.find(s => s.id === selected);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>Product Catalog</div>
                    <h2 className={styles.title}>System <span className={styles.highlight}>Architectures</span></h2>
                    <p className={styles.intro}>Explore our curated selection of high-performance thermodynamic modules, engineered for elite residential and commercial properties.</p>
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
                                    <div className={styles.cardIndicator}></div>
                                    <div className={styles.cardCategory}>{sol.category}</div>
                                </div>
                                <div className={styles.solutionPreview}>
                                    <img src={sol.image} alt={sol.title} className={styles.solutionThumb} />
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
                                <h4 className={styles.benefitsTitle}>Advanced Capabilities</h4>
                                <div className={styles.benefitsList}>
                                    {current?.benefits.map((benefit, idx) => (
                                        <div key={idx} className={styles.benefitItem}>
                                            <div className={styles.checkmark}>✦</div>
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className={styles.ctaBtn}>Initiate Custom Setup →</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatingCoolingSolutions;
