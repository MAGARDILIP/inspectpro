/**
 * Navbar Component - InspectPro
 *
 * Responsive navigation bar with:
 * - Logo on the left
 * - Navigation links in the center (desktop)
 * - Login + Get Started CTA on the right (desktop)
 * - Hamburger menu for mobile devices
 *
 * Uses "use client" because it needs useState for mobile menu toggle
 */

"use client";

import { useState } from "react";
import { navLinks } from "@/data/content";
import { FiMenu, FiX, FiChevronDown, FiCheckCircle } from "react-icons/fi";
import styles from "./Navbar.module.css";

export default function Navbar() {
  /* State to track if mobile menu is open or closed */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* Toggle mobile menu open/close */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* ----- Logo ----- */}
        <a href="/" className={styles.logo}>
          <FiCheckCircle className={styles.logoIcon} />
          <span className={styles.logoText}>InspectPro</span>
        </a>

        {/* ----- Desktop Navigation Links ----- */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.label} className={styles.navItem}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
                {/* Show dropdown arrow for Resources */}
                {link.hasDropdown && (
                  <FiChevronDown className={styles.dropdownIcon} />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* ----- Desktop Right Side (Login + CTA) ----- */}
        <div className={styles.navRight}>
          <a href="#" className={styles.loginLink}>
            Login
          </a>
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>

        {/* ----- Mobile Hamburger Button ----- */}
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* ----- Mobile Menu (slides down when open) ----- */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <FiChevronDown />}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileNavActions}>
            <a href="#" className={styles.mobileLoginLink}>
              Login
            </a>
            <a href="#" className="btn btn-primary" style={{ width: "100%" }}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
