import { useEffect } from 'react';

let observer = null;

function getObserver() {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.06, rootMargin: '0px 0px -4% 0px' }
  );

  return observer;
}

export function observeReveals(root = document) {
  if (typeof window === 'undefined') return;

  const nodes = root.querySelectorAll('.reveal:not(.is-visible)');
  if (!nodes.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = getObserver();
  nodes.forEach((el) => io.observe(el));
}

export function useReveal(containerRef) {
  useEffect(() => {
    const root = containerRef?.current;
    if (!root) return;

    observeReveals(root);

    return () => {
      root.querySelectorAll('.reveal').forEach((el) => {
        observer?.unobserve(el);
      });
    };
  }, [containerRef]);
}
