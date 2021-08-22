import { ComponentProps } from 'react';

import { Link } from '~c/Link/Link';
import styles from './WhatCanOffer.module.scss';

interface IMoreInfoLinkProps extends Pick<ComponentProps<typeof Link>, 'href' | 'dataYmGoal'> {}

export const MoreInfoLink: React.FC<IMoreInfoLinkProps> = ({ dataYmGoal = '', href = '#', children = 'Подробнее' }) => {
  return (
    <Link dataYmGoal={dataYmGoal} className={styles.moreInfoLink} defaultColor={false} href={href} target="_blank">
      {children}
    </Link>
  );
};
