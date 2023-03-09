import { useCallback, useLayoutEffect, useRef } from 'react';

import type { ReactElement } from 'react';

import clsx from 'clsx';

import useBreakpoints from '@hook/useBreakpoints';
import useFPS from '@hook/useFPS';

import ParticleJS from '@class/ParticleJS';

import { deepCopy } from '@helper/object';

import particleJSConfig from '@config/particleJSConfig';

interface IProps {
  className?: string;
}

const ParticleAnimation = ({ className }: IProps): ReactElement => {
  const { greaterThan } = useBreakpoints();

  const particleJS = useRef<ParticleJS | null>();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useFPS(() => {
    if (particleJS.current) particleJS.current.tick();
  });

  const containerRef = useCallback(
    (container: HTMLDivElement) => {
      const canvas = canvasRef.current;

      if (!container || !canvas) return;

      // Updating canvas size
      let _particleJSConfig = deepCopy(particleJSConfig);

      canvas.style.width = '100%';
      canvas.style.height = '100%';

      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      if (
        greaterThan('lg') &&
        _particleJSConfig.particle?.amount !== undefined &&
        particleJSConfig.particle?.amount !== undefined
      ) {
        _particleJSConfig.particle.amount =
          particleJSConfig.particle.amount * 1.3;
      }

      particleJS.current = new ParticleJS(canvas, particleJSConfig);

      return () => {
        particleJS.current?.clear();
      };
    },
    [canvasRef]
  );

  return (
    <div className={clsx(['rounded-full', className])} ref={containerRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ParticleAnimation;
