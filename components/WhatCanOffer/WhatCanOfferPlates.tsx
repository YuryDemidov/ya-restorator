import { IPlate } from '~c/SectionWithPlates/SectionWithPlates';
import { MoreInfoLink } from './MoreInfoLink';

export const plateList: IPlate[] = [
  {
    key: 0,
    title: <>Промо-материалы</>,
    description: <>Произведём и доставим без дополнительной платы</>,
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
    actionBlock: <MoreInfoLink />,
  },
  {
    key: 1,
    title: <>Упаковка готовых&nbsp;блюд</>,
    description: <>Упакуем ваши блюда. Наша упаковка прочная и&nbsp;не&nbsp;промокаемая</>,
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
    actionBlock: <MoreInfoLink />,
  },
  {
    key: 2,
    title: <>Фотосъёмка блюд</>,
    description: <>Готовые фотографии в&nbsp;течение 10 рабочих дней</>,
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
    actionBlock: <MoreInfoLink />,
  },
  {
    key: 3,
    title: <>Планшет с приложением</>,
    description: <>Уже настроен и&nbsp;готов&nbsp;к&nbsp;работе</>,
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
    actionBlock: <MoreInfoLink />,
  },
  {
    key: 4,
    title: <>Интеграция с&nbsp;CRM&nbsp;ресторана</>,
    description: <>Настроим вашу ресторанную CRM так, чтобы напрямую отправлять на неё заказы</>,
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
    actionBlock: <MoreInfoLink />,
  },
  {
    key: 5,
    title: <>Ваш рабочий сайт за 30 минут</>,
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
    actionBlock: <MoreInfoLink />,
  },
];
