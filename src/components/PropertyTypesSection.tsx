'use client';

import React from 'react';
import styles from './PropertyTypesSection.module.css';

const PropertyTypesSection = () => {
    const properties = [
        {
            icon: (
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            ),
            title: "Residential Homes",
            description: "Powerful solar solutions with seamless installation and smart performance."
        },
        {
            icon: (
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            ),
            title: "Commercial Buildings",
            description: "Efficient solar solutions with smooth installation and smart performance."
        },
        {
            icon: (
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20V9l4-2 4 2 4-2 6 3V20H2z" />
                    <path d="M17 13v4" />
                    <path d="M7 13v4" />
                    <path d="M12 13v4" />
                </svg>
            ),
            title: "Industrial Facilities",
            description: "Smart solar systems with seamless setup and powerful performance."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {properties.map((property, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconCircle}>
                            {property.icon}
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{property.title}</h3>
                            <p className={styles.description}>{property.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PropertyTypesSection;
