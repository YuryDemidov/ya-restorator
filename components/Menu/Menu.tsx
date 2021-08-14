import React from 'react';
import cn from 'classnames';

import { Link } from '~c/Link/Link';
import { Phone } from '~c/Phone/Phone';
import styles from './Menu.module.scss';
import { Button } from '~c/Button/Button';

interface IMenuProps {
  name: string;
  link: string;
}

interface IMenuComponentProps {
  mobile?: boolean;
  onClickMenu?: () => void;
}

const menuLinks: IMenuProps[] = [
  { name: 'Условия', link: '#conditions' },
  { name: 'Калькулятор', link: '#calculator' },
];

export const Menu = ({ mobile, onClickMenu }: IMenuComponentProps) => {
  return (
    <div className={cn({ [styles.mobileMenuContent]: mobile })}>
      <nav>
        <ul className={cn({ [styles.menuContent]: !mobile })}>
          {menuLinks.map(({ name, link }) => {
            return (
              <li key={link}>
                <Link className={styles.link} onClick={mobile ? onClickMenu : undefined} href={link}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {mobile && (
        <div className={styles.mobileContactInfo}>
          <Phone noteStyle="mobile" />
          <Button appearance="secondary" link="#">
            Личный кабинет
          </Button>
        </div>
      )}
    </div>
  );
};
