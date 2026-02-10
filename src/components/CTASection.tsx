'use client';

import React from 'react';
import styles from './CTASection.module.css';

const CTASection = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                {/* Hidden Wrapper for Background Image to maintain rounded corners clipping */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '30px', overflow: 'hidden', zIndex: 1 }}>
                    <img
                        src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=1200"
                        alt="Smiling Solar Professional"
                        className={styles.bgImage}
                    />
                </div>

                <div className={styles.content}>
                    <span className={styles.subtitle}>Are You Looking For An Installer</span>
                    <h2 className={styles.title}>
                        We are a Global Solar Panel Pump and Street light installer
                    </h2>
                    <button className={styles.btn}>Get Free Consultation</button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
