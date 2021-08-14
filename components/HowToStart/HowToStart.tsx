import { SectionWithPlates } from '~c/SectionWithPlates/SectionWithPlates';
import { plateList } from './HowToStartPlates';

export const HowToStart = () => {
  return (
    <SectionWithPlates title="Три шага, чтобы начать" plateList={plateList} withIndexes desktopMaxElemsInRow={3} />
  );
};
