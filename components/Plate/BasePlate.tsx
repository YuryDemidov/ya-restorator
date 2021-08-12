import { ComponentProps } from 'react';
import cn from 'classnames';

import { Plate } from './Plate';
import { PlateContent } from './PlateContent';
import styles from './Plate.module.scss';

interface IBasePlateProps extends Omit<ComponentProps<typeof Plate>, 'withIndex'> {}

export const BasePlate = ({ className, title, description, image, actionBlock }: IBasePlateProps) => {
  const withImage = Boolean(image);
  const withImageAndActionBlock = withImage && Boolean(actionBlock);

  return (
    <div
      className={cn(className, {
        [styles.plateWithImage]: withImage,
        [styles.plateWithImageAndAction]: withImageAndActionBlock,
      })}>
      <PlateContent title={title} description={description} image={image} actionBlock={actionBlock} />
    </div>
  );
};
