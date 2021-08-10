import Head from 'next/head';

import { Section } from '~c/Section/Section';
import { Header } from '~c/Header/Header';
import { Wrapper } from '~c/Wrapper/Wrapper';
import { Title } from '~c/Title/Title';
import { Faq } from '~c/Faq/Faq';

export default function Home() {
  return (
    <>
      <Head>
        <title>Доставка — ваш новый канал продаж</title>
        <meta
          name="description"
          content="Подключите ресторан к Яндекс.Еде, самому узнаваемому в России сервису заказа еды с доставкой"
        />
        <link rel="manifest" href="/favicons/manifest.webmanifest" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Wrapper>
        <Section>
          <Title level="h1">Ресторатор</Title>
        </Section>
        <Section>
          <Title level="h2">Частые вопросы (FAQ)</Title>
          <Faq />
        </Section>
      </Wrapper>
    </>
  );
}
