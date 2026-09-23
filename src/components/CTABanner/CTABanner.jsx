/**
 * CTA Banner Section - InspectPro
 *
 * Full-width dark navy call-to-action section.
 * Centered heading + subtitle + two action buttons.
 * Encourages users to get started with InspectPro.
 */

import { ctaContent } from "@/data/content";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.container}>
        <h2 className={styles.title}>{ctaContent.title}</h2>
        <p className={styles.subtitle}>{ctaContent.description}</p>

        <div className={styles.buttons}>
          <a href="#" className="btn btn-primary">
            {ctaContent.primaryCTA}
          </a>
          <a href="#" className="btn btn-dark">
            {ctaContent.secondaryCTA}
          </a>
        </div>
      </div>
    </section>
  );
}
