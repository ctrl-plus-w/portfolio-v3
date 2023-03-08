import { useState } from 'react';

const useWebConsole = () => {
  const [webConsole, setWebConsole] = useState<string[]>([]);

  const clear = () => {
    setWebConsole([]);
  };

  const log = (...messages: string[]) => {
    setWebConsole((_messages) => [..._messages, ...messages]);
  };

  const console = () => {
    return (
      <div className="fixed top-4 left-4 flex flex-col gap-2 z-[1000] bg-black bg-opacity-30 p-4 rounded-sm">
        {webConsole.map((message) => (
          <p className="text-xs text-black font-mono">{message}</p>
        ))}
      </div>
    );
  };

  return { clear, log, console };
};

export default useWebConsole;
