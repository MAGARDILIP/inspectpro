/**
 * WhatsIncluded Section - InspectPro
 *
 * Detailed interactive checklist showing what the inspection covers.
 * Two-column layout:
 * - Left: Checklist items with Pass/Fail/NA radio-style buttons
 * - Right: Notes panel with text inputs and maintenance flags
 *
 * Uses "use client" for interactive state management
 */

"use client";

import { useState } from "react";
import { checklistItems } from "@/data/content";
import { FiCheck, FiAlertTriangle, FiFlag } from "react-icons/fi";
import styles from "./WhatsIncluded.module.css";

export default function WhatsIncluded() {
  /* Track status for each item: "pass", "fail", or "na" */
  const [statuses, setStatuses] = useState({
    1: "pass",
    2: "pass",
    3: "fail",
    4: "pass",
    5: "pass",
  });

  /* Track notes for each item */
  const [notes, setNotes] = useState({});

  /* Track maintenance flags for items */
  const [maintenanceFlags, setMaintenanceFlags] = useState({
    3: true, // Brakes has maintenance flag by default
  });

  /**
   * Update the status of a checklist item
   */
  const handleStatusChange = (itemId, status) => {
    setStatuses((prev) => ({ ...prev, [itemId]: status }));
  };

  /**
   * Update the note text for a checklist item
   */
  const handleNoteChange = (itemId, text) => {
    setNotes((prev) => ({ ...prev, [itemId]: text }));
  };

  /**
   * Toggle maintenance flag for an item
   */
  const toggleMaintenance = (itemId) => {
    setMaintenanceFlags((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <section id="whats-included" className={styles.whatsIncluded}>
      <div className={styles.container}>
        {/* Section Heading */}
        <h2 className={styles.sectionTitle}>
          What&apos;s included in the checklist?
        </h2>

        <div className={styles.contentGrid}>
          {/* ===== LEFT: Checklist Table ===== */}
          <div className={styles.checklistPanel}>
            {checklistItems.slice(0, 5).map((item) => (
              <div key={item.id} className={styles.checklistRow}>
                {/* Checkbox + Item Info */}
                <div className={styles.itemInfo}>
                  <input
                    type="checkbox"
                    checked={true}
                    readOnly
                    className={styles.checkbox}
                  />
                  <div className={styles.itemDetails}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemDesc}>{item.description}</span>
                  </div>
                </div>

                {/* Pass/Fail/NA Buttons */}
                <div className={styles.statusButtons}>
                  <button
                    className={`${styles.statusBtn} ${
                      statuses[item.id] === "pass" ? styles.passActive : ""
                    }`}
                    onClick={() => handleStatusChange(item.id, "pass")}
                  >
                    <FiCheck size={12} />
                    <span>Pass</span>
                  </button>
                  <button
                    className={`${styles.statusBtn} ${
                      statuses[item.id] === "fail" ? styles.failActive : ""
                    }`}
                    onClick={() => handleStatusChange(item.id, "fail")}
                  >
                    <FiAlertTriangle size={12} />
                    <span>Fail</span>
                  </button>
                  <button
                    className={`${styles.statusBtn} ${
                      statuses[item.id] === "na" ? styles.naActive : ""
                    }`}
                    onClick={() => handleStatusChange(item.id, "na")}
                  >
                    NA
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ===== RIGHT: Notes Panel ===== */}
          <div className={styles.notesPanel}>
            {/* Note Input 1 */}
            <div className={styles.noteGroup}>
              <label className={styles.noteLabel}>Note</label>
              <input
                type="text"
                placeholder="Add a open note (optional)"
                className={styles.noteInput}
                onChange={(e) => handleNoteChange(1, e.target.value)}
              />
            </div>

            {/* Note Input 2 */}
            <div className={styles.noteGroup}>
              <input
                type="text"
                placeholder="Use note here..."
                className={styles.noteInput}
                onChange={(e) => handleNoteChange(2, e.target.value)}
              />
            </div>

            {/* Note with Maintenance Flag */}
            <div className={styles.noteGroup}>
              <label className={styles.noteLabel}>Note (optional)</label>
              <div className={styles.flaggedNote}>
                <FiAlertTriangle className={styles.flagIcon} />
                <span>Need need maintenance</span>
                <FiFlag className={styles.flagIconRight} />
              </div>
            </div>

            {/* Another Note */}
            <div className={styles.noteGroup}>
              <input
                type="text"
                placeholder="Use note here..."
                className={styles.noteInput}
                onChange={(e) => handleNoteChange(4, e.target.value)}
              />
            </div>

            {/* Note Options */}
            <div className={styles.noteGroup}>
              <label className={styles.noteLabel}>Note options</label>
              <div className={styles.noteOption}>
                <FiAlertTriangle className={styles.flagIcon} />
                <span>Need a maintenance</span>
              </div>
            </div>

            {/* Final Note */}
            <div className={styles.noteGroup}>
              <label className={styles.noteLabel}>Note (optional)</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
