import cn from 'classnames';
import { ComponentProps } from 'react';

import { Plate } from './Plate';
import { PlateContent } from './PlateContent';
import styles from './Plate.module.scss';

interface IPlateListItemProps extends Omit<ComponentProps<typeof Plate>, 'withIndex'> {}

export const PlateListItem = ({ className, title, description, image, actionBlock }: IPlateListItemProps) => {
  const withImage = Boolean(image);
  const withImageAndActionBlock = withImage && Boolean(actionBlock);

  return (
    <li
      className={cn(className, styles.plateListItem, {
        [styles.plateWithImage]: withImage,
        [styles.plateWithImageAndAction]: withImageAndActionBlock,
      })}>
      <PlateContent title={title} description={description} image={image} actionBlock={actionBlock} />
    </li>
  );
};
