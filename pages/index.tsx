import Head from 'next/head';
import { YMInitializer } from 'react-yandex-metrika';

import { Wrapper } from '~c/Wrapper/Wrapper';
import { Header } from '~c/Header/Header';
import { Hero } from '~c/Hero/Hero';
import { Profit } from '~c/Profit/Profit';
import { MobileAppScreen } from '~c/MobileAppScreen/MobileAppScreen';
import { Conditions } from '~c/Conditions/Conditions';
import { Calculator } from '~c/Calculator/Calculator';
import { WhatCanOffer } from '~c/WhatCanOffer/WhatCanOffer';
import { Faq } from '~c/Faq/Faq';
import { Footer } from '~c/Footer/Footer';
import { ConnectUs } from '~c/ConnectUs/ConnectUs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Услуги доставки яндекс еды по всей России 🔥</title>
        <meta
          name="description"
          content="Подключите услуги доставки еды к вашему ресторану. Доставка за ~32 минуты 🚴. Эквайринг. Бух отчетность.👍"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#fa9200" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/images/favicons/manifest.webmanifest?v=1" crossOrigin="use-credentials" />
        <link rel="icon" href="/images/favicons/favicon.ico?v=1" sizes="any" />
        <link rel="icon" href="/images/favicons/favicon.svg?v=1" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-touch-icon.png?v=1" />
        <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg?v=1" color="#000000" />
        <script src="/analytics/ya-metrika.js" async />
      </Head>
      <YMInitializer accounts={[84037351]} options={{ webvisor: true }} version="2" />
      <Header />
      <Wrapper>
        <Hero />
        <Profit />
        <MobileAppScreen />
        <Conditions />
        <Calculator />
        <ConnectUs />
        <WhatCanOffer />
        <Faq />
      </Wrapper>
      <Footer />
    </>
  );
}
