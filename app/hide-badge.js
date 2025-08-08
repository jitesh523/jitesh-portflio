'use client';

import { useEffect } from 'react';

export default function HideBadge() {
  useEffect(() => {
    // Function to remove the Next.js badge
    const removeBadge = () => {
      // Target all possible selectors for the Next.js badge
      const selectors = [
        '[data-nextjs-dev-turbo-badge]',
        '[data-nextjs-refresh]',
        '#__next-build-watcher',
        // The element with 'N' is likely one of these
        'body > div:not([id]):not([class])',
        'body > div[style*="position: fixed"]',
        'body > div[style*="z-index: 2147483647"]',
      ];
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el) {
            el.style.display = 'none';
            el.remove();
          }
        });
      });
    };

    // Run immediately
    removeBadge();
    
    // Also set up an interval to keep checking and removing
    const interval = setInterval(removeBadge, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return null;
}