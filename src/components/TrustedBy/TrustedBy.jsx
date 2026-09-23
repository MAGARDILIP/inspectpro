/**
 * TrustedBy Section - InspectPro
 *
 * Displays partner/client logos in a horizontal strip.
 * Shows credibility and social proof.
 * Uses text-based logos with icons since we don't have actual logo files.
 */

import { partners } from "@/data/content";
import {
  FiTruck,
  FiSettings,
  FiHome,
  FiGlobe,
  FiPackage,
} from "react-icons/fi";
import styles from "./TrustedBy.module.css";

/* Map each partner to an icon for visual distinction */
const partnerIcons = [FiTruck, FiSettings, FiHome, FiGlobe, FiPackage];

export default function TrustedBy() {
  return (
    <section className={styles.trustedBy}>
      <div className={styles.container}>
        <p className={styles.title}>
          Trusted by teams that need consistent inspections
        </p>

        <div className={styles.logoGrid}>
          {partners.map((partner, index) => {
            const Icon = partnerIcons[index];
            return (
              <div key={partner} className={styles.logoItem}>
                <Icon className={styles.logoIcon} />
                <span className={styles.logoText}>{partner}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
