'use client';

import styles from './ContactBanner.module.css';

export default function ContactBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to switch to <span className={styles.highlight}>sustainable energy?</span>
          </h2>
          <p className={styles.description}>
            Join the community of Australians powering their homes with clean, green solar energy.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={styles.ctaBtn}>Get Started Now</button>
          <p className={styles.note}>No obligation, free consultation</p>
        </div>
      </div>
    </section>
  );
}

