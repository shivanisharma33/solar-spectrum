'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Services.module.css';

const services = [
    {
        title: "Solar Panels",
        price: "Starting at $15,000",
        description: "Professional installation of high-efficiency solar panels tailored to your property's unique requirements and energy needs.",
        image: "./services2.png",
        learnMoreLink: "/product"
    },
    {
        title: "Solar Battery",
        price: "Starting at $15,000",
        description: "Professional installation of high-efficiency solar panels tailored to your property's unique requirements and energy needs.",
        image: "services4.png",
        learnMoreLink: "/solar-battery"
    },
    {
        title: "Heating & Cooling",
        price: "Starting at $15,000",
        description: "Professional installation of high-efficiency solar panels tailored to your property's unique requirements and energy needs.",
        image: "services3.png",
        learnMoreLink: "/heating-cooling"
    }
];

const Services = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.header}>
                <span className={styles.subtitle}>Our Services</span>
                <h2 className={styles.title}>Solar Solutions For Every Need</h2>
                <p className={styles.intro}>
                    From residential installations to commercial projects, we provide end-to-end solar solutions with expert consultation and ongoing support.
                </p>
            </div>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className={styles.serviceImage}
                            />
                        </div>
                        <h3 className={service.title === "Solar Panels" ? styles.serviceTitle : styles.serviceTitle}>
                            {service.title}
                        </h3>
                        <p className={styles.price}>{service.price}</p>
                        <p className={styles.description}>{service.description}</p>

                        <div className={styles.buttonGroup}>
                            <Link href="/contact">
                                <button className={styles.getStartedBtn}>Get Started</button>
                            </Link>
                            <Link href={service.learnMoreLink}>
                                <button className={styles.learnMoreBtn}>Learn More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
