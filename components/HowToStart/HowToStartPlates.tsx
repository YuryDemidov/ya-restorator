import { Button } from '~c/Button/Button';
import { Link } from '~c/Link/Link';
import { IPlate } from '~c/SectionWithPlates/SectionWithPlates';
import styles from './HowToStart.module.scss';

export const plateList: IPlate[] = [
  {
    key: 0,
    color: 'yellow',
    title: <>Оставьте заявку на&nbsp;подключение</>,
    description: (
      <>
        Мы сотрудничаем c отвественными ресторанами. Дождитесь проверки вашей заявки,{' '}
        <Link dataYmGoal="clickPayOffer" defaultTextDecoration={false} href="https://yandex.ru/legal/oferta_eda/">
          оплатите оферту.
        </Link>
      </>
    ),
  },
  {
    key: 1,
    color: 'grey',
    title: <>Войдите в приложение и&nbsp;заполните меню</>,
    description: (
      <>Добавьте описания и фото блюд, а&nbsp;если&nbsp;работаете со&nbsp;своими курьерами — нарисуйте зоны доставки</>
    ),
  },
  {
    key: 2,
    color: 'light-black',
    title: <>Запускайте доставку одной кнопкой</>,
    actionBlock: (
      <>
        <Button
          dataYmGoal="passOrderHowToStartAction"
          defaultColor={false}
          link="https://yandex.secure.force.com/welcome/"
          className={styles.button}>
          Подключиться
        </Button>
      </>
    ),
  },
];
