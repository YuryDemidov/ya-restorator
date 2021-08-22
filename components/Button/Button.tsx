import cn from 'classnames';

import { ILinkDefaultProps, Link } from '~c/Link/Link';
import styles from './Button.module.scss';

interface IButtonProps extends ILinkDefaultProps {
  appearance?: 'primary' | 'secondary';
  link: string;
  className?: string;
  dataYmGoal?: string;
}

export const Button: React.FC<IButtonProps> = ({
  link,
  appearance = 'primary',
  className,
  children,
  dataYmGoal,
  ...defaultLinkProps
}) => {
  return (
    <Link
      {...defaultLinkProps}
      dataYmGoal={dataYmGoal}
      href={link}
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.secondary]: appearance === 'secondary',
      })}>
      {children}
    </Link>
  );
};
