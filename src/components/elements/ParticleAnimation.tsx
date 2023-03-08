import { useCallback, useRef } from 'react';

import type { ReactElement } from 'react';

import clsx from 'clsx';

import useBreakpoints from '@hook/useBreakpoints';

import ParticleJS from '@class/ParticleJS';

import { deepCopy } from '@helper/object';

import particleJSConfig from '@config/particleJSConfig';
import useWebConsole from '@hook/useWebConsole';

interface IProps {
  className?: string;
}

const ParticleAnimation = ({ className }: IProps): ReactElement => {
  const { log, console } = useWebConsole();

  const { greaterThan } = useBreakpoints();

  const particleJS = useRef<ParticleJS | null>();

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

    const context = canvasRef.current.getContext('2d');
    if (!context) return;

    particleJS.current?.tick();
  };

  const updateCanvasSize = (
    container: HTMLDivElement,
    canvas: HTMLCanvasElement
  ) => {
    const { width, height } = container.getBoundingClientRect();

    canvas.width = width;
    canvas.height = height;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  };

  const containerRef = useCallback(
    (node: HTMLDivElement) => {
      if (!node || !canvasRef.current) return;

      const { width, height } = node.getBoundingClientRect();

      log(`Container size: (${width}, ${height})`);

      // Updating canvas size
      let _particleJSConfig = deepCopy(particleJSConfig);

      updateCanvasSize(node, canvasRef.current);

      // if (
      //   greaterThan('lg') &&
      //   _particleJSConfig.particle?.amount !== undefined &&
      //   particleJSConfig.particle?.amount !== undefined
      // ) {
      //   _particleJSConfig.particle.amount =
      //     particleJSConfig.particle.amount * 1.3;
      // }

      particleJS.current = new ParticleJS(canvasRef.current, particleJSConfig);

      frameRef.current = window.requestAnimationFrame(render);

      return () => {
        particleJS.current?.clear();

        if (frameRef.current != null)
          window.cancelAnimationFrame(frameRef.current);
      };
    },
    [canvasRef]
  );

  return (
    <>
      {console()}
      <div className={clsx(['rounded-full', className])} ref={containerRef}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  );
};

export default ParticleAnimation;
