import { ComponentProps } from 'react';

import { Plate } from '~c/Plate/Plate';
import { PlateLayout } from '~c/PlateLayout/PlateLayout';
import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';

export interface IPlate extends ComponentProps<typeof Plate> {
  key: number;
}

interface ISectionWithPlatesProps
  extends Pick<ComponentProps<typeof PlateLayout>, 'withIndexes' | 'desktopMaxElemsInRow' | 'plateList'> {
  title?: React.ReactChild;
}

export const SectionWithPlates = ({
  title,
  plateList,
  withIndexes = false,
  desktopMaxElemsInRow = 2,
}: ISectionWithPlatesProps) => {
  return (
    <Section>
      <Title level="h2">{title}</Title>
      <PlateLayout withIndexes={withIndexes} desktopMaxElemsInRow={desktopMaxElemsInRow} plateList={plateList} />
    </Section>
  );
};
