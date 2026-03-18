export function Footer({ dict }: { dict: any }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="t4c-footer" style={{ padding: '2rem 1.5rem' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo + copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <a
            href="#main"
            aria-label="TOP4CARS, retour en haut de page"
            style={{ textDecoration: 'none' }}
          >
            <span style={{
              fontFamily: 'var(--t4c-font-display)',
              fontWeight: 900,
              fontSize: '1.25rem',
              letterSpacing: '0.04em',
              color: 'var(--t4c-text)',
            }}>
              TOP<span style={{ color: 'var(--t4c-accent)' }}>4</span>CARS
            </span>
          </a>
          <span style={{
            fontFamily: 'var(--t4c-font-body)',
            fontSize: '0.78rem',
            color: 'var(--t4c-muted)',
          }}>
            © {currentYear} TOP4CARS. {dict.footer.rights}
          </span>
        </div>

        {/* Nav links & Contact */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <nav aria-label="Navigation pied de page">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
              <a href="#services" className="t4c-footer-link">{dict.nav.services}</a>
              <a href="#zone" className="t4c-footer-link">{dict.nav.zone}</a>
              <a href="#contact" className="t4c-footer-link">{dict.nav.contact}</a>
            </div>
          </nav>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="tel:+32483020820"
              className="t4c-footer-link"
              aria-label={`${dict.nav.call} 0483 02 08 20`}
              style={{ fontWeight: 600, color: 'var(--t4c-phone)' }}
            >
              0483 02 08 20
            </a>
            <span style={{ color: 'var(--t4c-border)', userSelect: 'none' }}>|</span>
            <a
              href="mailto:e-a-motorgroup@outlook.com"
              className="t4c-footer-link"
            >
              e-a-motorgroup@outlook.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
