'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import ConsultationModal from './ConsultationModal';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if it's open
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">
              <Logo width={45} height={45} />
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className={styles.navLinks}>
            <li><Link href="/about" >About Us</Link></li>
            <li><Link href="/solar-battery">Solar & Battery</Link></li>
            <li><Link href="/heating-cooling">Heating & Cooling</Link></li>
            <li><Link href="/ev-chargers">Heat Pump & EV Chargers</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>

          <div className={styles.navAction}>
            <button className={styles.consultBtn} onClick={openModal}>Book Free Consultation</button>

            {/* Hamburger Button */}
            <button
              className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`${styles.backdrop} ${isMenuOpen ? styles.backdropVisible : ''}`}
          onClick={toggleMenu}
        ></div>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavLinks}>
            <li><Link href="/about" onClick={toggleMenu}>About Us</Link></li>
            <li><Link href="/solar-battery" onClick={toggleMenu}>Solar & Battery</Link></li>
            <li><Link href="/heating-cooling" onClick={toggleMenu}>Heating & Cooling</Link></li>
            <li><Link href="/ev-chargers" onClick={toggleMenu}>Heat Pump & EV Chargers</Link></li>
            <li><Link href="/product" onClick={toggleMenu}>Product</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            <li className={styles.mobileAction}>
              <button className={styles.consultBtn} onClick={openModal}>Book Free Consultation</button>
            </li>
          </ul>
        </div>
      </nav>

      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
