'use client';

import React from 'react';
import Image from 'next/image';
import styles from './AboutHero.module.css';

const AboutHero = () => {
    return (
        <section className={styles.heroContainer}>
            {/* Background Image */}
            <Image
                src="/solar.png"
                alt="Solar Panels Background"
                fill
                priority
                className={styles.bgImage}
            />
            {/* Dark Overlay */}
            <div className={styles.overlay}></div>

            {/* Content */}
            <div className={styles.content}>
                <h1 className={styles.title}>
                    About Us
                </h1>
            </div>
        </section>
    );
};

export default AboutHero;
