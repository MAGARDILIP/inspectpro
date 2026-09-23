/**
 * Content Data - InspectPro
 *
 * All text content and data is centralized here.
 * This follows the separation of concerns principle:
 * - Components handle HOW things look
 * - This file handles WHAT content is displayed
 *
 * Benefits:
 * - Easy to update text without touching component code
 * - Could be replaced with a CMS or API in the future
 * - Makes the codebase more maintainable
 */

/* ----- Navigation Links ----- */
export const navLinks = [
  { label: "Products", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Pricing", href: "#" },
];

/* ----- Hero Section ----- */
export const heroContent = {
  badge: "FORKLIFT SAFETY",
  title: "Forklift Inspection Checklist",
  description:
    "This checklist helps you teams perform consistent inspections and identify issues before before their equipment is used.",
  primaryCTA: "Get the Checklist",
  secondaryCTA: "See What's Included",
  helperText: "Ready-to-use checklist for daily forklift inspections",
};

/* ----- Checklist Items (used in Hero card & What's Included) ----- */
export const checklistItems = [
  {
    id: 1,
    name: "Forks and mast",
    description: "Description or inspection of Forks and mast.",
    defaultStatus: "pass",
  },
  {
    id: 2,
    name: "Tires and wheels",
    description: "Description or inspection of Tires and wheels.",
    defaultStatus: "pass",
  },
  {
    id: 3,
    name: "Brakes",
    description: "Description or inspection and area of brakes.",
    defaultStatus: "fail",
  },
  {
    id: 4,
    name: "Steering",
    description: "Description or steering materials and steering.",
    defaultStatus: "pass",
  },
  {
    id: 5,
    name: "Warning devices",
    description: "Description of inspection of warning devices.",
    defaultStatus: "warning",
  },
  {
    id: 6,
    name: "Lights",
    description: "Description of inspection of lights.",
    defaultStatus: "pass",
  },
];

/* ----- Trusted By Partners ----- */
export const partners = [
  "Apex Logistics",
  "Sterling Manufacturing",
  "BuildRight Construction",
  "Global Warehousing Solutions",
  "Prime Distribution",
];

/* ----- What Is Section ----- */
export const whatIsContent = {
  title: "What is a Forklift Inspection Checklist?",
  paragraphs: [
    "Forklift Inspection Checklist lists teams perform post-start safety on and monill inspection are safety and compliance.",
    "Forklift Inspection set benefits concertt restore safety and compliance our simplitor equipment.",
  ],
  callout:
    "Key importances are octenns ls consince heing regulatory requirements are cost to regulatory requirements.",
};

/* ----- Benefits Section ----- */
export const benefits = [
  {
    title: "Standardize inspections",
    description:
      "Standardize inspections consistent, inspections, endorsements, and equipment.",
    icon: "clipboard",
  },
  {
    title: "Identify issues early",
    description:
      "Identify issues early for resource and consistent, attention expanding stanbites.",
    icon: "search",
  },
  {
    title: "Keep inspection records organized",
    description:
      "Keep inspection records organized, and inspection records organized.",
    icon: "folder",
  },
  {
    title: "Give teams a simple process to follow",
    description:
      "Give teams a simple process nancocort procis process to follow.",
    icon: "users",
  },
];

/* ----- How It Works Steps ----- */
export const howItWorks = [
  {
    step: "01",
    title: "Choose your checklist",
    description:
      "Choose your checklist to oensost 01 — Choose your checklist.",
    icon: "checklist",
  },
  {
    step: "02",
    title: "Complete the inspection",
    description:
      "Complete the inspector the inspection and complete the inspection.",
    icon: "inspection",
  },
  {
    step: "03",
    title: "Record and act on findings",
    description:
      "Record the process and consent and essent — record and act on findings.",
    icon: "record",
  },
];

/* ----- Built For Teams Section ----- */
export const teamTypes = [
  {
    title: "Warehouse operations",
    description:
      "Warehouse operations in warehouse operations and low-shortest starations in warehouse operations.",
    icon: "warehouse",
  },
  {
    title: "Construction sites",
    description:
      "Construction sites exyort and construction sites in an manufacturing facilities.",
    icon: "construction",
  },
  {
    title: "Manufacturing facilities",
    description:
      "Manufacturing facilities are connveteshows and solutions for manufacturing facilities.",
    icon: "factory",
  },
];

/* ----- CTA Section ----- */
export const ctaContent = {
  title: "Ready to simplify your forklift inspections?",
  description:
    "Start with a structured checklist your team can use consistently.",
  primaryCTA: "Get the Checklist",
  secondaryCTA: "Talk to our team",
};

/* ----- FAQ Items ----- */
export const faqItems = [
  {
    question: "What should be checked during a forklift inspection?",
    answer:
      "A forklift inspection should include checking the forks and mast, tires and wheels, brakes, steering, warning devices, lights, fluid levels, battery condition, seatbelt, and overall structural integrity. Our checklist covers all these areas systematically.",
  },
  {
    question: "How often should a forklift be inspected?",
    answer:
      "Forklifts should be inspected before each shift or at the start of each day they are used. OSHA requires that forklifts be examined before being placed in service. Our checklist is designed for daily inspections.",
  },
  {
    question: "Can this checklist be used for daily inspections?",
    answer:
      "Yes, this checklist is specifically designed for daily forklift inspections. It covers all the essential safety checks required by OSHA and industry best practices for pre-shift inspections.",
  },
  {
    question: "What should I do if I find a defect?",
    answer:
      "If a defect is found during inspection, the forklift should be immediately taken out of service and tagged as unsafe. Report the issue to your supervisor, document it in the checklist notes, and do not operate the forklift until repairs are completed.",
  },
  {
    question: "Can I customize the checklist?",
    answer:
      "Yes, InspectPro allows you to customize your checklist to match your specific equipment and workplace requirements. You can add, remove, or modify inspection items to suit your needs.",
  },
];

/* ----- Footer Links ----- */
export const footerLinks = {
  product: [
    { label: "Features", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Integrations", href: "#" },
  ],
  solutions: [
    { label: "by Industry", href: "#" },
    { label: "by Function", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "API", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
};
