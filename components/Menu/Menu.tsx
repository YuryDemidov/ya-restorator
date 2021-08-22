import cn from 'classnames';

import { Link } from '~c/Link/Link';
import { Phone } from '~c/Phone/Phone';
import { Button } from '~c/Button/Button';
import styles from './Menu.module.scss';

interface IMenuProps {
  name: string;
  link: string;
  dataYmGoal?: string;
}

interface IMenuComponentProps {
  mobile?: boolean;
  onClickMenu?: () => void;
}

const menuLinks: IMenuProps[] = [
  { name: 'Условия', link: '#conditions', dataYmGoal: 'readConditionsTop' },
  { name: 'Калькулятор', link: '#calculator', dataYmGoal: 'calculatorTop' },
];

export const Menu = ({ mobile, onClickMenu }: IMenuComponentProps) => {
  return (
    <div className={cn({ [styles.mobileMenuContent]: mobile })}>
      <nav>
        <ul className={cn({ [styles.menuContent]: !mobile })}>
          {menuLinks.map(({ name, link, dataYmGoal }) => {
            return (
              <li key={link}>
                <Link
                  dataYmGoal={dataYmGoal}
                  className={styles.link}
                  onClickHandler={mobile ? onClickMenu : undefined}
                  href={link}>
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
          <Button
            dataYmGoal="clickMenuItemPersonalAccount"
            appearance="secondary"
            link="https://vendor.eda.yandex/auth">
            Личный кабинет
          </Button>
        </div>
      )}
    </div>
  );
};
