import AnimatedNumber from 'animated-number-react';

import { useCalculator } from '~c/Calculator/Calculator';
import { CALCULATOR_CONFIG_VALUES } from '~u/constants/calculatorConfig';
import { formatNumber } from '~u/helpers';
import styles from './Calculator.module.scss';

export const CalculatorOutput = () => {
  const { profit, deliveryByYandex } = useCalculator();

  return (
    <div className={styles.mainOutput}>
      <h4 className={styles.subtitle}>Ваша выручка:</h4>
      {/* TODO Add ids from range components */}
      <output htmlFor="ordersDaily averageCheck delivery advertising promotions period" className={styles.totalIncome}>
        <AnimatedNumber formatValue={formatNumber} value={profit} duration={300} />
      </output>
      <h4 className={styles.subtitle}>Комиссия:</h4>
      <output htmlFor="delivery" className={styles.fee}>
        {(deliveryByYandex ? CALCULATOR_CONFIG_VALUES.maxFee : CALCULATOR_CONFIG_VALUES.minFee) * 100}%
      </output>
    </div>
  );
};
