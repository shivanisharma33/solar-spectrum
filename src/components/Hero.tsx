'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {/* Right Section: Content */}
                <div className={styles.rightSection}>
                    <div className={styles.badges}>
                        {/* 01 Badge: Approved Seller */}
                        <div className={styles.badgeItem}>
                            <img src={"https://www.solarrun.com.au/wp-content/uploads/2024/12/approved.png"}></img>
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
