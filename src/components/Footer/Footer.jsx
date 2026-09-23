/**
 * Footer Section - InspectPro
 *
 * Full footer with:
 * - Logo + company description
 * - 4 link columns: Product, Solutions, Resources, Company
 * - Contact information
 * - Bottom bar with copyright
 *
 * Mobile: columns collapse into accordion-style expandable groups
 */

"use client";

import { useState } from "react";
import { footerLinks } from "@/data/content";
import { FiShield, FiChevronDown } from "react-icons/fi";
import styles from "./Footer.module.css";

export default function Footer() {
  /* Track which footer column is expanded on mobile */
  const [openColumn, setOpenColumn] = useState(null);

  /* Toggle column open/closed (mobile accordion behavior) */
  const toggleColumn = (column) => {
    setOpenColumn(openColumn === column ? null : column);
  };

  /* Footer column data for rendering */
  const columns = [
    { title: "Product", links: footerLinks.product },
    { title: "Solutions", links: footerLinks.solutions },
    { title: "Resources", links: footerLinks.resources },
    { title: "Company", links: footerLinks.company },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ----- Top Section: Logo + Link Columns ----- */}
        <div className={styles.topSection}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <a href="/" className={styles.logo}>
              <FiShield className={styles.logoIcon} />
              <span className={styles.logoText}>InspectPro</span>
            </a>
            <p className={styles.companyDescription}>
              InspectPro is a leading company providing consistent equipment
              inspections and reliable safety solutions.
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((column) => (
            <div key={column.title} className={styles.linkColumn}>
              {/* Column Title (clickable on mobile) */}
              <button
                className={styles.columnTitle}
                onClick={() => toggleColumn(column.title)}
              >
                {column.title}
                <FiChevronDown
                  className={`${styles.columnChevron} ${
                    openColumn === column.title ? styles.chevronOpen : ""
                  }`}
                />
              </button>

              {/* Column Links */}
              <ul
                className={`${styles.columnLinks} ${
                  openColumn === column.title ? styles.columnLinksOpen : ""
                }`}
              >
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* ----- Bottom Bar ----- */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLinks}>
            <a href="#">InspectPro</a>
            <span>·</span>
            <a href="#">Sitemap</a>
            <span>·</span>
            <a href="#">Templates</a>
          </div>
          <p className={styles.copyright}>
            © Copyright Nov 6, 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
