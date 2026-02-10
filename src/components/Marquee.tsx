'use client';

import React from 'react';
import styles from './Marquee.module.css';

const logos = [
    // Jinko Solar
    <svg key="jinko" viewBox="0 0 200 60"><path d="M10 30h30v10h-30z" fill="#28a745" /><text x="10" y="25" fontSize="24" fontWeight="bold" fill="#28a745">JinKO</text><text x="60" y="15" fontSize="12" fill="#28a745">Solar</text></svg>,
    // Goodwe
    <svg key="goodwe" viewBox="0 0 200 60"><rect x="10" y="10" width="30" height="30" fill="#d00" transform="rotate(45 25 25)" /><text x="60" y="40" fontSize="20" fontWeight="bold" fill="#333">GOODWE</text></svg>,
    // SolarEdge
    <svg key="solaredge" viewBox="0 0 200 60"><text x="10" y="40" fontSize="20" fontWeight="bold" fill="#333">solar</text><rect x="65" y="15" width="60" height="30" rx="5" fill="#d00" /><text x="70" y="40" fontSize="20" fontWeight="bold" fill="#fff">edge</text></svg>,
    // Growatt
    <svg key="growatt" viewBox="0 0 200 60"><text x="10" y="45" fontSize="30" fontWeight="bold" fill="#9c3">G</text><text x="35" y="45" fontSize="24" fontWeight="bold" fill="#333">rowatt</text><text x="40" y="15" fontSize="8" fill="#aaa">powering tomorrow</text></svg>,
    // Alpha ESS
    <svg key="alpha" viewBox="0 0 200 60"><path d="M10 50L30 10l20 40H40l-5-10H25l-5 10H10z" fill="#777" /><path d="M35 35l10 5l-5 5-5-10z" fill="#f90" /><text x="60" y="40" fontSize="20" fontWeight="bold" fill="#333">Alpha</text><text x="120" y="40" fontSize="20" fill="#aaa">·ESS</text></svg>,
    // Fronius
    <svg key="fronius" viewBox="0 0 200 60"><ellipse cx="100" cy="30" rx="90" ry="25" fill="#d00" /><text x="100" y="40" fontSize="24" fontWeight="bold" fill="#fff" textAnchor="middle" fontStyle="italic">Fronius</text></svg>,
];

const Marquee = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.track}>
                {logos.map((logo, index) => (
                    <div key={index} className={styles.logoItem}>{logo}</div>
                ))}
                {/* Duplicate for seamless loop */}
                {logos.map((logo, index) => (
                    <div key={`dup-${index}`} className={styles.logoItem}>{logo}</div>
                ))}
                {/* Triplicate for large screens */}
                {logos.map((logo, index) => (
                    <div key={`dup2-${index}`} className={styles.logoItem}>{logo}</div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
