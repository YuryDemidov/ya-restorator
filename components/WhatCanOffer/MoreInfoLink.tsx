import { ComponentProps } from 'react';

import { Link } from '~c/Link/Link';
import styles from './WhatCanOffer.module.scss';

interface IMoreInfoLinkProps extends Pick<ComponentProps<typeof Link>, 'href'> {}

export const MoreInfoLink: React.FC<IMoreInfoLinkProps> = ({ href = '#', children = 'Подробнее' }) => {
  return (
    <Link className={styles.moreInfoLink} defaultColor={false} href={href}>
      {children}
    </Link>
  );
};
