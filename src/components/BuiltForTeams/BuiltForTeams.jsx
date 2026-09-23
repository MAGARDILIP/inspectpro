/**
 * BuiltForTeams Section - InspectPro
 *
 * Shows 3 industry cards for target audiences:
 * - Warehouse operations
 * - Construction sites
 * - Manufacturing facilities
 */

import { teamTypes } from "@/data/content";
import { FiBox, FiHardDrive, FiTool } from "react-icons/fi";
import styles from "./BuiltForTeams.module.css";

/* Map icon names to React Icons */
const iconMap = {
  warehouse: FiBox,
  construction: FiHardDrive,
  factory: FiTool,
};

export default function BuiltForTeams() {
  return (
    <section className={styles.builtForTeams}>
      <div className={styles.container}>
        {/* Section Title */}
        <h2 className={styles.title}>
          Built for teams that inspect equipment every day
        </h2>

        {/* Team Cards Grid */}
        <div className={styles.grid}>
          {teamTypes.map((team, index) => {
            const Icon = iconMap[team.icon] || FiBox;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconBox}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{team.title}</h3>
                <p className={styles.cardDescription}>{team.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
