/**
 * Benefits Section - InspectPro
 *
 * Displays 4 feature cards in a grid explaining the
 * key benefits of using InspectPro checklists.
 * Each card has: teal icon box + title + description.
 */

import { benefits } from "@/data/content";
import {
  FiClipboard,
  FiSearch,
  FiFolder,
  FiUsers,
} from "react-icons/fi";
import styles from "./Benefits.module.css";

/* Map icon names from content.js to actual React Icons */
const iconMap = {
  clipboard: FiClipboard,
  search: FiSearch,
  folder: FiFolder,
  users: FiUsers,
};

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Make every forklift inspection consistent
          </h2>
          <p className={styles.subtitle}>
            Make sure forklift unenessment consistent and inspections prevenders
            for the equipment tennters.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className={styles.grid}>
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] || FiClipboard;
            return (
              <div key={index} className={styles.card}>
                {/* Icon Box */}
                <div className={styles.iconBox}>
                  <Icon className={styles.icon} />
                </div>

                {/* Card Content */}
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                <p className={styles.cardDescription}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
