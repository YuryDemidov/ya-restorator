import cn from 'classnames';

import { BasePlate } from './BasePlate';
import { PlateListItem } from './PlateListItem';
import styles from './Plate.module.scss';

interface IPlateProps {
  className?: string;
  withIndex?: boolean;
  title?: React.ReactChild;
  description?: React.ReactChild;
  actionBlock?: React.ReactChild;
  image?: React.ReactChild;
  color?: 'yellow' | 'grey' | 'light-black';
  sectionType?: 'HowItWorks' | 'Profit' | 'WhatCanOffer' | 'HowToStart';
}

export const Plate = (props: IPlateProps) => {
  const { withIndex = false, color = 'yellow', sectionType, className } = props;
  const baseClassNames = cn(
    styles.plate,
    {
      [styles.plateYellow]: color === 'yellow',
      [styles.plateGrey]: color === 'grey',
      [styles.plateLightBlack]: color === 'light-black',
      [styles[`plate${sectionType}`]]: sectionType !== undefined,
    },
    className,
  );

  if (withIndex) return <PlateListItem className={baseClassNames} {...props} />;

  return <BasePlate className={baseClassNames} {...props} />;
};
