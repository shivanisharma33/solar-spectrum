'use client';

import styles from './ContactLocations.module.css';

export default function ContactLocations() {
  const locations = [
    { name: 'Sydney', savings: '$4,500', icon: '📍' },
    { name: 'Melbourne', savings: '$4,200', icon: '📍' },
    { name: 'Brisbane', savings: '$4,000', icon: '📍' },
    { name: 'Perth', savings: '$3,800', icon: '📍' },
    { name: 'Adelaide', savings: '$3,500', icon: '📍' },
    { name: 'Canberra', savings: '$3,200', icon: '📍' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Our Presence</div>
          <h2 className={styles.title}>
            Serving You Across <span className={styles.highlight}>Australia</span>
          </h2>
          <p className={styles.subtitle}>
            Join thousands of happy customers who are saving big on their energy bills with our tailored solar solutions.
          </p>
        </div>

        <div className={styles.locationsGrid}>
          {locations.map((location, index) => (
            <div key={index} className={styles.locationCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{location.icon}</div>
                <h3 className={styles.locationName}>{location.name}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.savings}>Average Yearly Savings</p>
                <p className={styles.amount}>{location.savings}</p>
              </div>
              <button className={styles.cardBtn}>Check Eligibility</button>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>Ready to start saving?</p>
          <button className={styles.exploreBtn}>Explore All Solutions</button>
        </div>
      </div>
    </section>
  );
}

