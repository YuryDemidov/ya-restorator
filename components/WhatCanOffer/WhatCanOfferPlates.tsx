import { IPlate } from '~c/SectionWithPlates/SectionWithPlates';
import { MoreInfoLink } from './MoreInfoLink';

export const plateList: IPlate[] = [
  {
    key: 0,
    color: 'grey',
    title: <>Промо-материалы</>,
    description: <>Произведём и доставим без дополнительной платы</>,
    image: (
      <div
        style={{
          backgroundColor: 'red',
          width: 186,
          height: 186,
          position: 'absolute',
          top: 38,
          right: 9,
        }}
      />
    ),
    actionBlock: <MoreInfoLink dataYmGoal="whatElsePromoMaterials" href="https://yandex.ru/promo/eda/rest_faq_promo" />,
  },
  {
    key: 3,
    color: 'grey',
    title: <>Планшет с приложением</>,
    description: <>Уже настроен и готов к работе</>,
    image: (
      <div
        style={{
          backgroundColor: 'red',
          width: 186,
          height: 186,
          position: 'absolute',
          top: 38,
          right: 9,
        }}
      />
    ),
    actionBlock: <MoreInfoLink dataYmGoal="whatElseTablet" href="https://yandex.ru/promo/eda/rest_faq_tablet" />,
  },
  {
    key: 4,
    color: 'grey',
    title: <>Интеграция с CRM ресторана</>,
    description: <>Настроим вашу ресторанную CRM так, чтобы напрямую отправлять на неё заказы</>,
    image: (
      <div
        style={{
          backgroundColor: 'red',
          width: 186,
          height: 186,
          position: 'absolute',
          top: 38,
          right: 9,
        }}
      />
    ),
    actionBlock: (
      <MoreInfoLink dataYmGoal="whatElseIntegrationCRM" href="https://yandex.ru/promo/eda/rest_faq_integration" />
    ),
  },
  {
    key: 1,
    color: 'grey',
    title: <>Упаковка готовых блюд</>,
    description: <>Широкий ассортимент для всех типов блюд</>,
    image: (
      <div
        style={{
          backgroundColor: 'red',
          width: 186,
          height: 186,
          position: 'absolute',
          top: 38,
          right: 9,
        }}
      />
    ),
    actionBlock: <MoreInfoLink dataYmGoal="whatElsePackaging" href="https://eda-pack.ru/" />,
  },
  {
    key: 2,
    color: 'grey',
    title: <>Фотосъёмка блюд</>,
    description: <>Готовые фотографии в течение 10 рабочих дней</>,
    image: (
      <div
        style={{
          backgroundColor: 'red',
          width: 186,
          height: 186,
          position: 'absolute',
          top: 38,
          right: 9,
        }}
      />
    ),
    actionBlock: <MoreInfoLink dataYmGoal="whatElsePhotos" href="https://yandex.ru/promo/eda/rest_faq_photo" />,
  },
  {
    key: 5,
    color: 'grey',
    title: <>Кнопка Яндекс.Еды у вас на сайте</>,
    description: <>Если у вас нет сайта ресторана, вы можете создать его в личном кабинете yandex eda</>,
    image: (
      <div
        style={{
          backgroundColor: 'red',
          width: 186,
          height: 186,
          position: 'absolute',
          top: 38,
          right: 9,
        }}
      />
    ),
    actionBlock: <MoreInfoLink dataYmGoal="whatElseNewWebsite" href="https://eda.yandex.ru/partners/delivery-button" />,
  },
];
