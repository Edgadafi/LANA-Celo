"use client";

import {
  NavbarLANA,
  HeroLANA,
  SecuritySection,
  StepsSection,
  FAQSection,
  FooterLANA,
} from "@/components/landing-lana";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NavbarLANA />
      <HeroLANA />
      <SecuritySection />
      <StepsSection />
      <FAQSection />
      <FooterLANA />
    </main>
  );
}
