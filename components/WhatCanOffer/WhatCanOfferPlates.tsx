import cn from 'classnames';

import { IPlate } from '~c/SectionWithPlates/SectionWithPlates';
import { MoreInfoLink } from './MoreInfoLink';
import styles from '../WhatCanOffer/WhatCanOffer.module.scss';

export const plateList: IPlate[] = [
  {
    key: 0,
    color: 'grey',
    title: <>Промо-материалы</>,
    description: (
      <>
        Произведём и доставим
        <br />
        без дополнительной платы
      </>
    ),
    image: <div className={cn(styles.image, styles.image1)} />,
    actionBlock: <MoreInfoLink dataYmGoal="whatElsePromoMaterials" href="https://yandex.ru/promo/eda/rest_faq_promo" />,
  },
  {
    key: 1,
    color: 'grey',
    title: <>Планшет с&nbsp;приложением</>,
    description: (
      <>
        Уже настроен
        <br />
        и&nbsp;готов&nbsp;к&nbsp;работе
      </>
    ),
    image: <div className={cn(styles.image, styles.image2)} />,
    actionBlock: <MoreInfoLink dataYmGoal="whatElseTablet" href="https://yandex.ru/promo/eda/rest_faq_tablet" />,
  },
  {
    key: 2,
    color: 'grey',
    title: <>Интеграция с&nbsp;CRM&nbsp;ресторана</>,
    description: (
      <>
        Настроим вашу ресторанную
        <br />
        CRM так, чтобы напрямую
        <br />
        отправлять на неё заказы
      </>
    ),
    image: <div className={cn(styles.image, styles.image3)} />,
    actionBlock: (
      <MoreInfoLink dataYmGoal="whatElseIntegrationCRM" href="https://yandex.ru/promo/eda/rest_faq_integration" />
    ),
  },
  {
    key: 3,
    color: 'grey',
    title: <>Упаковка готовых&nbsp;блюд</>,
    description: (
      <>
        Широкий ассортимент
        <br />
         для всех типов блюд
      </>
    ),
    image: <div className={cn(styles.image, styles.image4)} />,
    actionBlock: <MoreInfoLink dataYmGoal="whatElsePackaging" href="https://eda-pack.ru/" />,
  },
  {
    key: 4,
    color: 'grey',
    title: <>Фотосъёмка блюд</>,
    description: (
      <>
        Готовые фотографии
        <br />
        в&nbsp;течение 10 рабочих дней
      </>
    ),
    image: <div className={cn(styles.image, styles.image5)} />,
    actionBlock: <MoreInfoLink dataYmGoal="whatElsePhotos" href="https://yandex.ru/promo/eda/rest_faq_photo" />,
  },
  {
    key: 5,
    color: 'grey',
    title: <>Кнопка Яндекс.Еды  у&nbsp;вас на&nbsp;сайте</>,
    description: (
      <>
        Если у вас нет своего сайта —<br />
        создайте его в личном кабинете
      </>
    ),
    image: <div className={cn(styles.image, styles.image6)} />,
    actionBlock: <MoreInfoLink dataYmGoal="whatElseNewWebsite" href="https://eda.yandex.ru/partners/delivery-button" />,
  },
];
