"use client";
import { useState, useEffect } from 'react';

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg className="t4c-animate-ring" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.37a16 16 0 0 0 6.72 6.72l1.24-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.14v-.22z" />
    </svg>
  );
}

export function Navbar({ dict, lang }: { dict: any, lang: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: dict.nav.services, href: '#services' },
    { label: dict.nav.howItWorks, href: '#comment-ca-marche' },
    { label: dict.nav.zone, href: '#zone' },
    { label: dict.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`t4c-navbar ${isScrolled ? 't4c-navbar--solid' : 't4c-navbar--transparent'}`}
        aria-label="Navigation principale"
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', height: '100%', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>

          {/* Logo */}
          <a
            href="#main"
            aria-label="TOP4CARS — Dépannage Auto, retour en haut"
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}
          >
            <span style={{ fontFamily: 'var(--t4c-font-display)', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '0.04em', color: 'var(--t4c-text)' }}>
              TOP<span style={{ color: 'var(--t4c-accent)' }}>4</span>CARS
            </span>
            <span style={{ fontFamily: 'var(--t4c-font-body)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--t4c-muted)', textTransform: 'uppercase' }}>
              Dépannage Auto
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2rem', flex: 1, justifyContent: 'center' }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="t4c-nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            
            {/* Language Switcher */}
            <select
              aria-label="Changer de langue"
              style={{
                background: 'transparent',
                color: 'var(--t4c-text)',
                border: '1px solid var(--t4c-border)',
                borderRadius: '8px',
                padding: '0.4rem 0.5rem',
                fontFamily: 'var(--t4c-font-body)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                outline: 'none',
                textTransform: 'uppercase',
              }}
              onChange={(e) => {
                const newLang = e.target.value;
                const currentPath = window.location.pathname;
                const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${newLang}`);
                window.location.href = newPath + window.location.hash;
              }}
              defaultValue={lang}
            >
              <option value="fr">FR</option>
              <option value="nl">NL</option>
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>

            <a
              href="tel:+32483020820"
              className="t4c-nav-call"
              aria-label={`${dict.nav.call} TOP4CARS au 0483 02 08 20`}
            >
              <PhoneIcon size={16} />
              <span className="hidden md:inline">{dict.nav.call}</span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              className={`t4c-hamburger md:hidden ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              aria-controls="t4c-mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        id="t4c-mobile-menu"
        className={`t4c-mobile-menu ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation mobile"
      >
        {/* Close button */}
        <button
          onClick={closeMenu}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.5rem',
            background: 'transparent',
            border: '1px solid var(--t4c-border)',
            borderRadius: '10px',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--t4c-text)',
          }}
          aria-label="Fermer le menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="t4c-mobile-nav-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <div style={{ height: '1px', width: '80px', background: 'var(--t4c-border-accent)', margin: '0.5rem 0' }} />

        <a
          href="tel:+32483020820"
          className="t4c-mono"
          aria-label="Appeler le 0483 02 08 20"
          style={{
            fontFamily: 'var(--t4c-font-display)',
            fontWeight: 900,
            fontSize: '2rem',
            color: 'var(--t4c-phone)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
          onClick={closeMenu}
        >
          0483 02 08 20
        </a>
      </div>
    </>
  );
}

