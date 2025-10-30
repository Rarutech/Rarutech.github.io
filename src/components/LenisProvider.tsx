import { PropsWithChildren, useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return children as any;
}


