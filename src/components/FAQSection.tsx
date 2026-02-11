'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FAQSection.module.css';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What Is The Tesla Powerwall 3?",
            answer: "The Tesla Powerwall 3 is a home battery system that stores solar energy for use during power outages or peak electricity rates. It provides backup power and helps reduce reliance on the grid."
        },
        {
            question: "How Does The Powerwall 3 Differ From Previous Models?",
            answer: "The Powerwall 3 offers improved capacity, higher power output, and enhanced efficiency compared to previous models. It also features a built-in solar inverter for seamless integration."
        },
        {
            question: "Do I Need Solar Panels To Use A Powerwall 3?",
            answer: "While the Powerwall 3 works best with solar panels, it can also charge from the grid during off-peak hours and provide backup power during outages even without solar panels."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            {/* Decorative Background Shapes */}
            <div className={styles.bgShapes}>
                <div className={`${styles.shape} ${styles.shape1}`}></div>
                <div className={`${styles.shape} ${styles.shape2}`}></div>
            </div>

            <div className={styles.container}>
                {/* Left - Circular Image */}
                <div className={styles.imageSection}>
                    <div className={styles.circleWrapper}>
                        <div className={styles.circle}>
                            <Image
                                src="/newbg.png"
                                alt="Customer service representative"
                                fill
                                className={styles.personImage}
                            />
                        </div>
                    </div>
                </div>

                {/* Right - FAQ Content */}
                <div className={styles.content}>
                    <p className={styles.label}>FAQ</p>
                    <h2 className={styles.title}>
                        Tesla Powerwall 3 Frequently Asked Questions
                    </h2>
                    <p className={styles.description}>
                        From residential installations to commercial projects, we provide end-to-end solar solutions with
                        expert consultation and ongoing support.
                    </p>

                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${openIndex === index ? styles.faqItemOpen : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={styles.plusIcon}>+</span>
                                </button>
                                {openIndex === index && (
                                    <div className={styles.faqAnswer}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
