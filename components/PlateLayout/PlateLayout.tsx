import cn from 'classnames';

import styles from './PlateLayout.module.scss';

interface IPlateLayoutProps {
  // FIXME: заменить ReactClild на typeof Plate, как будет готов
  plateList: React.ReactChild;
  className?: string;
}

export const Profit = ({ plateList, className = '' }: IPlateLayoutProps) => {
  return <div className={cn(styles.PlateLayout, className)}>{plateList}</div>;
};
