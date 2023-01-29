// import { useRef } from 'react';

import type { ReactElement, ReactNode } from 'react';

import Footer from '@module/Footer';
import Menu from '@module/Menu';

// import useAnimatedCurves from '@hook/useAnimatedCurves';

// import { Curve1, Curve2, Curve3, Curve4, Curve5, Curve6 } from '@config/curves';

interface IProps {
  className?: string;
  children?: ReactNode;
}

const Layout = ({ children }: IProps): ReactElement => {
  // const animationContainerRef1 = useAnimatedCurves<HTMLDivElement>(
  //   Curve1,
  //   Curve2
  // );

  return (
    <>
      {/* <div className="absolute w-full h-full overflow-hidden">
        <div
          className="absolute top-0 left-0 lg:transform lg:scale-150 lg:origin-top-left"
          ref={animationContainerRef1}
        ></div>
      </div> */}

      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
