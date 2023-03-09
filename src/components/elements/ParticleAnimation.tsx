import { useCallback, useRef } from 'react';

import type { ReactElement } from 'react';

import useBreakpoints from '@hook/useBreakpoints';
import useFPS from '@hook/useFPS';

import ParticleJS from '@class/ParticleJS';

import { deepCopy } from '@helper/object';
import { px } from '@helper/react';

import particleJSConfig from '@config/particleJSConfig';

const ParticleAnimation = (): ReactElement => {
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

      const size = greaterThan('lg') ? 320 : 384;

      canvas.style.width = px(size);
      canvas.style.height = px(size);

      canvas.width = size;
      canvas.height = size;

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
    <div className="rounded-full" id="particleAnimation" ref={containerRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ParticleAnimation;
