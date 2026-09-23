/**
 * HowItWorks Section - InspectPro
 *
 * 3-step numbered process showing how InspectPro works:
 * 01 - Choose your checklist
 * 02 - Complete the inspection
 * 03 - Record and act on findings
 *
 * Each step has a circular icon, step number with dash, title, and description.
 */

import { howItWorks } from "@/data/content";
import { FiList, FiCheckSquare, FiFileText } from "react-icons/fi";
import styles from "./HowItWorks.module.css";

/* Map step icons */
const stepIcons = [FiList, FiCheckSquare, FiFileText];

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        {/* Section Title */}
        <h2 className={styles.title}>How It Works</h2>

        {/* Steps Grid */}
        <div className={styles.stepsGrid}>
          {howItWorks.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div key={index} className={styles.stepCard}>
                {/* Circular Icon */}
                <div className={styles.iconCircle}>
                  <Icon className={styles.icon} />
                </div>

                {/* Step Number */}
                <div className={styles.stepNumber}>
                  <span className={styles.number}>{step.step}</span>
                  <span className={styles.dash}>—</span>
                </div>

                {/* Step Content */}
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
