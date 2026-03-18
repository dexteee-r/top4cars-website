import { useScrollReveal } from '../hooks/useScrollReveal';

function PhoneIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.37a16 16 0 0 0 6.72 6.72l1.24-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.14v-.22z" />
    </svg>
  );
}

export function CTAFinal() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="t4c-cta-section"
      style={{ padding: '7rem 1.5rem' }}
    >
      <div
        ref={ref}
        className="t4c-reveal"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Phone icon */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: 'var(--t4c-accent-dim)',
            border: '1px solid var(--t4c-border-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--t4c-accent)',
          }}
          aria-hidden="true"
        >
          <PhoneIcon size={36} />
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'var(--t4c-font-display)',
          fontWeight: 900,
          fontSize: 'clamp(1.875rem, 5vw, 3.25rem)',
          letterSpacing: '-0.01em',
          color: 'var(--t4c-text)',
          textTransform: 'uppercase',
          lineHeight: 1.1,
          margin: 0,
        }}>
          En panne ? Appelez-nous maintenant.
        </h2>

        {/* BIG phone number */}
        <a
          href="tel:+32483020820"
          className="t4c-phone-big t4c-mono"
          aria-label="Appeler TOP4CARS au 0483 02 08 20"
          style={{ fontSize: 'clamp(2.75rem, 10vw, 6rem)' }}
        >
          0483 02 08 20
        </a>

        {/* Availability */}
        <p style={{
          fontFamily: 'var(--t4c-font-body)',
          fontSize: '1rem',
          color: 'var(--t4c-muted)',
          margin: 0,
        }}>
          Disponible 24h/24 — 7j/7 — Jours fériés inclus
        </p>

        {/* CTA button */}
        <a
          href="tel:+32483020820"
          className="t4c-btn-primary"
          aria-label="Appeler TOP4CARS maintenant au 0483 02 08 20"
          style={{ fontSize: '1.0625rem', padding: '1rem 2rem', marginTop: '0.5rem' }}
        >
          <PhoneIcon size={20} />
          Appeler maintenant
        </a>

        {/* Email fallback */}
        <p style={{ fontFamily: 'var(--t4c-font-body)', fontSize: '0.875rem', color: 'var(--t4c-muted)', margin: 0 }}>
          ou par email :{' '}
          <a
            href="mailto:e-a-motorgroup@outlook.com"
            style={{ color: 'var(--t4c-muted)', textDecoration: 'underline', textUnderlineOffset: '3px', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--t4c-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--t4c-muted)')}
          >
            e-a-motorgroup@outlook.com
          </a>
        </p>
      </div>
    </section>
  );
}
