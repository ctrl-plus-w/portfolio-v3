import clsx from 'clsx';

import { useRouter } from 'next/router';

import type { ReactElement } from 'react';

import MENU from '@config/menu';

interface IProps {
  className?: string;
}

const Menu = ({ className }: IProps): ReactElement => {
  const router = useRouter();

  return (
    <nav className={clsx([className])}>
      <ul className="flex flex-row gap-24">
        {MENU.map((page) => (
          <p
            className={clsx(
              'text-ternary font-medium uppercase',
              !router.pathname.startsWith(page.path) && 'opacity-50'
            )}
          >
            {page.name}
          </p>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
