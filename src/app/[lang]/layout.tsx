import Script from "next/script";
import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "../globals.css";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  
  // Titres et descriptions selon la langue
  const meta = {
    fr: {
      title: "TOP 4 CARS | Dépannage Auto & Remorquage 24/7",
      description: "Service de dépannage auto et remorquage rapide en Belgique. Intervention 24h/24 et 7j/7 pour panne, batterie, ou accident."
    },
    nl: {
      title: "TOP 4 CARS | Autotakel & Takeldienst 24/7",
      description: "Snelle takeldienst en pechverhelping in België. 24/7 beschikbaar voor pech, batterij, of ongeval."
    },
    en: {
      title: "TOP 4 CARS | 24/7 Car Towing & Breakdown Service",
      description: "Fast car towing and breakdown recovery service in Belgium. Available 24/7 for breakdowns, flat batteries, or accidents."
    },
    de: {
      title: "TOP 4 CARS | Abschleppdienst & Pannenhilfe 24/7",
      description: "Schneller Abschleppdienst und Pannenhilfe in Belgien. 24/7 verfügbar bei Pannen, leeren Batterien oder Unfällen."
    }
  };

  const selectedMeta = meta[lang as keyof typeof meta] || meta.fr;

  return {
    title: selectedMeta.title,
    description: selectedMeta.description,
    alternates: {
      canonical: `https://top4cars.be/${lang}`,
      languages: {
        'fr': '/fr',
        'nl': '/nl',
        'en': '/en',
        'de': '/de',
      },
    },
    openGraph: {
      title: selectedMeta.title,
      description: selectedMeta.description,
      url: `https://top4cars.be/${lang}`,
      siteName: 'TOP 4 CARS',
      locale: lang,
      type: 'website',
      images: [
        {
          url: '/hero-truck.png',
          width: 1200,
          height: 630,
          alt: 'TOP 4 CARS Dépannage Auto',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: selectedMeta.title,
      description: selectedMeta.description,
      images: ['/hero-truck.png'],
    },
  };
}

export default async function RootLayout(
  {
    children,
    params,
  }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }>
) {
  const { lang } = await params;

  return (
    <html lang={lang} style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <head>
        {/* Preload fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
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
            {lang === 'nl' ? 'Naar hoofdinhoud' : lang === 'en' ? 'Skip to content' : lang === 'de' ? 'Zum Hauptinhalt' : 'Aller au contenu principal'}
          </a>
          
          {children}
        </div>
        <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
