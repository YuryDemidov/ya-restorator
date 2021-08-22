import { ComponentProps } from 'react';

import { Link } from '~c/Link/Link';
import { FaqItem } from './FaqItem';
import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';
import styles from './Faq.module.scss';

export const faqList: ComponentProps<typeof FaqItem>[] = [
  {
    id: 1,
    question: <>Какие условия размещения? За&nbsp;что&nbsp;я&nbsp;плачу?</>,
    dataYmGoal: 'clickItemFAQconditions',
    answer: (
      <>
        Мы работаем за стоимость своих услуг с каждого оформленного на сервисе заказа. Стоимость услуг зависит от того,
        какой способ доставки вы выберете: своими курьерами или курьерами партнёров Яндекс.Еды. Размещаясь у нас, вы
        получаете маркетинговую поддержку, бесплатное приложение для приёма заказов и полную поддержку клиентов.
      </>
    ),
  },
  {
    id: 2,
    question: <>Я отправил заявку на подключение. Что&nbsp;дальше?</>,
    dataYmGoal: 'clickItemFAQsendApplication',
    answer: (
      <>
        На электронную почту, которую вы указали, придёт письмо со ссылкой на оплату 100 ₽ оферты — она оформляет и
        защищает наше сотрудничество. Если вы зарегистрировали 2 типа сотрудничества, — и «Доставку Яндекс.Еды», и
        своими курьерами — оферты будет две, подтвердить и оплатить нужно обе. После оплаты вам на почту придут логин и
        пароль для доступа в личный кабинет ресторанного приложения. Загрузите туда меню, фото, запускайтесь и начинайте
        принимать заказы.
      </>
    ),
  },
  {
    id: 3,
    question: <>Где можно ознакомиться с офертой?</>,
    dataYmGoal: 'clickItemFAQoffer',
    answer: (
      <>
        Оферту можно изучить{' '}
        <Link
          dataYmGoal="clickExternalLinkFAQOffer"
          defaultColor={false}
          className={styles.link}
          href="https://yandex.ru/legal/oferta_eda/"
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}>
          по ссылке
        </Link>
        .
      </>
    ),
  },
  {
    id: 4,
    question: <>Как определяется радиус доставки?</>,
    dataYmGoal: 'clickItemFAQradius',
    answer: (
      <>
        У нас два формата работы: «Доставка Яндекс.Еды» и доставка вашими курьерами «Маркетплейс». При «Доставке
        Яндекс.Еды» заказы доставляют партнёры сервиса в радиусе ≈ 3 км. Если заказы выполняют ваши курьеры, радиус
        доставки вы ограничиваете сами.
      </>
    ),
  },
  {
    id: 5,
    question: <>Где и как принимать заказ?</>,
    dataYmGoal: 'clickItemFAQtakingOrders',
    answer: (
      <>
        Работа с заказами ведётся в бесплатном приложении «Яндекс.Еда для ресторанов»:
        <br />— в{' '}
        <Link
          dataYmGoal="clickExternalLinkFAQwebVersion"
          className={styles.link}
          href="https://vendor.eda.yandex/auth"
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}>
          веб-версии
        </Link>{' '}
        , которую мы подключим на вашем компьютере;
        <br />— на{' '}
        <Link
          dataYmGoal="clickExternalLinkFAQiOS"
          className={styles.link}
          href="https://apps.apple.com/ru/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B5%D0%B4%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D0%BE%D0%B2/id1440757437?l=en"
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}>
          iOS
        </Link>{' '}
        или{' '}
        <Link
          dataYmGoal="clickExternalLinkFAQandroid"
          className={styles.link}
          href="https://play.google.com/store/apps/details?id=ru.foodfox.vendor&hl=ru=en"
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}>
          Android
        </Link>
      </>
    ),
  },
  {
    id: 6,
    question: <>Как и куда я буду получать выплаты за&nbsp;приготовленные мной заказы?</>,
    dataYmGoal: 'clickItemFAQreceivingPayments',
    answer: (
      <>
        Оплата только безналичная, мы перечисляем вам её за вычетом стоимости услуг Яндекс.Еды каждую пятницу, за период
        с пятницы прошлой недели 00:00 по четверг текущей недели 23:59. Перечисляем на реквизиты, которые вы указали при
        регистрации. В будущем, если нужно, вы сможете их поменять заявкой в службу поддержки.
      </>
    ),
  },
  {
    id: 7,
    question: <>Будете ли присылать отчётные документы?</>,
    dataYmGoal: 'clickItemFAQsendingRecords',
    answer: (
      <>
        Да, отчётные документы (счёт, акт, отчёт) вы получите в течение 7 рабочих дней после окончания периода — на
        почту, указанную при подключении к Яндекс.Еде. Оригиналы документов отправим на ваш юридический адрес «Почтой
        России».
      </>
    ),
  },
  {
    id: 8,
    question: <>У меня нет упаковки, могу ли я у вас её купить?</>,
    dataYmGoal: 'clickItemFAQpackaging',
    answer: (
      <>
        Если ваш ресторан находится в Москве, вы можете заказать упаковку для доставки у нас на{' '}
        <Link
          dataYmGoal="clickExternalLinkFAQPackaging"
          className={styles.link}
          href="https://eda-pack.ru/"
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}>
          сайте
        </Link>
        .
      </>
    ),
  },
];

export const Faq = () => (
  <Section id="faq">
    <Title level="h2">Частые вопросы (FAQ)</Title>
    <dl className={styles.list}>
      {faqList.map((faqListItem) => (
        <FaqItem {...faqListItem} key={faqListItem.id} />
      ))}
    </dl>
  </Section>
);
