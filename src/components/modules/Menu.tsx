import clsx from 'clsx';

import { useRouter } from 'next/router';

import type { ReactElement } from 'react';

import Image from 'next/image';

import AreaButton from '@element/AreaButton';

import useBreakpoints from '@hook/useBreakpoints';

import MENU from '@config/menu';

import menu from '../../../public/icons/menu.svg';

interface IProps {
  className?: string;
}

const Menu = ({ className }: IProps): ReactElement => {
  const router = useRouter();

  const { greaterThan: screenGreaterThan } = useBreakpoints();

  const openMenu = () => {};

  return screenGreaterThan('lg') ? (
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
  ) : (
    <AreaButton onClick={openMenu} className="self-end">
      <Image src={menu} alt="Menu Icon" height={32} width={32} />
    </AreaButton>
  );
};

export default Menu;
