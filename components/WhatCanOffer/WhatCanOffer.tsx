import { SectionWithPlates } from '~c/SectionWithPlates/SectionWithPlates';
import { plateList } from './WhatCanOfferPlates';

export const WhatCanOffer = () => {
  return <SectionWithPlates title="Что еще можем предложить" plateList={plateList} sectionType="WhatCanOffer" />;
};
