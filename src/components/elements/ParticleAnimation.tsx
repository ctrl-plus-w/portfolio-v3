import { useCallback, useLayoutEffect, useRef, useState } from 'react';

import type { ReactElement } from 'react';

import clsx from 'clsx';

import useBreakpoints from '@hook/useBreakpoints';

import ParticleJS from '@class/ParticleJS';

import { deepCopy } from '@helper/object';
import { px } from '@helper/react';

import particleJSConfig from '@config/particleJSConfig';

interface IProps {
  className?: string;
}

const ParticleAnimation = ({ className }: IProps): ReactElement => {
	const [webConsole, setWebConsole] = useState<string[]>([]);

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	
  const containerRef = useCallback(
		(container: HTMLDivElement) => {
			if (!container || !canvasRef.current) return;

			const { width, height } = container.getBoundingClientRect();

			setWebConsole(msg => [...msg, `Current size: (${width}; ${height})`]);
		},
    [canvasRef]
  );

  return (
    <div className={clsx(['rounded-full', className])} ref={containerRef}>
			<div className="fixed top-0 left-0 flex flex-col text-black font-mono">
				{webConsole.map((message, index) => <p key={index}>{message}</p>)}
			</div>

      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ParticleAnimation;
