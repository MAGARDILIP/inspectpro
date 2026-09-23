/**
 * Root Layout - InspectPro
 *
 * This is the root layout component that wraps every page.
 * It configures:
 * - Inter font from Google Fonts (matches the design's clean typography)
 * - SEO metadata (title, description, Open Graph)
 * - Global CSS import
 */

import { Inter } from "next/font/google";
import "./globals.css";

/* Load Inter font with Latin subset for optimal performance */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* SEO Metadata - appears in browser tab and search results */
export const metadata = {
  title: "InspectPro - Forklift Inspection Checklist",
  description:
    "Streamline your forklift safety inspections with InspectPro. Ready-to-use checklists for consistent inspections, compliance tracking, and equipment safety.",
  keywords: [
    "forklift inspection",
    "safety checklist",
    "equipment inspection",
    "OSHA compliance",
    "warehouse safety",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
