import cn from 'classnames';

import { IPlate } from '~c/SectionWithPlates/SectionWithPlates';
import styles from './ProfitPlates.module.scss';

export const plateList: IPlate[] = [
  {
    key: 0,
    color: 'grey',
    title: <>Доставка — ваш новый канал&nbsp;продаж</>,
    description: (
      <>
        Даём все инструменты для быстрой доставки. Если у&nbsp;вас свои курьеры, помогаем получать и&nbsp;отслеживать
        заказы.
      </>
    ),
    image: <div className={cn(styles.image, styles.image1)} />,
  },
  {
    key: 1,
    color: 'grey',
    title: <>Возможности продвижения</>,
    description: (
      <>
        Проводите акции для поль&shy;зователей, управляйте настройками рекламы  в&nbsp;личном кабинете
        и&nbsp;увеличивайте свою прибыль.
      </>
    ),
    image: <div className={cn(styles.image, styles.image2)} />,
  },
  {
    key: 2,
    color: 'grey',
    title: <>Покажем ресторан в&nbsp;наших сервисах</>,
    description: <>Пользователи Яндекса увидят вас в&nbsp;сервисах Еда, Go, Карты, Поиск.</>,
    image: <div className={cn(styles.image, styles.image3)} />,
  },
  {
    key: 3,
    color: 'grey',
    title: <>Больше продаж теми&nbsp;же&nbsp;силами</>,
    description: (
      <>
        На 100% используйте потенциал  своего ресторана. Кухня не&nbsp;будет  стоять без&nbsp;дела, а&nbsp;еда&nbsp;—
        портиться.
      </>
    ),
    image: <div className={cn(styles.image, styles.image4)} />,
  },
];
