import './top4cars.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBand } from './components/MarqueeBand';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { CoverageZone } from './components/CoverageZone';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export default function App() {
  return (
    <div
      id="t4c-root"
      className="t4c-has-sticky-cta"
      style={{
        background: 'var(--t4c-bg)',
        color: 'var(--t4c-text)',
        fontFamily: 'var(--t4c-font-body)',
        minHeight: '100dvh',
      }}
    >
      {/* Skip link */}
      <a href="#main" className="t4c-skip-link">
        Aller au contenu principal
      </a>

      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <main>
        <Hero />

        {/* 3. Marquee urgency band */}
        <MarqueeBand />

        {/* Divider */}
        <div className="t4c-divider" />

        {/* 4. Services */}
        <Services />

        {/* Divider */}
        <div className="t4c-divider" />

        {/* 5. How it works */}
        <HowItWorks />

        {/* Divider */}
        <div className="t4c-divider" />

        {/* 6. Coverage zone */}
        <CoverageZone />

        {/* Divider */}
        <div className="t4c-divider" />

        {/* 7. Final CTA */}
        <CTAFinal />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Sticky mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
}