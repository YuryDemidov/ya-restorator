import { TPeriodKey } from './period';

interface ICalculatorInitialValues {
  ordersDaily: number;
  averageCheck: number;
  deliveryByYandex: boolean;
  adsInApp: boolean;
  promotions: boolean;
  period: TPeriodKey;
}

export const CALCULATOR_INITIAL_VALUES: ICalculatorInitialValues = {
  ordersDaily: 21,
  averageCheck: 2500,
  deliveryByYandex: false,
  adsInApp: false,
  promotions: false,
  period: 'week',
};
