import clsx from 'clsx';

import { useRouter } from 'next/router';

import { ReactElement, useState } from 'react';

import Image from 'next/image';

import AreaButton from '@element/AreaButton';

import useBreakpoints from '@hook/useBreakpoints';

import MENU from '@config/menu';

import menu from '../../../public/icons/menu.svg';
import { renderIf } from '@helper/react';

interface IProps {
  className?: string;
}

const Menu = ({ className }: IProps): ReactElement => {
  const router = useRouter();

  const { greaterThan: screenGreaterThan } = useBreakpoints();

  const [menuOpen, setMenuOpen] = useState(false);

  return screenGreaterThan('lg') ? (
    <nav
      className={clsx([
        className,
        'fixed z-50 flex justify-end px-32 py-16 w-full',
        'bg-secondary bg-opacity-80'
      ])}
    >
      <ul className="flex flex-row gap-24">
        {MENU.map((page) => (
          <a
            href={page.path}
            className={clsx(
              'text-ternary font-medium uppercase',
              !router.pathname.startsWith(page.path) && 'opacity-50'
            )}
          >
            {page.name}
          </a>
        ))}
      </ul>
    </nav>
  ) : (
    <nav
      className={clsx([
        className,
        'fixed right-0 top-0 p-8',
        'flex flex-col items-end gap-y-6',
        menuOpen && 'fixed h-screen w-screen bg-secondary'
      ])}
    >
      <AreaButton onClick={() => setMenuOpen(!menuOpen)} className="mb-9">
        <Image src={menu} alt="Menu Icon" height={32} width={32} />
      </AreaButton>

      {renderIf(
        menuOpen,
        MENU.map((page) => (
          <a
            href={page.path}
            className={clsx(
              'text-[42px] text-ternary font-medium uppercase',
              router.pathname !== page.path && 'opacity-50'
            )}
          >
            {page.name}
          </a>
        ))
      )}
    </nav>
  );
};

export default Menu;
