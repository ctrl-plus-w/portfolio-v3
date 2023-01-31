import { useEffect, useRef } from 'react';

import type { ReactElement } from 'react';

import clsx from 'clsx';

import ParticleJS from '@class/ParticleJS';

import particleJSConfig from '@config/particleJSConfig';
import useBreakpoints from '@hook/useBreakpoints';

interface IProps {
  className?: string;
}

const ParticleAnimation = ({ className }: IProps): ReactElement => {
  const { greaterThan } = useBreakpoints();

  const particleJS = useRef<ParticleJS | null>();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const frameRef = useRef<number | null>(null);

  const t = useRef<number>(Date.now());

  const render = () => {
    const fpsInterval = 1000 / particleJSConfig.fps;

    frameRef.current = window.requestAnimationFrame(render);

    const now = Date.now();
    const elapsed = now - t.current;

    if (elapsed < fpsInterval || canvasRef.current == null) return;

    t.current = now - (elapsed % fpsInterval);
    particleJS.current?.tick();
  };

  useEffect(() => {
    // Updating canvas size
    if (canvasRef.current && containerRef.current) {
      canvasRef.current.style.width = '100%';
      canvasRef.current.style.height = '100%';

      canvasRef.current.width =
        containerRef.current.getBoundingClientRect().width;
      canvasRef.current.height =
        containerRef.current.getBoundingClientRect().height;

      if (
        greaterThan('lg') &&
        particleJSConfig.particle?.amount !== undefined
      ) {
        particleJSConfig.particle.amount *= 1.3;
      }

      particleJS.current = new ParticleJS(canvasRef.current, particleJSConfig);
    }

    frameRef.current = window.requestAnimationFrame(render);

    return () => {
      particleJS.current?.clear();

      if (frameRef.current != null)
        window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className={clsx(['rounded-full', className])} ref={containerRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ParticleAnimation;
