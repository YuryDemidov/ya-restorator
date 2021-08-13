import cn from 'classnames';

import styles from './Title.module.scss';

type THeadingLevel = 'h1' | 'h2';

interface ITitleProps {
  level?: THeadingLevel;
  className?: string;
}

export const Title: React.FC<ITitleProps> = ({ children, level: Tag = 'h1', className }) => {
  return <Tag className={cn({ [styles.h1]: Tag === 'h1', [styles.h2]: Tag === 'h2' }, className)}>{children}</Tag>;
};
