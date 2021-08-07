import React, { ReactNode } from 'react';
import styles from './Title.module.scss';
import cn from 'classnames';

export interface IHeadingLevel {
  [n: string]: number;
}

export interface HeadingProps {
  level?: 'h1' | 'h2';
  children: ReactNode;
}

const Title: React.FC<HeadingProps> = ({ children, level = 'h1' }) => {
  const HEADING_LEVEL: IHeadingLevel = {
    h1: 1,
    h2: 2,
  };

  const headingProps = {
    className: `${cn({ [styles.h1]: level == 'h1' }, { [styles.h2]: level == 'h2' })}`,
  };

  return React.createElement(`h${HEADING_LEVEL[level]}`, headingProps, children);
};

export default Title;
