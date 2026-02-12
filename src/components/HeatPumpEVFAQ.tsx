'use client';

import React, { useState } from 'react';
import styles from './HeatPumpEVFAQ.module.css';

const faqs = [
    {
        question: 'Is the Hypervolt compatible with all electric vehicles?',
        answer: 'Yes, Hypervolt is designed for future-proof technology and is compatible with all electric vehicles in the Australian market using a standard Type-2 cable.'
    },
    {
        question: 'How does the solar charging integration work?',
        answer: 'Hypervolt can synchronize with your solar panel system to charge your EV using only excess solar energy, effectively allowing you to power your car for free with 100% renewable energy.'
    },
    {
        question: 'Do I need an earth rod for installation?',
        answer: 'No, the Hypervolt Home 3 Pro does not require an earth rod, making it safer, quicker, and more cost-effective to install in Australian homes.'
    },
    {
        question: 'Is Hypervolt available across Australia?',
        answer: 'Absolutely. SolarRun provides Hypervolt EV charging solutions across major locations including Melbourne, Sydney, Newcastle, Canberra, Brisbane, Gold Coast, Adelaide, and the Mid North Coast.'
    },
    {
        question: 'What level of support is provided for Hypervolt customers?',
        answer: 'Hypervolt provides 365 days-a-year customer support and free-for-life over-the-air (OTA) software updates, ensuring your charger remains at peak performance.'
    }
];

const HeatPumpEVFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>Help Center</div>
                    <h2 className={styles.title}>Hypervolt <span className={styles.highlight}>Intelligence</span> FAQ</h2>
                    <p className={styles.intro}>
                        Everything you need to know about the UK's most popular smart charger.
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
                        <h3 className={styles.ctaTitle}>Ready to Experience Hypervolt?</h3>
                        <p className={styles.ctaText}>Upgrade your EV charging with Hypervolt, now available through SolarRun.</p>
                        <button className={styles.contactBtn}>Get Hypervolt Quote Today</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatPumpEVFAQ;
