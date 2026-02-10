'use client';

import React from 'react';
import styles from './Process.module.css';

const steps = [
    {
        number: 1,
        title: "Consultation & Site Assessment",
        desc: "We Begin With An In-Depth Consultation To Understand Your Energy Needs And Goals. Our Team Then Conducts.",
        layout: "archedTop",
        textPosition: "bottom"
    },
    {
        number: 2,
        title: "Custom System Design & Planning",
        desc: "Custom System Design And Planning Typically Involves Creating Tailored Solutions To Meet Specific Needs",
        layout: "archedBottom",
        textPosition: "top"
    },
    {
        number: 3,
        title: "Professional Solar Installation",
        desc: "Assess Roof Space, Tilt, And Orientation (For Rooftop Installations). Evaluate Ground Space And Shading",
        layout: "archedTop",
        textPosition: "bottom"
    },
    {
        number: 4,
        title: "Monitoring & Ongoing Support",
        desc: "Effective Monitoring And Ongoing Support Are Critical For Ensuring A Solar Energy Systems Optimal",
        layout: "archedBottom",
        textPosition: "top"
    }
];

const Process = () => {
    return (
        <section className={styles.processSection}>
            <div className={styles.bgDots}></div>

            <div className={styles.header}>
                <span className={styles.subtitle}>Our Process</span>
                <h2 className={styles.title}>Solar Spectrum Process</h2>
                <p className={styles.intro}>
                    We Follow A Simple And Streamlined 4-Step Process To Deliver Efficient And Reliable Solar Solutions.
                </p>
            </div>

            <div className={styles.grid}>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`${styles.stepBlock} ${step.textPosition === 'top' ? styles.textAboveImage : ''}`}
                    >
                        <div className={styles.content}>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>

                        <div className={`${styles.imageWrapper} ${styles[step.layout]}`}>
                            <div className={styles.stepImageWrapper}>
                                <img
                                    src={
                                        step.number === 1 ? "services1.png" :
                                            step.number === 2 ? "https://images.pexels.com/photos/19895872/pexels-photo-19895872.jpeg" :
                                                step.number === 3 ? "https://images.pexels.com/photos/8853505/pexels-photo-8853505.jpeg" :
                                                    "https://images.pexels.com/photos/4254165/pexels-photo-4254165.jpeg"
                                    }
                                    alt={step.title}
                                    className={styles.stepImage}
                                />
                            </div>
                            <div className={styles.numberBadge}>{step.number}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
