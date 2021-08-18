import { useState, useContext, createContext, useEffect } from 'react';

import { TestCalcInnerComponent } from './TestCalcInnerComponent';
import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';
import { BlockWithTooltip } from '~c/BlockWithTooltip/BlockWithTooltip';
import { TPeriodKey, PERIODS } from '~u/constants/period';
import { CALCULATOR_INITIAL_VALUES } from '~u/constants/calculatorInitialValues';
import {
  InputNumberRangeFieldset,
  IInputNumberRangeFieldset,
} from '~c/InputNumberRangeFieldset/InputNumberRangeFieldset';
import styles from './Calculator.module.scss';

const ordersDailyData: IInputNumberRangeFieldset = {
  value: 0,
  min: 1,
  max: 40,
  step: 1,
  legend: 'Укажите ежедневное кол-во заказов',
  label: 'Введите нужное количество c помощью клавиатуры или выставите бегунок',
  units: '',
  moreInfo: 'Это рыба текста для всплывающего тултипа',
};

const averageCheckData: IInputNumberRangeFieldset = {
  value: 0,
  min: 10,
  max: 10000,
  step: 1,
  legend: 'Ваш средний чек',
  label: 'Введите ваш текущий средний чек с клавиатуры или используйте бегунок',
  units: '₽',
  moreInfo: 'Это рыба текста для всплывающего тултипа',
};

const defaultIncomeValue: number = 0;
const CalculatorContext = createContext(defaultIncomeValue);
export const useCalculator = (): number => useContext(CalculatorContext);

export const Calculator = () => {
  const [ordersDaily, setOrdersDaily] = useState(CALCULATOR_INITIAL_VALUES.ordersDaily);
  const [averageCheck, setAverageCheck] = useState(CALCULATOR_INITIAL_VALUES.averageCheck);
  const [deliveryByYandex /* setDeliveryByYandex */] = useState(CALCULATOR_INITIAL_VALUES.deliveryByYandex);
  const [adsInApp /* setAdsInApp */] = useState(CALCULATOR_INITIAL_VALUES.adsInApp);
  const [promotions /* setPromotions */] = useState(CALCULATOR_INITIAL_VALUES.promotions);
  const [period /* setPeriod */] = useState<TPeriodKey>(CALCULATOR_INITIAL_VALUES.period);
  const [income, setIncome] = useState(defaultIncomeValue);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    // FIXME: временный расчет, чтобы цифры двигались
    const newIncome = ordersDaily * averageCheck * PERIODS[period].duration;
    const newProfit = ordersDaily * averageCheck * PERIODS[period].duration * 0.85;
    setIncome(newIncome);
    setProfit(newProfit);
  }, [ordersDaily, averageCheck, period]);

  return (
    <CalculatorContext.Provider value={income}>
      <Section id="calculator" className={styles.calculatorSection}>
        <Title className={styles.title}>Выгода в цифрах</Title>
        <div className={styles.calculator}>
          <div className={styles.baseValues}>
            <BlockWithTooltip
              tooltipText={
                <>
                  Подключите инструменты для увеличения объемов вашего бизнеса. В калькуляторе используются средние
                  значения на основе статистики за последний год.
                </>
              }>
              Основные параметры
            </BlockWithTooltip>

            <InputNumberRangeFieldset {...ordersDailyData} value={ordersDaily} setOrdersDaily={setOrdersDaily} />

            <InputNumberRangeFieldset {...averageCheckData} value={averageCheck} setOrdersDaily={setAverageCheck} />
          </div>
          <div className={styles.results}>
            <div className={styles.resultsWrapper}>
              <p>ordersDaily: {ordersDaily}</p>
              <p>averageCheck: {averageCheck}</p>
              <p>deliveryByYandex: {deliveryByYandex.toString()}</p>
              <p>adsInApp: {adsInApp.toString()}</p>
              <p>promotions: {promotions.toString()}</p>
              <p>period: {period}</p>
              {/* FIXME: Пример использования toLocaleString */}
              <p>income: {income.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
              <p>profit: {profit.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
            </div>
          </div>
          <div className={styles.additional}>
            <BlockWithTooltip
              tooltipText={
                <>
                  Подключите инструменты для увеличения объемов вашего бизнеса. В калькуляторе используются средние
                  значения на основе статистики за последний год.
                </>
              }>
              Дополнительные инструменты
            </BlockWithTooltip>
            <TestCalcInnerComponent value={ordersDaily} onChange={setOrdersDaily} />
          </div>
        </div>
        <p className={styles.annotation}>
          Пример расчета носит исключительно информационный характер и не является публичной офертой
        </p>
      </Section>
    </CalculatorContext.Provider>
  );
};
