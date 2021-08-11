import { AnchorHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Link.module.scss';

export const Link: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className, children, ...props }) => {
  return (
    <a className={cn(styles.link, className)} {...props}>
      {children}
    </a>
  );
};
