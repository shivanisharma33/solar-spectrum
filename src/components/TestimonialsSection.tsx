'use client';

import React from 'react';
import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
    return (
        <section className={styles.section}>
            {/* Left Decorative Blob - Only on larger screens */}
            <div className={styles.blob} />

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <p className={styles.subHeader}>Feedback</p>
                    <h2 className={styles.title}>Our Testimonials</h2>
                </div>

                {/* Cards Container */}
                <div className={styles.grid}>

                    {/* Card 1: Sarah B. */}
                    <div className={styles.card}>
                        <p className={styles.reviewText}>
                            Switching To Clean Energy Was Easy With Solar Spectrum.
                            The System Runs Perfectly, And It Feels Great To Save Money
                            While Supporting A Greener Future.
                        </p>

                        <div className={styles.footer}>
                            <div className={styles.userInfo}>
                                <div className={styles.avatarWrapper}>
                                    <Image
                                        src="/services1.png"
                                        alt="Sarah B."
                                        width={60}
                                        height={60}
                                        className={styles.avatar}
                                    />
                                </div>
                                <div className={styles.userDetails}>
                                    <span className={styles.userName}>Sarah B., Melbourne VIC</span>
                                    <span className={styles.userRole}>Homeowner</span>
                                </div>
                            </div>

                            {/* Quote Icon */}
                            <div className={styles.quoteIcon}>
                                <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 60 C15 60 10 50 10 35 C10 20 20 10 35 10 L40 10 L40 40 L30 40 C28 40 28 42 28 45 C28 55 35 55 35 60 Z" fill="#b9f5a6" />
                                    <path d="M75 60 C65 60 60 50 60 35 C60 20 70 10 85 10 L90 10 L90 40 L80 40 C78 40 78 42 78 45 C78 55 85 55 85 60 Z" fill="#b9f5a6" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Michelle R. */}
                    <div className={styles.card}>
                        <p className={styles.reviewText}>
                            Switching To Clean Energy Was Easy With Solar Spectrum.
                            The System Runs Perfectly, And It Feels Great To Save Money
                            While Supporting A Greener Future.
                        </p>

                        <div className={styles.footer}>
                            <div className={styles.userInfo}>
                                <div className={styles.avatarWrapper}>
                                    <Image
                                        src="/services2.png"
                                        alt="Michelle R."
                                        width={60}
                                        height={60}
                                        className={styles.avatar}
                                    />
                                </div>
                                <div className={styles.userDetails}>
                                    <span className={styles.userName}>Michelle R., Brisbane QLD</span>
                                    <span className={styles.userRole}>Homeowner</span>
                                </div>
                            </div>

                            {/* Quote Icon */}
                            <div className={styles.quoteIcon}>
                                <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 60 C15 60 10 50 10 35 C10 20 20 10 35 10 L40 10 L40 40 L30 40 C28 40 28 42 28 45 C28 55 35 55 35 60 Z" fill="#b9f5a6" />
                                    <path d="M75 60 C65 60 60 50 60 35 C60 20 70 10 85 10 L90 10 L90 40 L80 40 C78 40 78 42 78 45 C78 55 85 55 85 60 Z" fill="#b9f5a6" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Progress Bar */}
                <div className={styles.progressBarContainer}>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill}></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;
