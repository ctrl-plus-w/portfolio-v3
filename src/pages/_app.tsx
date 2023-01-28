import '@style/globals.css';

import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';

import Layout from '@module/Layout';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
