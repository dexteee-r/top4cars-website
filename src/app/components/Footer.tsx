export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="t4c-footer" style={{ padding: '2rem 1.5rem' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
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
            © {currentYear} TOP4CARS Dépannage Auto. Tous droits réservés.
          </span>
        </div>

        {/* Nav links */}
        <nav aria-label="Navigation pied de page">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#services" className="t4c-footer-link">Services</a>
            <a href="#zone" className="t4c-footer-link">Zone</a>
            <a href="#contact" className="t4c-footer-link">Contact</a>
          </div>
        </nav>

        {/* Contact info */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <a
            href="tel:+32483020820"
            className="t4c-footer-link"
            aria-label="Appeler le 0483 02 08 20"
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
    </footer>
  );
}
