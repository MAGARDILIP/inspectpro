/**
 * Hero Section - InspectPro
 *
 * The main landing section with:
 * - Left side: badge, heading, description, two CTA buttons
 * - Right side: Interactive inspection checklist card
 *   - Each item has Pass/Fail/NA toggle buttons
 *   - Progress bar shows completion percentage
 *
 * Uses "use client" because of interactive state management
 */

"use client";

import { useState } from "react";
import { heroContent, checklistItems } from "@/data/content";
import {
  FiCheck,
  FiAlertTriangle,
  FiClipboard,
  FiMinus,
} from "react-icons/fi";
import styles from "./Hero.module.css";

export default function Hero() {
  /**
   * State: Track the status of each checklist item
   * Each item can be: "pass", "fail", "warning", or "na"
   * Initialize from the default values in content.js
   */
  const [statuses, setStatuses] = useState(() => {
    const initial = {};
    checklistItems.forEach((item) => {
      initial[item.id] = item.defaultStatus;
    });
    return initial;
  });

  /**
   * Handle status change for a checklist item
   * @param {number} itemId - The ID of the checklist item
   * @param {string} status - The new status ("pass", "fail", "na")
   */
  const handleStatusChange = (itemId, status) => {
    setStatuses((prev) => ({
      ...prev,
      [itemId]: status,
    }));
  };

  /* Calculate how many items have a status set (for progress bar) */
  const completedCount = Object.values(statuses).filter(
    (s) => s !== null && s !== undefined
  ).length;
  const totalCount = checklistItems.length;
  const progressPercent = (completedCount / totalCount) * 100;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* ===== LEFT SIDE: Text Content ===== */}
        <div className={styles.textContent}>
          {/* Badge */}
          <span className={styles.badge}>{heroContent.badge}</span>

          {/* Main Heading */}
          <h1 className={styles.title}>{heroContent.title}</h1>

          {/* Description */}
          <p className={styles.description}>{heroContent.description}</p>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <a href="#checklist" className="btn btn-primary">
              {heroContent.primaryCTA}
            </a>
            <a href="#whats-included" className="btn btn-secondary">
              {heroContent.secondaryCTA}
            </a>
          </div>

          {/* Helper Text */}
          <p className={styles.helperText}>{heroContent.helperText}</p>
        </div>

        {/* ===== RIGHT SIDE: Interactive Checklist Card ===== */}
        <div className={styles.cardWrapper}>
          <div className={styles.checklistCard}>
            {/* Card Header */}
            <div className={styles.cardHeader}>
              <FiClipboard className={styles.cardHeaderIcon} />
              <h3 className={styles.cardTitle}>Inspection Checklist</h3>
            </div>

            {/* Checklist Items */}
            <div className={styles.checklistItems}>
              {checklistItems.map((item) => (
                <div key={item.id} className={styles.checklistRow}>
                  {/* Item checkbox and name */}
                  <div className={styles.itemInfo}>
                    <input
                      type="checkbox"
                      checked={statuses[item.id] !== null}
                      readOnly
                      className={styles.checkbox}
                    />
                    <span className={styles.itemName}>{item.name}</span>
                  </div>

                  {/* Status toggle buttons */}
                  <div className={styles.statusButtons}>
                    {/* Pass Button */}
                    <button
                      className={`${styles.statusBtn} ${
                        statuses[item.id] === "pass" ? styles.passActive : ""
                      }`}
                      onClick={() => handleStatusChange(item.id, "pass")}
                      title="Pass"
                    >
                      <FiCheck size={14} />
                    </button>

                    {/* Fail/Warning Button */}
                    <button
                      className={`${styles.statusBtn} ${
                        statuses[item.id] === "fail" ||
                        statuses[item.id] === "warning"
                          ? styles.failActive
                          : ""
                      }`}
                      onClick={() => handleStatusChange(item.id, "fail")}
                      title="Fail"
                    >
                      <FiAlertTriangle size={14} />
                    </button>

                    {/* NA Button */}
                    <button
                      className={`${styles.statusBtn} ${styles.naBtn} ${
                        statuses[item.id] === "na" ? styles.naActive : ""
                      }`}
                      onClick={() => handleStatusChange(item.id, "na")}
                      title="Not Applicable"
                    >
                      NA
                    </button>

                    {/* Clipboard icon */}
                    <button className={styles.clipboardBtn} title="Add note">
                      <FiClipboard size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className={styles.progressSection}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className={styles.progressText}>
                {completedCount}/{totalCount} completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
