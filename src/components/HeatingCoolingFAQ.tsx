'use client';

import React, { useState } from 'react';
import styles from './HeatingCoolingFAQ.module.css';

const faqs = [
    {
        question: 'What is the "Economic ROI" of a premium thermal system?',
        answer: 'Elite HVAC infrastructure typically yields a 20-45% reduction in annual utility expenditure. When integrated with decentralized energy sources (solar), the system can effectively operate at near-zero net cost over a 15-year horizon.'
    },
    {
        question: 'How does the AI multi-zone logic improve comfort?',
        answer: 'Traditional systems operate on binary logic. Our Nexus and Apex series utilize predictive AI to analyze occupancy patterns and external climate data, adjusting thermodynamic flow in real-time to maintain constant comfort with 0.5°C precision.'
    },
    {
        question: 'Can these systems operate during grid outages?',
        answer: 'Yes, when paired with a battery storage ecosystem. Our controllers are configured for "Island Mode" priority, ensuring critical climate zones remain operational during external network volatility.'
    },
    {
        question: 'What is the environmental profile of the Quantum heat pump?',
        answer: 'The Quantum series utilizes R-32 or R-290 low-GWP refrigerants and a carbon-negative manufacturing process. By eliminating combustion, it reduces your property\'s direct carbon footprint to absolute zero when powered by renewables.'
    },
    {
        question: 'What level of maintenance is required for platinum-tier hardware?',
        answer: 'Our systems are designed for high-uptime. Beyond standard filtration cycles, our concierge service provides bi-annual remote diagnostic audits and annual site reviews to ensure the system remains at peak operating efficiency.'
    }
];

const HeatingCoolingFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>Technical Inquiry</div>
                    <h2 className={styles.title}>System <span className={styles.highlight}>Intelligence</span> FAQ</h2>
                    <p className={styles.intro}>
                        Deep technical insights into our thermodynamic architectures.
                    </p>
                </div>

                <div className={styles.faqContainer}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={`${styles.faqQuestion} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <span>{faq.question}</span>
                                <div className={styles.iconWrapper}>
                                    <div className={styles.hLine}></div>
                                    <div className={`${styles.vLine} ${activeIndex === index ? styles.vLineHidden : ''}`}></div>
                                </div>
                            </button>
                            <div className={`${styles.faqAnswer} ${activeIndex === index ? styles.answerVisible : ''}`}>
                                <div className={styles.answerContent}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaBox}>
                    <div className={styles.ctaGlow}></div>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Complex Architecture?</h3>
                        <p className={styles.ctaText}>Consult with our thermodynamic engineers for a custom system design.</p>
                        <button className={styles.contactBtn}>Initiate Technical Briefing</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatingCoolingFAQ;
