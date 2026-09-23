# 🔍 InspectPro — Forklift Inspection Checklist

A modern, responsive landing page for **InspectPro**, a forklift inspection checklist platform that helps teams perform consistent inspections and identify safety issues before equipment is used.

> Built with **Next.js 15**, **React 19**, **CSS Modules**, and **Tailwind CSS**.

---

## 📸 Preview

### Desktop View

![InspectPro Desktop View](docs/images/desktop_view.png)

### Mobile View

<p align="center">
  <img src="docs/images/mobile_view.png" alt="InspectPro Mobile View" width="360" />
</p>

---

## ✨ Features

- **Interactive Checklist Card** — Hero section with Pass/Fail/NA toggle buttons and real-time progress tracking
- **Split Hero Layout** — Light left side with dark text, dark teal geometric block on the right
- **11 Sections** — Navbar, Hero, Trusted By, What Is, What's Included, Benefits, How It Works, Built For Teams, FAQ, CTA Banner, Footer
- **Fully Responsive** — Mobile-first design with hamburger menu and accordion-style footer
- **Centralized Content** — All text content managed in a single `content.js` data file
- **CSS Modules** — Scoped, maintainable styles with no class name conflicts
- **SEO Optimized** — Proper heading hierarchy, meta descriptions, and semantic HTML

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI component library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| CSS Modules | Scoped component styles |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library (Feather Icons) |
| [Inter Font](https://fonts.google.com/specimen/Inter) | Modern, clean typography |

---

## 📁 Project Structure

```
inspectpro/
├── public/                    # Static assets
├── docs/
│   └── images/                # README screenshots
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with Inter font
│   │   ├── page.js            # Main page composing all sections
│   │   └── globals.css        # Design system & brand tokens
│   ├── components/
│   │   ├── Navbar/            # Sticky navbar with mobile hamburger
│   │   ├── Hero/              # Split-background hero with checklist
│   │   ├── TrustedBy/         # Partner logos strip
│   │   ├── WhatIs/            # Explanation + callout box
│   │   ├── WhatsIncluded/     # Interactive checklist table + notes
│   │   ├── Benefits/          # 4-column feature cards
│   │   ├── HowItWorks/        # 3-step process section
│   │   ├── BuiltForTeams/     # Target audience cards
│   │   ├── FAQ/               # Accordion FAQ section
│   │   ├── CTABanner/         # Full-width call to action
│   │   └── Footer/            # Dark footer with link columns
│   └── data/
│       └── content.js         # Centralized text content & data
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/MAGARDILIP/inspectpro.git

# Navigate to the project
cd inspectpro

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Design System

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| 🟦 Blue | `#2563EB` | Primary buttons, CTAs |
| 🟩 Teal | `#0D7377` | Icons, accents, active states |
| 🟫 Navy | `#0F2B3C` | Dark backgrounds (Hero, CTA, Footer) |
| ⬜ Light | `#F8F9FA` | Section backgrounds |

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: 800 weight, tight line-height
- **Body**: 400–500 weight, 1.6–1.7 line-height

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| `> 768px` | Full desktop layout with side-by-side columns |
| `≤ 768px` | Stacked mobile layout with hamburger menu |

---

## 📄 License

This project is built as a demonstration for **Agnotic**.

---

<p align="center">
  Made with ❤️ by <strong>Dilip Magar</strong>
</p>
