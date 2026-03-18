import { useEffect, useRef } from 'react';

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.37a16 16 0 0 0 6.72 6.72l1.24-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.14v-.22z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

const metrics = [
  { value: '24/7', label: 'Disponible' },
  { value: '<45min', label: 'Intervention' },
  { value: 'BE', label: 'Toute la Belgique' },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Stagger reveal children that have t4c-reveal class
    const reveals = el.querySelectorAll('.t4c-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('t4c-visible');
          }
        });
      },
      { threshold: 0.05 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="main"
      ref={heroRef}
      className="t4c-hero-grid"
      style={{
        minHeight: '100dvh',
        background: 'var(--t4c-bg)',
        display: 'flex',
        alignItems: 'center',
        padding: 'calc(var(--t4c-navbar-h) + 3rem) 1.5rem 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '15%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,69,0,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-5%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,183,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
        <div style={{ maxWidth: '740px' }}>

          {/* Badge */}
          <div className="t4c-reveal" style={{ marginBottom: '1.75rem' }}>
            <span className="t4c-badge">
              <span className="t4c-badge-dot" />
              24H/24 — 7J/7 — Jours fériés inclus
            </span>
          </div>

          {/* H1 */}
          <h1
            className="t4c-reveal t4c-reveal-delay-1"
            style={{
              fontFamily: 'var(--t4c-font-display)',
              fontWeight: 900,
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: 1.0,
              color: 'var(--t4c-text)',
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ color: 'var(--t4c-accent)', display: 'block' }}>Dépannage auto</span>
            <span style={{ display: 'block' }}>partout en</span>
            <span style={{ display: 'block' }}>Belgique</span>
          </h1>

          {/* Subtitle */}
          <p
            className="t4c-reveal t4c-reveal-delay-2"
            style={{
              fontFamily: 'var(--t4c-font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'var(--t4c-muted)',
              lineHeight: 1.7,
              maxWidth: '580px',
              marginBottom: '2rem',
            }}
          >
            En panne sur la route ? TOP4CARS intervient rapidement pour le remorquage, les pannes de batterie, les accidents et l'ouverture de portières. Prix défiant toute concurrence.
          </p>

          {/* CTAs */}
          <div className="t4c-reveal t4c-reveal-delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '2.5rem' }}>
            <a
              href="tel:+32483020820"
              className="t4c-btn-primary"
              aria-label="Appeler TOP4CARS au 0483 02 08 20"
            >
              <PhoneIcon />
              Appeler maintenant
            </a>
            <a href="#services" className="t4c-btn-secondary">
              Nos services
              <ChevronDownIcon />
            </a>
          </div>

          {/* Big phone number */}
          <div className="t4c-reveal t4c-reveal-delay-3" style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontFamily: 'var(--t4c-font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', color: 'var(--t4c-muted)', textTransform: 'uppercase', marginBottom: '0.375rem' }}>
              Numéro d'urgence
            </div>
            <a
              href="tel:+32483020820"
              className="t4c-phone-big t4c-mono"
              aria-label="Appeler le 0483 02 08 20"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
            >
              0483 02 08 20
            </a>
          </div>

          {/* Metrics */}
          <div
            className="t4c-reveal t4c-reveal-delay-4"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
          >
            {metrics.map((m) => (
              <div key={m.value} className="t4c-metric">
                <span className="t4c-metric-value t4c-mono">{m.value}</span>
                <span className="t4c-metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
