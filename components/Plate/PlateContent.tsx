import { ComponentProps } from 'react';

import { Plate } from './Plate';
import styles from './Plate.module.scss';

interface IPlateContentProps extends Omit<ComponentProps<typeof Plate>, 'withIndex' | 'color' | 'classNames'> {}

export const PlateContent = ({ title, description, image, actionBlock }: IPlateContentProps) => {
  const withImage = Boolean(image);

  return (
    <>
      <div className={styles.leftWrapper}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {actionBlock}
      </div>
      {withImage && image}
    </>
  );
};
