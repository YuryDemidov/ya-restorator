import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  appearence?: 'primary' | 'secondary';
  children: ReactNode;
  link: string;
}
const Button = ({ link, appearence = 'primary', children, ...props }: IButtonProps): JSX.Element => {
  return (
    <a
      href={link}
      className={cn(styles.button, {
        [styles.primary]: appearence === 'primary',
        [styles.secondary]: appearence === 'secondary',
      })}
      {...props}>
      {children}
    </a>
  );
};

export default Button;
