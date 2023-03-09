import { useCallback, useRef, useState } from 'react';

import clsx from 'clsx';
import ParticleJS from '@class/ParticleJS';
import useFPS from '@hook/useFPS';

interface IProps {
  className?: string;
}

const ParticleAnimation = ({ className }: IProps) => {
  const [webConsole, setWebConsole] = useState<string[]>([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const particleJS = useRef<ParticleJS | null>();

  const log = (...messages: string[]) => {
    setWebConsole((wc) => [...wc, ...messages]);
  };

  useFPS(() => {
    if (particleJS.current) particleJS.current.tick();
  }, 60);

  const ref = useCallback((node: HTMLDivElement) => {
    if (!node) return;

    const { width, height } = node.getBoundingClientRect();
    log(`Current size : (${width}, ${height})`);

    const canvas = canvasRef.current;
    if (canvas !== null) {
      canvas.width = width;
      canvas.height = height;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      particleJS.current = new ParticleJS(canvas, {
        particle: {
          minSize: 4,
          size: 11,
          amount: 40,
          speed: 4
        },
        attract: {
          distance: 300,
          rotateX: 500,
          rotateY: 500
        }
      });
    }
  }, []);

  return (
    <>
      <div className="z-[1000] fixed top-2 left-2 flex flex-col p-2 bg-black bg-opacity-30 text-black font-mono">
        {webConsole.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      <div
        className={clsx(['rounded-full border border-purple-500', className])}
        ref={ref}
      >
        <canvas ref={canvasRef}></canvas>
      </div>
    </>
  );
};

export default ParticleAnimation;
