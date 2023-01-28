import type { ReactElement, ReactNode } from 'react';

import Footer from '@module/Footer';
import Menu from '@module/Menu';

interface IProps {
  className?: string;
  children?: ReactNode;
}

const Layout = ({ children }: IProps): ReactElement => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
