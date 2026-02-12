'use client';

import React from 'react';
import Link from 'next/link';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                {/* Left Section: Image */}
                <div className={styles.imageContainer}>
                    <div className={styles.mainImageWrapper}>
                        <img
                            src="./about.png"
                            alt="Solar Professional Team"
                            className={styles.mainImage}
                        />
                    </div>

                    <div className={styles.playButtonContainer}>
                        <div className={styles.pulsingCircle}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Section: Content */}
                <div className={styles.content}>
                    <span className={styles.subtitle}>About Us</span>
                    <h2 className={styles.title}>
                        Renewable Energy Storage Solution
                    </h2>
                    <p className={styles.description}>
                        Ut Tellus Dolor, Dapibus Eget, Elementum Vel, Ifend Cursus Eleifend,
                        Elit. Aenea Ifendn Auctor Wisi Et Ur Na. Aliquam Er At Volutpat. Duis Ac
                        Tuifendrpis. Ut Tu Ellus Dolor, Dapibus Eget, Elementum Vel, Curifende
                        Suseleifend.
                    </p>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            Solar Inverter Setup
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            Battery Storage Solutions
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            Solar Material Financing
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.checkCircle}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            </div>
                            24 X 7 Call & Chat Support
                        </div>
                    </div>

                    <Link href="/about">
                        <button className={styles.moreBtn}>More About</button>
                    </Link>
                </div>
            </div>

            {/* Decorative Dots */}
            <div className={styles.bgDots}></div>
        </section>
    );
};

export default About;
