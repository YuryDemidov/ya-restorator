export type TPeriodKey = 'week' | 'month' | 'quarterYear' | 'halfYear';

type TPeriod = {
  duration: number;
  readableDescription: string;
};

type TPeriodsMap = Record<TPeriodKey, TPeriod>;

export const PERIODS: TPeriodsMap = {
  week: {
    duration: 7,
    readableDescription: 'Неделя',
  },
  month: {
    duration: 30,
    readableDescription: 'Месяц',
  },
  quarterYear: {
    duration: 91,
    readableDescription: 'Квартал',
  },
  halfYear: {
    duration: 180,
    readableDescription: 'Полгода',
  },
};
