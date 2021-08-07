import styles from './Header.module.scss';
import LogoShogo from './logo-desktop.svg';
import Button from '../Button/Button';

const Header = (): JSX.Element => {
  const menuLinks = [
    { name: 'Условия', link: '#conditions' },
    { name: 'Калькулятор', link: '#calculator' },
    { name: 'Частые вопросы', link: '#faq' },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <a href="#">
            <LogoShogo />
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

export default Header;
