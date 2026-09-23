/**
 * FAQ Section - InspectPro
 *
 * Accordion-style FAQ component.
 * Each question expands/collapses to show the answer.
 * Uses useState to track which item is currently open.
 *
 * Visible in the mobile design but shown on all breakpoints
 * because FAQ sections add value for SEO and user experience.
 */

"use client";

import { useState } from "react";
import { faqItems } from "@/data/content";
import { FiChevronDown } from "react-icons/fi";
import styles from "./FAQ.module.css";

export default function FAQ() {
  /* Track which FAQ item is currently expanded (null = all closed) */
  const [openIndex, setOpenIndex] = useState(null);

  /**
   * Toggle an FAQ item open/closed
   * If the same item is clicked again, close it
   */
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.title}>FAQ</h2>

        <div className={styles.accordionList}>
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              {/* Question (clickable header) */}
              <button
                className={styles.accordionHeader}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.question}>{item.question}</span>
                <FiChevronDown
                  className={`${styles.chevron} ${
                    openIndex === index ? styles.chevronOpen : ""
                  }`}
                />
              </button>

              {/* Answer (visible only when open) */}
              {openIndex === index && (
                <div className={styles.accordionBody}>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
