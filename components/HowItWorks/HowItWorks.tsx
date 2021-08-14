import { SectionWithPlates } from '~c/SectionWithPlates/SectionWithPlates';
import { plateList } from './HowItWorksPlates';

export const HowItWorks = () => {
  return (
    <SectionWithPlates
      title="Как это работает"
      plateList={plateList}
      withIndexes
      desktopMaxElemsInRow={3}
      sectionType="HowItWorks"
    />
  );
};
