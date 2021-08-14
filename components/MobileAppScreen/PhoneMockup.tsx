import cn from 'classnames';

import styles from './MobileAppScreen.module.scss';

interface IPhoneMockupProps {
  className?: string;
}

export const PhoneMockup: React.FC<IPhoneMockupProps> = ({ className, children }) => {
  return <div className={cn(styles.phoneMockup, className)}>{children}</div>;
};
