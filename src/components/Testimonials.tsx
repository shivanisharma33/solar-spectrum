'use client';

import React from 'react';
import styles from './Testimonials.module.css';

const feedbacks = [
    {
        name: "Alice Thompson",
        role: "Homeowner",
        quote: "The team was incredibly professional and the installation was done in one day. We are already seeing a massive drop in our energy bills!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
        name: "Robert Chen",
        role: "Homeowner",
        quote: "Excellent customer service. They guided us through the entire process, including the government rebates. Highly recommend Solar Spectrum!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
        name: "Sarah Jenkins",
        role: "Homeowner",
        quote: "Best investment we've made for our home. The panels look great and the battery backup gives us peace of mind during storms.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
];

const Star = () => (
    <svg className={styles.star} viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.header}>
                <span className={styles.subtitle}>Customer Feedback</span>
                <h2 className={styles.title}>What Our Clients Say</h2>
                <p className={styles.intro}>
                    Real Stories From Homeowners Who Switched To Solar Energy.
                </p>
            </div>

            <div className={styles.grid}>
                {feedbacks.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.stars}>
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                        <p className={styles.quote}>"{item.quote}"</p>
                        <div className={styles.userInfo}>
                            <img src={item.image} alt={item.name} className={styles.avatar} />
                            <div>
                                <span className={styles.userName}>{item.name}</span>
                                <span className={styles.userRole}>{item.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
