import { TPeriodKey } from './periods';

export interface ICalculatorInitialValues {
  readonly ordersDaily: number;
  readonly averageCheck: number;
  readonly deliveryByYandex: boolean;
  readonly adsInApp: boolean;
  readonly promotions: boolean;
  readonly period: TPeriodKey;
}

interface ICalculatorConfigValues {
  readonly advRatio: number;
  readonly saleRatio: number;
  readonly minFee: number;
  readonly maxFee: number;
}

export const CALCULATOR_INITIAL_VALUES: ICalculatorInitialValues = {
  ordersDaily: 21,
  averageCheck: 2500,
  deliveryByYandex: false,
  adsInApp: false,
  promotions: false,
  period: 'week',
};

export const CALCULATOR_CONFIG_VALUES: ICalculatorConfigValues = {
  advRatio: 0.25,
  saleRatio: 0.35,
  minFee: 0.15,
  maxFee: 0.35,
};
