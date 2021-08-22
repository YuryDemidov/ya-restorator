import cn from 'classnames';

import { Link } from '~c/Link/Link';
import styles from './Phone.module.scss';

interface IPhoneProps {
  noteStyle?: string;
}

export const Phone = ({ noteStyle }: IPhoneProps) => {
  const phoneNumber = '+7 800 600 13 10';
  return (
    <div
      className={cn({
        [styles.footerNote]: noteStyle === 'footer',
        [styles.mobileNote]: noteStyle === 'mobile',
      })}>
      {noteStyle && <p>Есть вопросы? Задайте нам</p>}
      <Link
        className={cn({
          [styles.phoneMobile]: noteStyle,
          [styles.phone]: !noteStyle,
        })}
        dataYmGoal="phoneNumberTop"
        href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
        {phoneNumber}
      </Link>
    </div>
  );
};
