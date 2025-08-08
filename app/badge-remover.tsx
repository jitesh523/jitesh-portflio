'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with ssr: false
const HideBadge = dynamic(() => import('./hide-badge'), { ssr: false });

export default function BadgeRemover() {
  return <HideBadge />;
}