'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ syncTouch: true, autoRaf: true }}>
      {children}
    </ReactLenis>
  );
}
