'use client';
import { useState } from 'react';
import styles from './ContactLocations.module.css';

export default function ContactLocations() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    { name: 'Sydney', icon: '📍' },
    { name: 'Melbourne', icon: '📍' },
    { name: 'Brisbane', icon: '📍' },
    { name: 'Perth', icon: '📍' },
    { name: 'Adelaide', icon: '📍' },
    { name: 'Canberra', icon: '📍' },
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
            {selectedLocation 
              ? `Currently showing our availability for ${selectedLocation}. Our local experts are ready to assist you.`
              : "We provide expert solar solutions across major Australian cities. Select a location to see our local availability."
            }
          </p>
        </div>

        <div className={styles.locationsGrid}>
          {locations.map((location, index) => (
            <div 
              key={index} 
              className={`${styles.locationCard} ${selectedLocation === location.name ? styles.selectedCard : ''}`} 
              onClick={() => setSelectedLocation(location.name)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{location.icon}</div>
                <h3 className={styles.locationName}>{location.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

