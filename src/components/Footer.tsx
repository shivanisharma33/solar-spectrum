'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerSection}>
            {/* Main Footer Content */}
            <div className={styles.footerMain}>
                {/* Column 1: Info */}
                <div className={styles.logoArea}>
                    <Logo width={40} height={40} className={styles.footerLogo} />
                    <p className={styles.logoDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className={styles.socials}>
                        <Link href="#" className={styles.socialIcon}>
                            <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.383 14.392 5 15.358 5H18V0h-4.261C10.038 0 9 2.1 9 4.333V8z" /></svg>
                        </Link>
                        <Link href="#" className={styles.socialIcon}>
                            <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </Link>
                        <Link href="#" className={styles.socialIcon}>
                            <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                        </Link>
                        <Link href="#" className={styles.socialIcon}>
                            <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.091.378-.293 1.189-.332 1.353-.051.21-.17.258-.391.156-1.458-.678-2.37-2.806-2.37-4.514 0-3.674 2.671-7.049 7.697-7.049 4.041 0 7.181 2.879 7.181 6.728 0 4.014-2.53 7.245-6.041 7.245-1.18 0-2.289-.613-2.668-1.336l-.726 2.766c-.263 1.011-.974 2.278-1.45 3.047 1.125.347 2.314.536 3.548.536 6.627 0 12-5.373 12-12s-5.373-12-12-12z" /></svg>
                        </Link>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className={styles.linksArea}>
                    <h3 className={styles.columnTitle}>Quick Link</h3>
                    <div className={styles.links}>
                        <Link href="/" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Home</Link>
                        <Link href="/about" className={styles.linkItem}><span className={styles.linkIcon}>›</span> About</Link>
                        <Link href="/services" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Services</Link>
                        <Link href="/contact" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Contact Us</Link>
                    </div>
                </div>

                {/* Column 3: Our Service */}
                <div className={styles.linksArea}>
                    <h3 className={styles.columnTitle}>Our Service</h3>
                    <div className={styles.links}>
                        <Link href="#" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Solar Panels</Link>
                        <Link href="#" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Solar Battery</Link>
                        <Link href="#" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Heating & Cooling</Link>
                        <Link href="#" className={styles.linkItem}><span className={styles.linkIcon}>›</span> Heat Pump</Link>
                        <Link href="#" className={styles.linkItem}><span className={styles.linkIcon}>›</span> EV Chargers</Link>
                    </div>
                </div>

                {/* Column 4: Contact Us */}
                <div className={styles.contactArea}>
                    <h3 className={styles.columnTitle}>Contact Us</h3>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                            </div>
                            <span>+123 456 789</span>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                            </div>
                            <span>solarspectrum@mail.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                            </div>
                            <span>No. 12 Arjuna Raya Street,<br />Bandung, Australia</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomContainer}>
                    <span>© 2025 Solar Spectrum. All rights reserved.</span>
                    <div className={styles.legalLinks}>
                        <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
                        <Link href="#" className={styles.legalLink}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
