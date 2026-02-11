'use client';

import React from 'react';
import Image from 'next/image';
import styles from './SolarSolutionBanner.module.css';

const SolarSolutionBanner = () => {
    return (
        <section className={styles.banner}>
            {/* Background Image */}
            <Image
                src="/services1.png"
                alt="Solar Panel Installation"
                fill
                priority
                className={styles.backgroundImage}
            />
            {/* Dark Overlay */}
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                {/* Play Button with Ripple Animation */}
                <div className={styles.videoButtonWrapper}>
                    <div className={styles.ripple}></div>
                    <div className={styles.ripple2}></div>
                    <div className={styles.playButton}>
                        <div className={styles.playIcon}></div>
                    </div>
                </div>

                {/* Text Content */}
                <h2 className={styles.title}>
                    Searching for the Perfect <span className={styles.highlight}>Solar Solution?</span>
                </h2>

                <p className={styles.description}>
                    We Bring Smart Solar Energy To Every Home And Business, Combining Innovation,
                    Efficiency, And Lasting Performance For A Brighter, Greener Future.
                </p>

                {/* CTA Button */}
                <button className={styles.button}>
                    Consult Now
                </button>
            </div>
        </section>
    );
};

export default SolarSolutionBanner;
