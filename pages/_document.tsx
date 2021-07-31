import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="ru">
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
        <body>
          <main>
            <Main />
          </main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
