import { useEffect, useRef } from 'react';

import type { ReactElement } from 'react';

import clsx from 'clsx';

import useBreakpoints from '@hook/useBreakpoints';

import ParticleJS from '@class/ParticleJS';

import { deepCopy } from '@helper/object';

import particleJSConfig from '@config/particleJSConfig';

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
    const updateCanvasSize = (
      container: HTMLDivElement,
      canvas: HTMLCanvasElement
		) => {
			const {width,height} = container.getBoundingClientRect()

      canvas.width = width;
      canvas.height = height;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    // Updating canvas size
    if (canvasRef.current && containerRef.current) {
      let _particleJSConfig = deepCopy(particleJSConfig);

      updateCanvasSize(containerRef.current, canvasRef.current);

      if (
        greaterThan('lg') &&
        _particleJSConfig.particle?.amount !== undefined &&
        particleJSConfig.particle?.amount !== undefined
      ) {
        _particleJSConfig.particle.amount =
          particleJSConfig.particle.amount * 1.3;
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
    <div className={clsx(['rounded-full bg-purple-500', className])} ref={containerRef}>
      <canvas ref={canvasRef} className="bg-red-500 bg-opacity-80"></canvas>
    </div>
  );
};

export default ParticleAnimation;