/**
 * Home Page - InspectPro
 *
 * This is the main landing page that composes all section components.
 * Each section is a separate component for clean separation of concerns.
 *
 * Page structure (top to bottom):
 * 1. Navbar - Navigation bar
 * 2. Hero - Main heading with checklist card
 * 3. TrustedBy - Partner logos
 * 4. WhatIs - Explanation section
 * 5. WhatsIncluded - Detailed interactive checklist
 * 6. Benefits - Feature cards
 * 7. HowItWorks - 3-step process
 * 8. BuiltForTeams - Target audience cards
 * 9. CTABanner - Call to action
 * 10. FAQ - Frequently asked questions
 * 11. Footer - Site footer
 */

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import WhatIs from "@/components/WhatIs/WhatIs";
import WhatsIncluded from "@/components/WhatsIncluded/WhatsIncluded";
import Benefits from "@/components/Benefits/Benefits";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import BuiltForTeams from "@/components/BuiltForTeams/BuiltForTeams";
import CTABanner from "@/components/CTABanner/CTABanner";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <WhatIs />
        <WhatsIncluded />
        <Benefits />
        <HowItWorks />
        <BuiltForTeams />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
