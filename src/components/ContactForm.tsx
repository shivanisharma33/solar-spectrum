'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'residential',
    sectorType: 'Solar',
    message: '',
    agreeTerms: false,
  });

  const sectorOptions = [
    { icon: '☀️', label: 'Solar' },
    { icon: '🔋', label: 'Battery' },
    { icon: '🌡️', label: 'Heat Pump' },
    { icon: '⚡', label: 'EV Charging' },
    { icon: '🏠', label: 'Home Energy' },
    { icon: '📋', label: 'Other' },
  ];

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSectorClick = (label: string) => {
    setFormData({ ...formData, sectorType: label });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.infoColumn}>
            <div className={styles.infoSection}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <p className={styles.infoText}>
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>📞</div>
                <div>
                  <h4 className={styles.detailLabel}>Phone</h4>
                  <a href="tel:1300367909" className={styles.detailValue}>1300 367 909</a>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>✉️</div>
                <div>
                  <h4 className={styles.detailLabel}>Email</h4>
                  <a href="mailto:sales@solarspectrum.com.au" className={styles.detailValue}>sales@solarspectrum.com.au</a>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>📍</div>
                <div>
                  <h4 className={styles.detailLabel}>Office</h4>
                  <p className={styles.detailValue}>404/87 Overton Rd, Williams Landing VIC 3027</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}>FB</a>
              <a href="#" className={styles.socialIcon}>IG</a>
              <a href="#" className={styles.socialIcon}>LI</a>
              <a href="#" className={styles.socialIcon}>TW</a>
            </div>
          </div>

          <div className={styles.formColumn}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+61 400 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>What are you interested in?</label>
                <div className={styles.sectorGrid}>
                  {sectorOptions.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      className={`${styles.sectorBtn} ${formData.sectorType === option.label ? styles.active : ''
                        }`}
                      onClick={() => handleSectorClick(option.label)}
                    >
                      <span>{option.icon} {option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={4}
                />
              </div>

              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <span className={styles.checkboxText}>
                  I agree to the <a href="/terms" className={styles.link}>Terms & Conditions</a>
                </span>
              </label>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

