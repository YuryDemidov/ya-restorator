import cn from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  appearence?: 'primary' | 'secondary';
  link: string;
}

export const Button: React.FC<IButtonProps> = ({ link, appearence = 'primary', children }) => {
  return (
    <a
      href={link}
      className={cn(styles.button, {
        [styles.primary]: appearence === 'primary',
        [styles.secondary]: appearence === 'secondary',
      })}>
      {children}
    </a>
  );
};
