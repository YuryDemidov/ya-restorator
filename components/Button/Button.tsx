import cn from 'classnames';

import { ILinkDefaultProps, Link } from '~c/Link/Link';
import styles from './Button.module.scss';

interface IButtonProps extends ILinkDefaultProps {
  appearance?: 'primary' | 'secondary';
  link: string;
  className?: string;
}

export const Button: React.FC<IButtonProps> = ({
  link,
  appearance = 'primary',
  className,
  children,
  ...defaultLinkProps
}) => {
  return (
    <Link
      {...defaultLinkProps}
      href={link}
      className={cn(
        styles.button,
        {
          [styles.primary]: appearance === 'primary',
          [styles.secondary]: appearance === 'secondary',
        },
        className,
      )}>
      {children}
    </Link>
  );
};
