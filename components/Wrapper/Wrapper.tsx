import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Wrapper.module.scss';

export interface ISectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
const Wrapper = ({ children }: ISectionProps) => {
  return <div className={cn(styles.wrapper)}>{children}</div>;
};

export default Wrapper;
