import { AnchorHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Link.module.scss';

export interface ILinkDefaultProps {
  defaultColor?: boolean;
  defaultTextDecoration?: boolean;
}

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ILinkDefaultProps {}

export const Link: React.FC<ILinkProps> = ({
  className,
  children,
  defaultColor = true,
  defaultTextDecoration = true,
  ...props
}) => {
  return (
    <a
      className={cn(
        styles.link,
        {
          [styles.defaultColor]: defaultColor,
          [styles.defaultTextDecoration]: defaultTextDecoration,
        },
        className,
      )}
      {...props}>
      {children}
    </a>
  );
};
