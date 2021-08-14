import cn from 'classnames';

import { Plate } from '~c/Plate/Plate';
import { IPlate } from '~c/SectionWithPlates/SectionWithPlates';
import styles from './PlateLayout.module.scss';

interface IPlateLayoutProps {
  className?: string;
  withIndexes?: boolean;
  desktopMaxElemsInRow?: 2 | 3;
  plateList: IPlate[];
  sectionType?: IPlate['sectionType'];
}

export const PlateLayout = ({
  className,
  withIndexes = false,
  desktopMaxElemsInRow = 2,
  plateList,
  sectionType,
}: IPlateLayoutProps) => {
  const Tag = withIndexes ? 'ol' : 'div';

  return (
    <Tag
      className={cn(
        styles.layout,
        {
          [styles.layoutNumbered]: withIndexes,
          [styles.layoutMedium]: desktopMaxElemsInRow === 2,
          [styles.layoutSmall]: desktopMaxElemsInRow === 3,
        },
        className,
      )}>
      {plateList.map(({ key, ...otherProps }) => {
        return <Plate key={key} {...otherProps} withIndex={withIndexes} sectionType={sectionType} />;
      })}
    </Tag>
  );
};
