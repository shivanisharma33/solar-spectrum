'use client';

import React from 'react';
import styles from './ConnectExpertsSection.module.css';

const ConnectExpertsSection = () => {
    return (
        <section className={styles.section}>
            {/* Split Background: Top White, Bottom Black */}
            <div className={styles.backgroundContainer}>
                <div className={styles.bgTop}>
                    {/* Right Decorative Blob */}
                    <div className={styles.blob} />
                </div>
                <div className={styles.bgBottom} />
            </div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.subHeader}>Get In Touch</span>
                    <h2 className={styles.mainTitle}>
                        Connect With Solar Experts<br />
                        Near You
                    </h2>
                </div>

                {/* Main Card */}
                <div className={styles.card}>

                    {/* Left: Form */}
                    <div className={styles.form}>
                        {/* Name Input */}
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                placeholder="Name"
                                className={`${styles.input} ${styles.inputName}`}
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                className={styles.input}
                            />
                            <div className={styles.redDot} />
                        </div>

                        <div className={styles.inputGroup}>
                            <div className={styles.selectWrapper}>
                                <select className={`${styles.input} ${styles.select}`}>
                                    <option value="">Select Location</option>
                                    <option value="vic">Victoria</option>
                                    <option value="nsw">New South Wales</option>
                                    <option value="qld">Queensland</option>
                                </select>
                                <div className={styles.redDot} />
                                <div className={styles.selectArrow}>
                                    <svg width="14" height="9" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <button className={styles.submitButton}>
                            Submit
                        </button>
                    </div>

                    {/* Right: Contact Details */}
                    <div className={styles.contactDetails}>

                        {/* Address */}
                        <div className={styles.contactRow}>
                            <div className={styles.iconCircle}>
                                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </div>
                            <div className={styles.contactText}>
                                <h4 className={styles.contactTitle}>Address</h4>
                                <p className={styles.contactDesc}>
                                    Unit 16/260-276 Abbotts Road,<br />Dandenong South, VIC 3175
                                </p>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className={styles.contactRow}>
                            <div className={styles.iconCircle}>
                                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                </svg>
                            </div>
                            <div className={styles.contactText}>
                                <h4 className={styles.contactTitle}>Contact Us</h4>
                                <p className={styles.contactDesc}>
                                    VIC: 0414 107 970
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className={styles.contactRow}>
                            <div className={styles.iconCircle}>
                                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <div className={styles.contactText}>
                                <h4 className={styles.contactTitle}>Email</h4>
                                <p className={styles.contactDesc}>
                                    sales@solarspectrum.com.au
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Newsletter Section */}
                <div className={styles.newsletter}>
                    <h3 className={styles.newsletterTitle}>
                        Subscribe to our newsletter for the latest updates
                    </h3>

                    <div className={styles.newsletterForm}>
                        <div className={styles.newsletterInputWrapper}>
                            <input
                                type="email"
                                placeholder="Email"
                                className={styles.newsletterInput}
                            />
                        </div>
                        <button className={styles.newsletterButton}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectExpertsSection;
