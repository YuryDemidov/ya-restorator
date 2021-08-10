import { Button } from '~c/Button/Button';

import Logotype from './logo-desktop.svg';
import styles from './Header.module.scss';

const menuLinks = [
  { name: 'Условия', link: '#conditions' },
  { name: 'Калькулятор', link: '#calculator' },
  { name: 'Частые вопросы', link: '#faq' },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <a href="#">
            <Logotype />
          </a>
        </div>
        <div className={styles.phone}>
          <a href="tel:+78006001310">+7 800 600 13 10</a>
        </div>
      </div>
      <div className={styles.headerRight}>
        <nav className={styles.menu}>
          {menuLinks.map((menuItem, index) => {
            const { name, link } = menuItem;
            return (
              <a className={styles.link} key={index} href={link}>
                {name}
              </a>
            );
          })}
        </nav>
        <Button link="#">Подключиться</Button>
      </div>
    </header>
  );
};
