"use client";
import { useScrollReveal } from '../hooks/useScrollReveal';

function PhoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.37a16 16 0 0 0 6.72 6.72l1.24-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.14v-.22z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const steps = [
  {
    id: '01',
    icon: <PhoneIcon />,
    title: 'Appelez-nous',
    desc: "Un seul numéro à retenir : 0483 02 08 20. Disponible jour et nuit, week-ends et jours fériés inclus.",
    phone: true,
  },
  {
    id: '02',
    icon: <TruckIcon />,
    title: 'On arrive',
    desc: "Notre dépanneuse la plus proche est envoyée immédiatement. Temps d'intervention moyen inférieur à 45 minutes.",
    phone: false,
  },
  {
    id: '03',
    icon: <CheckIcon />,
    title: 'Problème réglé',
    desc: "Réparation sur place ou remorquage vers le garage de votre choix. Vous ne restez jamais en rade.",
    phone: false,
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  const delay = (index + 1) as 1 | 2 | 3;

  return (
    <div
      ref={ref}
      className={`t4c-reveal t4c-reveal-delay-${delay}`}
      style={{ flex: '1 1 260px', minWidth: '220px', maxWidth: '360px' }}
    >
      <div
        style={{
          background: 'var(--t4c-card)',
          border: '1px solid var(--t4c-border)',
          borderRadius: '20px',
          padding: '2.25rem 2rem',
          position: 'relative',
          height: '100%',
        }}
      >
        {/* Step number ghost */}
        <div
          className="t4c-step-number t4c-mono"
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1.25rem',
            fontSize: '5rem',
          }}
        >
          {step.id}
        </div>

        {/* Icon */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'var(--t4c-accent-dim)',
            border: '1px solid var(--t4c-border-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--t4c-accent)',
            marginBottom: '1.5rem',
          }}
        >
          {step.icon}
        </div>

        {/* Step label */}
        <div style={{
          fontFamily: 'var(--t4c-font-body)',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          color: 'var(--t4c-accent)',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          Étape {step.id}
        </div>

        <h3 style={{
          fontFamily: 'var(--t4c-font-display)',
          fontWeight: 800,
          fontSize: '1.625rem',
          letterSpacing: '0.02em',
          color: 'var(--t4c-text)',
          marginBottom: '0.875rem',
          textTransform: 'uppercase',
          lineHeight: 1.1,
        }}>
          {step.title}
        </h3>
        <p style={{
          fontFamily: 'var(--t4c-font-body)',
          fontSize: '0.9rem',
          lineHeight: 1.7,
          color: 'var(--t4c-muted)',
          margin: 0,
        }}>
          {step.desc}
        </p>

        {/* Phone highlight for step 1 */}
        {step.phone && (
          <a
            href="tel:+32483020820"
            className="t4c-mono"
            aria-label="Appeler le 0483 02 08 20"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              fontFamily: 'var(--t4c-font-display)',
              fontWeight: 900,
              fontSize: '1.25rem',
              color: 'var(--t4c-phone)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
          >
            0483 02 08 20
          </a>
        )}
      </div>
    </div>
  );
}

export function HowItWorks({ dict }: { dict: any }) {
  const headerRef = useScrollReveal<HTMLDivElement>();

  const translatedSteps = [
    {
      id: '01',
      icon: <PhoneIcon />,
      title: dict.howItWorks.steps.step1.title,
      desc: dict.howItWorks.steps.step1.desc,
      phone: true,
    },
    {
      id: '02',
      icon: <TruckIcon />,
      title: dict.howItWorks.steps.step2.title,
      desc: dict.howItWorks.steps.step2.desc,
      phone: false,
    },
    {
      id: '03',
      icon: <CheckIcon />,
      title: dict.howItWorks.steps.step3.title,
      desc: dict.howItWorks.steps.step3.desc,
      phone: false,
    },
  ];

  return (
    <section
      id="comment-ca-marche"
      style={{
        background: 'var(--t4c-surface)',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div ref={headerRef} className="t4c-reveal" style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <span className="t4c-section-label">{dict.howItWorks.badge}</span>
          <h2 style={{
            fontFamily: 'var(--t4c-font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            letterSpacing: '-0.01em',
            color: 'var(--t4c-text)',
            textTransform: 'uppercase',
            marginTop: '0.5rem',
          }}>
            {dict.howItWorks.title1}
            <span style={{ color: 'var(--t4c-accent)' }}>{dict.howItWorks.title2}</span>
          </h2>
        </div>

        {/* Steps */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.25rem',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
          {translatedSteps.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

