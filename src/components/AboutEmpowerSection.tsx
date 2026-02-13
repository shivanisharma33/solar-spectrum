'use client';

import React from 'react';
import Image from 'next/image';
import styles from './AboutEmpowerSection.module.css';

const AboutEmpowerSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.contentColumn}>
                    <h2 className={styles.heading}>
                        Empowering A Greener <br />
                        Tomorrow
                    </h2>

                    <p className={styles.description}>
                        At Solar Spectrum, We Specialize In Smart, Affordable, And Reliable Solar
                        Energy And Storage Solutions. With A Focus On Innovation And Customer
                        Satisfaction, We're Dedicated To Helping Homes And Businesses Switch To
                        Clean Energy With Ease.
                    </p>

                    <div className={styles.metricsContainer}>
                        {/* Rating Block */}
                        <div className={styles.ratingBlock}>
                            <svg className={styles.starIcon} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className={styles.ratingText}>Excellent 4.8/5</span>
                        </div>

                        {/* Reviews Block */}
                        {/* <div className={styles.reviewsBlock}>
                            <div className={styles.avatars}>
                                <div className={styles.avatar}>
                                    <Image src="/services1.png" alt="User 1" fill className="object-cover" />
                                </div>
                                <div className={styles.avatar}>
                                    <Image src="/services2.png" alt="User 2" fill className="object-cover" />
                                </div>
                                <div className={styles.avatar}>
                                    <Image src="/services1.png" alt="User 4" fill className="object-cover" />
                                </div>
                            </div>
                            <span className={styles.reviewsText}>Reviews 130+</span>
                        </div> */}
                    </div>

                    <button className={styles.button}>
                        Learn More
                        <svg className={styles.buttonArrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                </div>

                {/* Right Image */}
                <div className={styles.imageColumn}>
                    {/* Background Image Container */}
                    <div className={styles.mainImageWrapper}>
                        <Image
                            src="/about.png"
                            alt="Solar Engineer"
                            fill
                            className={styles.mainImage}
                        />
                    </div>

                    {/* Floating Card - Success 89% (Positioned Top Right relative to image) */}
                    <div className={`${styles.card} ${styles.cardTop}`}>
                        <div className={styles.textContainer}>
                            <h3 className={styles.cardNumber}>89% <span className={styles.cardLabelSuccess}>Success</span></h3>
                            <p className={styles.cardText}>
                                With An Impressive 89% Success Rate, Solar Spectrum Consistently Delivers Reliable Solar Solutions That Meet Our Clients' Energy Goals With Satisfaction And Trust.
                            </p>
                        </div>
                    </div>

                    {/* Floating Card - Experience 05+ (Positioned Bottom Left relative to image) */}
                    <div className={`${styles.card} ${styles.cardBottom}`}>
                        <div className={styles.textContainer}>
                            <h3 className={styles.cardNumber}>05+ <span className={styles.cardLabelExperience}>Experience</span></h3>
                            <p className={styles.cardText}>
                                With An Impressive 89% Success Rate, Solar Spectrum Consistently Delivers Reliable Solar Solutions That Meet Our Clients' Energy Goals With Satisfaction And Trust.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutEmpowerSection;
