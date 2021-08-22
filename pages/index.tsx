import Head from 'next/head';
import { YMInitializer } from 'react-yandex-metrika';

import { Wrapper } from '~c/Wrapper/Wrapper';
import { Header } from '~c/Header/Header';
import { Hero } from '~c/Hero/Hero';
import { Profit } from '~c/Profit/Profit';
import { MobileAppScreen } from '~c/MobileAppScreen/MobileAppScreen';
import { HowItWorks } from '~c/HowItWorks/HowItWorks';
import { Conditions } from '~c/Conditions/Conditions';
import { Calculator } from '~c/Calculator/Calculator';
import { HowToStart } from '~c/HowToStart/HowToStart';
import { WhatCanOffer } from '~c/WhatCanOffer/WhatCanOffer';
import { Faq } from '~c/Faq/Faq';
import { Footer } from '~c/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Доставка — ваш новый канал продаж</title>
        <meta
          name="description"
          content="Подключите ресторан к Яндекс.Еде, самому узнаваемому в России сервису заказа еды с доставкой"
        />
        <link rel="manifest" href="/images/favicons/manifest.webmanifest" crossOrigin="use-credentials" />
        <link rel="icon" href="/images/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/favicons/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <YMInitializer accounts={[84037351]} options={{ webvisor: true }} version="2" />
      <Header />
      <Wrapper>
        <Hero />
        <Profit />
        <MobileAppScreen />
        <HowItWorks />
        <Conditions />
        <Calculator />
        <HowToStart />
        <WhatCanOffer />
        <Faq />
      </Wrapper>
      <Footer />
    </>
  );
}
