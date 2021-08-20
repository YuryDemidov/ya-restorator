import cn from 'classnames';

import styles from './Wrapper.module.scss';

interface IWrapperProps {
  className?: string;
}

export const Wrapper: React.FC<IWrapperProps> = ({ children, className }) => {
  return <main className={cn(styles.wrapper, className)}>{children}</main>;
};
