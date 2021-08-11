import cn from 'classnames';

import { Link } from '~c/Link/Link';
import styles from './Button.module.scss';

interface IButtonProps {
  appearance?: 'primary' | 'secondary';
  link: string;
}

export const Button: React.FC<IButtonProps> = ({ link, appearance = 'primary', children }) => {
  return (
    <Link
      href={link}
      className={cn(styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.secondary]: appearance === 'secondary',
      })}>
      {children}
    </Link>
  );
};
