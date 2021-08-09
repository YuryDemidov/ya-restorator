import cn from 'classnames';

import styles from './Section.module.scss';

interface ISectionProps {
  className?: string;
}

export const Section: React.FC<ISectionProps> = ({ className, children }) => {
  return <section className={cn(styles.section, className)}>{children}</section>;
};
