import { ReactElement, ReactNode, useEffect } from 'react';

import Footer from '@module/Footer';
import Menu from '@module/Menu';

import Curve from '@class/Curve';

import {
  Curve1,
  Curve2,
  Curve3,
  Curve4,
  Curve5,
  Curve6,
  Curve7,
  Curve8
} from '@config/curves';

interface IProps {
  className?: string;
  children?: ReactNode;
}

const Layout = ({ children }: IProps): ReactElement => {
  return (
    <>
      <div className="absolute inset-0 h-full -z-10 overflow-hidden">
        <div className="absolute top-0 -left-48 md:left-0 md:transform md:scale-150 md:origin-top-left">
          {Curve.reactCombinePaths(Curve1, Curve2)}
        </div>

        <div className="absolute top-[30vh] -right-48 md:right-0 md:transform md:scale-150 md:origin-top-right">
          {Curve.reactCombinePaths(Curve3, Curve4)}
        </div>

        <div className="absolute top-[110vh] -left-18 md:left-0 md:transform md:scale-150 md:origin-top-left">
          {Curve.reactCombinePaths(Curve5, Curve6)}
        </div>

        <div className="absolute bottom-32 right-0 md:transform md:scale-150 md:origin-bottom-right">
          {Curve.reactCombinePaths(Curve7, Curve8)}
        </div>
      </div>

      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
