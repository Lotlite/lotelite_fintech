import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      ...options
    });

    if (element) {
      element.classList.add('opacity-0', 'translate-y-10');
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return elementRef;
}; 