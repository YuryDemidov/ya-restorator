import cn from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  appearance?: 'primary' | 'secondary';
  link: string;
}

export const Button: React.FC<IButtonProps> = ({ link, appearance = 'primary', children }) => {
  return (
    <a
      href={link}
      className={cn(styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.secondary]: appearance === 'secondary',
      })}>
      {children}
    </a>
  );
};
