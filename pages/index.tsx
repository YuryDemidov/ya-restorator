import Head from 'next/head';

import { Section } from '~c/Section/Section';
import { Header } from '~c/Header/Header';
import { Wrapper } from '~c/Wrapper/Wrapper';
import { Faq } from '~c/Faq/Faq';
import { Hero } from '~c/Hero/Hero';
import { Footer } from '~c/Footer/Footer';
import { Conditions } from '~c/Conditions/Conditions';
import { Profit } from '~c/Profit/Profit';
import { HowToStart } from '~c/HowToStart/HowToStart';
import { WhatCanOffer } from '~c/WhatCanOffer/WhatCanOffer';

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
