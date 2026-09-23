/**
 * WhatIs Section - InspectPro
 *
 * Explains what a Forklift Inspection Checklist is.
 * Two-column layout:
 * - Left: heading + descriptive paragraphs
 * - Right: info callout box with regulatory importance
 */

import { whatIsContent } from "@/data/content";
import { FiInfo } from "react-icons/fi";
import styles from "./WhatIs.module.css";

export default function WhatIs() {
  return (
    <section className={styles.whatIs}>
      <div className={styles.container}>
        {/* ----- Left Column: Text Content ----- */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>{whatIsContent.title}</h2>
          {whatIsContent.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* ----- Right Column: Info Callout Box ----- */}
        <div className={styles.calloutWrapper}>
          <div className={styles.callout}>
            <FiInfo className={styles.calloutIcon} />
            <p className={styles.calloutText}>
              Key importances are octenns ls consince heing regulatory
              requirements are cost to{" "}
              <strong>regulatory requirements.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
