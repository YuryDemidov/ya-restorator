import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './Section.module.scss';
import cn from 'classnames';

export interface ISectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
const Section = ({ children }: ISectionProps) => {
  return <section className={cn(styles.section)}>{children}</section>;
};

export default Section;
