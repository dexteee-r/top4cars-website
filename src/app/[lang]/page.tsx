import { getDictionary } from '@/dictionaries/getDictionary';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MarqueeBand } from '@/components/MarqueeBand';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { CoverageZone } from '@/components/CoverageZone';
import { CTAFinal } from '@/components/CTAFinal';
import { Footer } from '@/components/Footer';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';

export default async function Page(
  { params }: { params: Promise<{ lang: string }> }
) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'fr' | 'nl' | 'en' | 'de');
  
  return (
    <>
      {/* 1. Navbar */}
      <Navbar dict={dict} lang={lang} />

      {/* 2. Hero */}
      <main id="main">
        <Hero dict={dict} />

        {/* 3. Marquee urgency band */}
        <MarqueeBand dict={dict} />

        {/* Divider */}
        <div className="t4c-divider" />

        {/* 4. Services */}
        <Services dict={dict} />

        {/* Divider */}
        <div className="t4c-divider" />

        {/* 5. How it works */}
        <HowItWorks dict={dict} />

        {/* Divider */}
        <div className="t4c-divider" />

        {/* 6. Coverage zone */}
        <CoverageZone dict={dict} />

        {/* Divider */}
        <div className="t4c-divider" />

        {/* 7. Final CTA */}
        <CTAFinal dict={dict} />
      </main>

      {/* 8. Footer */}
      <Footer dict={dict} />

      {/* 9. Sticky mobile CTA */}
      <StickyMobileCTA dict={dict} />
    </>
  );
}
