'use client';

import React from 'react';
import styles from './ConsultationModal.module.css';

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className={styles.header}>
                    <h2 className={styles.title}>Book Free Consultation</h2>
                    <p className={styles.subtitle}>Fill in your details and our experts will get back to you shortly.</p>
                </div>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Name" className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="Email" className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="tel" placeholder="Mobile Number" className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <div className={styles.selectWrapper}>
                            <select className={styles.select} required>
                                <option value="">Select Location</option>
                                <option value="vic">Victoria</option>
                                <option value="nsw">New South Wales</option>
                                <option value="qld">Queensland</option>
                            </select>
                            <div className={styles.selectArrow}>
                                <svg width="14" height="9" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConsultationModal;
