import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './Wrapper.module.scss';
import cn from 'classnames';

export interface ISectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
const Wrapper = ({ children }: ISectionProps) => {
  return <div className={cn(styles.wrapper)}>{children}</div>;
};

export default Wrapper;
