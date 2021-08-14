import Head from 'next/head';

import { Wrapper } from '~c/Wrapper/Wrapper';
import { Section } from '~c/Section/Section';
import { Header } from '~c/Header/Header';
import { Hero } from '~c/Hero/Hero';
import { Profit } from '~c/Profit/Profit';
import { MobileAppScreen } from '~c/MobileAppScreen/MobileAppScreen';
import { Conditions } from '~c/Conditions/Conditions';
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
      </Head>
      <Header />
      <main className="main">
        <Wrapper>
          <Section>
            <Hero />
          </Section>
          <Profit />
          <MobileAppScreen />
          <Conditions />
          <HowToStart />
          <WhatCanOffer />
          <Faq />
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
