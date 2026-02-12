'use client';

import styles from './ContactHero.module.css';

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.meshGradient}></div>
      <div className={styles.content}>
        <div className={styles.badge}>Get In Touch</div>
        <h1 className={styles.title}>
          Let's Start Your <span className={styles.highlight}>Solar Journey</span>
        </h1>
        <p className={styles.subtitle}>
          Connect with our expert team to discover the perfect energy solution for your home or business. We're here to help you power your future.
        </p>
      </div>
    </section>
  );
}

