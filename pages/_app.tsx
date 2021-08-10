import type { AppProps } from 'next/app';

import '~s/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
