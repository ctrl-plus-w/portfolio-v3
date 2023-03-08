import { useEffect, useLayoutEffect, useRef, useState } from 'react';

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

	const [console, setConsole] = useState<string[]>([]);

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

		context.fillStyle = "#fff000";
		context.fillRect(0, 0, canvasRef.current.width / 2, canvasRef.current.height / 2);
		context.fillRect(canvasRef.current.width / 2, canvasRef.current.height / 2, canvasRef.current.width / 2, canvasRef.current.height / 2);
    // particleJS.current?.tick();
  };

  useLayoutEffect(() => {
		if (!canvasRef.current || !containerRef.current) return;

		const {width,height} = containerRef.current.getBoundingClientRect()
		setConsole(console => [...console, `Current size is : (${width}, ${height})`]);

    // const updateCanvasSize = (
    //   container: HTMLDivElement,
    //   canvas: HTMLCanvasElement
		// ) => {
		// 	const {width,height} = container.getBoundingClientRect()

    //   canvas.width = width;
    //   canvas.height = height;

    //   canvas.style.width = `${width}px`;
    //   canvas.style.height = `${height}px`;
    // };

    // // Updating canvas size
		// let _particleJSConfig = deepCopy(particleJSConfig);

		// const { width, height } = containerRef.current.getBoundingClientRect();

		// setConsole(console => [...console, `Current size is : (${width}, ${height})`]);
		
		// updateCanvasSize(containerRef.current, canvasRef.current);

		// if (
		//   greaterThan('lg') &&
		//   _particleJSConfig.particle?.amount !== undefined &&
		//   particleJSConfig.particle?.amount !== undefined
		// ) {
		//   _particleJSConfig.particle.amount =
		//     particleJSConfig.particle.amount * 1.3;
		// }

		// particleJS.current = new ParticleJS(canvasRef.current, particleJSConfig);

    // frameRef.current = window.requestAnimationFrame(render);

    // return () => {
    //   particleJS.current?.clear();

    //   if (frameRef.current != null)
    //     window.cancelAnimationFrame(frameRef.current);
    // };
  }, [containerRef, canvasRef]);

  return (
    <div className={clsx(['rounded-full bg-purple-500', className])} ref={containerRef}>
			<div className="absolute top-0 left-0 z-[1000] flex flex-col gap-2 font-mono">
				{console.map(msg => <p className="text-xs text-black">{msg}</p>)}
			</div>

      <canvas ref={canvasRef} className="bg-red-500 bg-opacity-80"></canvas>
    </div>
  );
};

export default ParticleAnimation;