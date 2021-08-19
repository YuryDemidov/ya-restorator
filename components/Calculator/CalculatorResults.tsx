import { useCalculator } from '~c/Calculator/Calculator';
import { CalculatorOutput } from '~c/Calculator/CalculatorOutput';
import { CalculatorFeaturesList } from '~c/Calculator/CalculatorFeaturesList';
import { TabRadioInput, TTabRadioInputValue } from '~c/TabRadioInput/TabRadioInput';
import { PERIODS, TPeriodKey } from '~u/constants/periods';
import styles from '~c/Calculator/Calculator.module.scss';

const periodOptions: TTabRadioInputValue[] = [];
(Object.keys(PERIODS) as Array<TPeriodKey>).forEach((periodName) => {
  const period = PERIODS[periodName];
  periodOptions.push({
    label: period.readableDescription,
    value: periodName,
  });
});

export const CalculatorResults = () => {
  const { period, setPeriod } = useCalculator();

  return (
    <div className={styles.results}>
      <h3 className="visually-hidden">Результаты расчётов</h3>
      <TabRadioInput
        name="period"
        labelContent="Период:"
        values={periodOptions}
        defaultChecked={period}
        setState={setPeriod}
      />
      <CalculatorOutput />
      <CalculatorFeaturesList />
    </div>
  );
};
