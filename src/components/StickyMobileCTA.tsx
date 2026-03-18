export function StickyMobileCTA({ dict }: { dict: any }) {
  return (
    <div className="t4c-sticky-cta md:hidden" role="complementary" aria-label="Appel rapide mobile">
      <a
        href="tel:+32483020820"
        className="t4c-sticky-cta-btn"
        aria-label={`${dict.nav.call} 0483 02 08 20`}
      >
        <svg
          className="t4c-sticky-cta-icon t4c-animate-ring"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.37a16 16 0 0 0 6.72 6.72l1.24-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.14v-.22z" />
        </svg>
        <span className="t4c-mono">{dict.stickyMobile.call} 0483 02 08 20</span>
      </a>
    </div>
  );
}
