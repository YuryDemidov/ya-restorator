import cn from 'classnames';

import styles from './Section.module.scss';

interface ISectionProps {
  className?: string;
  id?: string;
}

export const Section: React.FC<ISectionProps> = ({ className, children, id }) => {
  return (
    <section id={id} className={cn(styles.section, className)}>
      {children}
    </section>
  );
};
