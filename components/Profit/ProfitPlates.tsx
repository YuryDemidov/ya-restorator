import { IPlate } from '~c/SectionWithPlates/SectionWithPlates';

export const plateList: IPlate[] = [
  {
    key: 0,
    color: 'grey',
    title: <>Доставка — ваш новый канал продаж</>,
    description: (
      <>Даём все инструменты для быстрой доставки. Если у вас свои курьеры, помогаем получать и отслеживать заказы.</>
    ),
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
  },
  {
    key: 1,
    color: 'grey',
    title: <>Возможности продвижения</>,
    description: (
      <>
        Проводите акции для пользователей, управляйте настройками рекламы в личном кабинете и увеличивайте свою прибыль.
      </>
    ),
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
  },
  {
    key: 2,
    color: 'grey',
    title: <>Покажем ресторан в наших сервисах</>,
    description: <>Пользователи Яндекса увидят вас в сервисах Еда, Go, Карты, Поиск.</>,
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
  },
  {
    key: 3,
    color: 'grey',
    title: <>Больше продаж теми же силами</>,
    description: (
      <>На 100% используйте потенциал своего ресторана. Кухня не будет стоять без дела, а еда — портиться.</>
    ),
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
  },
];
