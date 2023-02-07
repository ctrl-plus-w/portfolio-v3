import type { ReactNode } from 'react';

/**
 * Render an element if the condition evaluate, otherwise return a Fragment
 * @param condition The condition
 * @param component The component to render
 * @returns A ReactNode
 */
export const renderIf = (condition: any, component: ReactNode): ReactNode => {
  return condition ? component : <></>;
};
