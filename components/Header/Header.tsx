import { useState, useEffect } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

import { Button } from '~c/Button/Button';
import { Menu } from '~c/Menu/Menu';
import { Logo } from '~c/Logo/Logo';
import { Phone } from '~c/Phone/Phone';

import styles from './Header.module.scss';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const hideMenuOnClick = () => setOpen((isOpen) => !isOpen);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'scroll';
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.headerLeft}>
          <div className={styles.mobileMenu}>
            <Hamburger toggled={isOpen} toggle={hideMenuOnClick} rounded size={24} />
            {isOpen && <Menu onClickMenu={hideMenuOnClick} mobile />}
          </div>
          <div className={styles.logo}>
            <Logo />
          </div>
          <Phone />
        </div>
        <div className={styles.headerRight}>
          <Menu />
          <Button link="#">Подключиться</Button>
        </div>
      </div>
    </header>
  );
};
