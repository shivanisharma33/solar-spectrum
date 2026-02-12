'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {/* Left Section: Offers */}
                <div className={styles.leftSection}>
                    <div className={styles.megaBanner}>
                        <div className={styles.megaHeader}>
                            <span className={styles.megaText}>MEGA</span>
                            <div className={styles.thisWeek}>
                                <span>THIS</span>
                                <span>WEEK</span>
                                <span>ONLY</span>
                            </div>
                        </div>
                        <div className={styles.offersLabel}>OFFERS</div>
                    </div>
                    <div className={styles.uptoText}>UPTO <span className={styles.percent}>60%</span> OFF</div>
                </div>

                {/* Right Section: Content */}
                <div className={styles.rightSection}>
                    <div className={styles.badges}>
                        {/* 01 Badge: Approved Seller */}
                        <div className={styles.badgeItem}>
                            <img src={"https://www.solarrun.com.au/wp-content/uploads/2024/12/approved.png"}></img>
                        </div>
                        {/* 02 Badge: 100% Price */}
                        <div className={styles.badgeItem}>
                            <img src={"https://www.solarrun.com.au/wp-content/uploads/2024/12/best-price.png"}></img>
                        </div>
                        {/* 03 Badge: No.2 Popular */}
                        <div className={styles.badgeItem}>
                            <img src={"https://www.solarrun.com.au/wp-content/uploads/2024/12/approved.png"}></img>

                        </div>
                    </div>

                    <h1 className={styles.mainHeading}>
                        CHARGE YOUR DRIVE,<br />
                        <span className={styles.highlightText}>HEAT YOUR HOME</span>
                    </h1>

                    <div className={styles.smarterWayWrapper}>
                        <div className={styles.smarterWay}>THE SMARTER WAY</div>
                    </div>

                    <div className={styles.btnWrapper}>
                        <Link href="/contact">
                            <button className={styles.orderBtn}>Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
