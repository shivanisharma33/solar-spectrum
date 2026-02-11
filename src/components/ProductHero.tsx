'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ProductHero.module.css';

const ProductHero = () => {
    return (
        <section className={styles.hero}>
            {/* Background Image: Solar Panels at Dusk */}
            <Image
                src="/new1.png"
                alt="Solar Panels Background"
                fill
                priority
                className={styles.bgImage}
            />
           

            <div className={styles.container}>
                {/* Left Side: Exact Text Styling */}
                <div className={styles.textContent}>
                    <p className={styles.subtitle}>
                        <span className={styles.subtitleGreen}>Stay Powered</span>
                        <span className={styles.subtitleDivider}>—</span>
                        <span className={styles.subtitleOrange}>Even When The Grid Goes Down</span>
                    </p>

                    <h1 className={styles.heading}>
                        SAVE UP TO
                        <span className={styles.badgeWrapper}>
                            <span className={styles.badgeText}>$4,800</span>
                        </span>
                        IN REBATES ON <br />
                        YOUR TESLA POWERWALL 3
                    </h1>
                </div>

                {/* Right Side: Product Image (Tesla Powerwalls) */}
                
            </div>
        </section>
    );
};

export default ProductHero;
