'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initAmplitude, track } from '@/lib/amplitude';

export default function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initAmplitude();
  }, []);

  useEffect(() => {
    track('Page Viewed', {
      path: pathname,
      url: pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ''),
    });
  }, [pathname, searchParams]);

  return <>{children}</>;
}
