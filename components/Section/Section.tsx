import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Section.module.scss';

interface ISectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
const Section = ({ children }: ISectionProps) => {
  return <section className={cn(styles.section)}>{children}</section>;
};

export default Section;
