import cn from 'classnames';

import styles from './Wrapper.module.scss';

interface IWrapperProps {
  className?: string;
}

export const Wrapper: React.FC<IWrapperProps> = ({ children, className }) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};
