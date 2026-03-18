import { useEffect, useRef } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('t4c-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
