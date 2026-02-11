'use client';

import React from 'react';
import Image from 'next/image';
import styles from './SmartEnergyBanner.module.css';

const SmartEnergyBanner = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.banner}>
                    {/* Background Image */}
                    <Image
                        src="/solar.png"
                        alt="Solar Energy"
                        fill
                        className={styles.backgroundImage}
                    />
                    {/* Blue-Gray Overlay */}
                    <div className={styles.overlay}></div>

                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Smartest Way to Generate<br />
                            Electricity
                        </h2>

                        <button className={styles.button}>
                            <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.19-1.33a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartEnergyBanner;
