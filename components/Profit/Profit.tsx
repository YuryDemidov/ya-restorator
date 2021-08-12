import { SectionWithPlates } from '~c/SectionWithPlates/SectionWithPlates';
import { plateList } from './ProfitPlates';

export const Profit = () => {
  return <SectionWithPlates title="Что вы получаете" plateList={plateList} />;
};
