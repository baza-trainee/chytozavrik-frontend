import JSConfetti from 'js-confetti';
import { useEffect, useRef } from 'react';

export default function useConfetti({ className }: { className: string }) {
  const ref = useRef(null);
  const canvas = <canvas className={className} ref={ref} />;

  useEffect(() => {
    if (!ref.current) return;

    const confetti = new JSConfetti({ canvas: ref.current });
    confetti.addConfetti({
      confettiColors: ['#EA5858', '#F2B441', '#52C974', '#7791FA'],
    });

    return () => confetti.clearCanvas();
  }, [ref]);

  return canvas;
}
