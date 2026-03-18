"use client";
import { useScrollReveal } from '../hooks/useScrollReveal';

// SVG Icons
function WrenchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
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

function BatteryIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="6" width="18" height="12" rx="2" />
      <line x1="23" y1="13" x2="23" y2="11" />
      <polyline points="7 12 10 9 13 12 16 9" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
    </svg>
  );
}

function LockOpenIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  );
}

export function Services({ dict }: { dict: any }) {
  const headerRef = useScrollReveal<HTMLDivElement>();

  const services = [
    {
      id: 'depannage',
      icon: <WrenchIcon />,
      title: dict.services.items.depannage.title,
      desc: dict.services.items.depannage.desc,
      gridClass: 't4c-bento-wide',
      num: '01'
    },
    {
      id: 'remorquage',
      icon: <TruckIcon />,
      title: dict.services.items.remorquage.title,
      desc: dict.services.items.remorquage.desc,
      gridClass: 't4c-bento-normal',
      num: '02'
    },
    {
      id: 'batterie',
      icon: <BatteryIcon />,
      title: dict.services.items.batterie.title,
      desc: dict.services.items.batterie.desc,
      gridClass: 't4c-bento-normal',
      num: '03'
    },
    {
      id: 'accident',
      icon: <WarningIcon />,
      title: dict.services.items.accident.title,
      desc: dict.services.items.accident.desc,
      gridClass: 't4c-bento-medium',
      num: '04'
    },
    {
      id: 'portiere',
      icon: <LockOpenIcon />,
      title: dict.services.items.portiere.title,
      desc: dict.services.items.portiere.desc,
      gridClass: 't4c-bento-medium',
      num: '05'
    },
  ];

  return (
    <section
      id="services"
      style={{
        background: 'var(--t4c-bg)',
        padding: '8rem 1.5rem',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section header */}
        <div ref={headerRef} className="t4c-reveal" style={{ marginBottom: '4rem', textAlign: 'left' }}>
          <span className="t4c-section-label">{dict.services.badge}</span>
          <h2 style={{
            fontFamily: 'var(--t4c-font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            color: 'var(--t4c-text)',
            textTransform: 'uppercase',
            marginTop: '0.5rem',
            marginBottom: '1rem',
            lineHeight: 1,
          }}>
            {dict.services.title1} <br />
            <span style={{ color: 'var(--t4c-accent)' }}>{dict.services.title2}</span>
          </h2>
          <p style={{ fontFamily: 'var(--t4c-font-body)', color: 'var(--t4c-muted)', fontSize: '1.125rem', maxWidth: '540px' }}>
            {dict.services.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="t4c-services-bento">
          {services.map((service, i) => {
            const ref = useScrollReveal<HTMLDivElement>();
            return (
              <div
                key={service.id}
                ref={ref}
                className={`t4c-reveal t4c-reveal-delay-${(i % 3) + 1} ${service.gridClass}`}
              >
                <article className="t4c-service-card-bento" aria-label={service.title}>
                  
                  <div className="t4c-service-icon-bento">
                    {service.icon}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--t4c-font-display)',
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    color: 'var(--t4c-text)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{
                    fontFamily: 'var(--t4c-font-body)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--t4c-muted)',
                    margin: 0,
                  }}>
                    {service.desc}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

