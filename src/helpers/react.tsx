import { ReactElement, ReactNode } from 'react';

export const renderIf = (condition: any, component: ReactNode): ReactNode => {
  return condition ? component : <></>;
};
