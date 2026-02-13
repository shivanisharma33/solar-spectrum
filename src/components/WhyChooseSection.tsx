'use client';

import React from 'react';
import styles from './WhyChooseSection.module.css';

const WhyChooseSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Why Victorians Choose Solar Spectrum</h2>
                    <p className={styles.subtitle}>Solar Spectrum Is Australia's Leading Solar Installer Recognized By Sunwiz</p>
                </div>

                <div className={styles.videoWrapper}>
                    <div className={styles.imageOverlay}></div>
                    <img
                        src="/about.png"
                        alt="Solar Installer"
                        className={styles.bgImage}
                    />

                    <div className={styles.playButtonWrapper}>
                        <div className={styles.pulseInner}></div>
                        <div className={styles.pulseMiddle}></div>
                        <div className={styles.pulseOuter}></div>
                        <button className={styles.playButton} aria-label="Play Video">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
