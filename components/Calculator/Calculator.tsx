import { useState, useContext, createContext, useEffect } from 'react';

import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';
import { CalculatorBaseValues } from '~c/Calculator/CalculatorBaseValues';
import { CalculatorAdditionalOptions } from '~c/Calculator/CalculatorAdditionalOptions';
import { CalculatorResults } from '~c/Calculator/CalculatorResults';
import {
  CALCULATOR_CONFIG_VALUES,
  CALCULATOR_INITIAL_VALUES,
  ICalculatorInitialValues,
} from '~u/constants/calculatorConfig';
import { TPeriodKey, PERIODS } from '~u/constants/periods';
import styles from './Calculator.module.scss';

interface ICalculatorContext extends ICalculatorInitialValues {
  profit: number;
  income: number;
  setOrdersDaily: React.Dispatch<React.SetStateAction<number>>;
  setAverageCheck: React.Dispatch<React.SetStateAction<number>>;
  setDeliveryByYandex: React.Dispatch<React.SetStateAction<boolean>>;
  setAdsInApp: React.Dispatch<React.SetStateAction<boolean>>;
  setPromotions: React.Dispatch<React.SetStateAction<boolean>>;
  setPeriod: React.Dispatch<React.SetStateAction<TPeriodKey>>;
}

const defaultValue: ICalculatorContext = {
  ...CALCULATOR_INITIAL_VALUES,
  profit: 0,
  income: 0,
  setOrdersDaily: () => undefined,
  setAverageCheck: () => undefined,
  setDeliveryByYandex: () => undefined,
  setAdsInApp: () => undefined,
  setPromotions: () => undefined,
  setPeriod: () => undefined,
};

const CalculatorContext = createContext(defaultValue);
export const useCalculator = (): ICalculatorContext => useContext(CalculatorContext);

export const Calculator = () => {
  const [ordersDaily, setOrdersDaily] = useState(CALCULATOR_INITIAL_VALUES.ordersDaily);
  const [averageCheck, setAverageCheck] = useState(CALCULATOR_INITIAL_VALUES.averageCheck);
  const [deliveryByYandex, setDeliveryByYandex] = useState(CALCULATOR_INITIAL_VALUES.deliveryByYandex);
  const [adsInApp, setAdsInApp] = useState(CALCULATOR_INITIAL_VALUES.adsInApp);
  const [promotions, setPromotions] = useState(CALCULATOR_INITIAL_VALUES.promotions);
  const [period, setPeriod] = useState<TPeriodKey>(CALCULATOR_INITIAL_VALUES.period);
  const [income, setIncome] = useState(0);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    const fee = deliveryByYandex ? CALCULATOR_CONFIG_VALUES.maxFee : CALCULATOR_CONFIG_VALUES.minFee;
    const newIncome = ordersDaily * averageCheck * PERIODS[period].duration;
    const advSum = adsInApp ? newIncome * CALCULATOR_CONFIG_VALUES.advRatio : 0;
    const saleSum = promotions ? newIncome * CALCULATOR_CONFIG_VALUES.saleRatio : 0;
    const newProfit = (newIncome + advSum + saleSum) * (1 - fee);
    setIncome(newIncome);
    setProfit(newProfit);
  }, [deliveryByYandex, adsInApp, promotions, ordersDaily, averageCheck, period]);

  const submitHandler = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <Section id="calculator" className={styles.calculatorSection}>
      <Title className={styles.headline} level="h2">
        Выгода в цифрах
      </Title>
      <form className={styles.calculator} autoComplete="off" method="post" onSubmit={submitHandler}>
        <CalculatorContext.Provider
          value={{
            profit,
            income,
            ordersDaily,
            setOrdersDaily,
            averageCheck,
            setAverageCheck,
            deliveryByYandex,
            setDeliveryByYandex,
            adsInApp,
            setAdsInApp,
            promotions,
            setPromotions,
            period,
            setPeriod,
          }}>
          <CalculatorBaseValues />
          <CalculatorResults />
          <CalculatorAdditionalOptions />
        </CalculatorContext.Provider>
      </form>
      <p className={styles.annotation}>
        Пример расчета носит исключительно информационный характер и не является публичной офертой
      </p>
    </Section>
  );
};
