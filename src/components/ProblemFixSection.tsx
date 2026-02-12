"use client";
import React from "react";
import Image from "next/image";
import styles from "./ProblemFixSection.module.css";

export default function ProblemFixSection() {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}></div>
            {/* Background Image */}
            <Image
                src="/solar.png"
                alt="Solar Panels Background"
                fill
                className={styles.backgroundImage}
                priority
            />

            <div className={styles.container}>
                {/* Left Image (Worker) */}
                <div className={styles.imageWrapper}>
                    <img
                        src="/bg23.png"
                        alt="Solar Technician"
                        className={styles.workerImage}
                    />
                </div>

                {/* Right Text Content */}
                <div className={styles.content}>
                    <h2 className={styles.heading}>
                        Having A Problem We’ll <br /> Fixed It Today
                    </h2>

                    <p className={styles.description}>
                        Got a solar issue? Our skilled technicians will get it sorted today — fast,
                        efficient, and with lasting peace of mind. From minor glitches to system failures,
                        we handle it all with precision and care. We keep your power flowing, your
                        savings growing, and your worries away — so you don’t have to slow down.
                    </p>

                    <div className={styles.phoneContainer}>
                        <svg
                            className={styles.phoneIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className={styles.phoneNumber}>(236) 235 - 2569</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
