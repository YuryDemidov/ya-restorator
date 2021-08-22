import { useCalculator } from '~c/Calculator/Calculator';
import { BlockWithTooltip } from '~c/BlockWithTooltip/BlockWithTooltip';
import {
  InputNumberRangeFieldset,
  IInputNumberRangeFieldset,
} from '~c/InputNumberRangeFieldset/InputNumberRangeFieldset';
import { ToggleButton } from '~c/ToggleButton/ToggleButton';
import styles from './Calculator.module.scss';

const ordersDailyData: IInputNumberRangeFieldset = {
  id: 'ordersDaily',
  value: 0,
  min: 1,
  max: 40,
  step: 1,
  legend: 'Укажите ежедневное кол-во заказов',
  label: 'Введите нужное количество c помощью клавиатуры или выставите бегунок',
  units: '',
  moreInfo: '',
  numberDataYmGoal: 'inputNumberCalcDailyOrders',
  rangeDataYmGoal: 'inputRangeCalcDailyOrders',
};

const averageCheckData: IInputNumberRangeFieldset = {
  id: 'averageCheck',
  value: 0,
  min: 10,
  max: 10000,
  step: 1,
  legend: 'Ваш средний чек',
  label: 'Введите ваш текущий средний чек с клавиатуры или используйте бегунок',
  units: '₽',
  moreInfo: '',
  numberDataYmGoal: 'inputNumberCalcAverageCheck',
  rangeDataYmGoal: 'inputRangeCalcAverageCheck',
};

export const CalculatorBaseValues = () => {
  const { ordersDaily, setOrdersDaily, averageCheck, setAverageCheck, deliveryByYandex, setDeliveryByYandex } =
    useCalculator();

  return (
    <div className={styles.baseValues}>
      <h3 className={styles.title}>Укажите параметры для рассчета</h3>

      <InputNumberRangeFieldset {...ordersDailyData} value={ordersDaily} setOrdersDaily={setOrdersDaily} />

      <InputNumberRangeFieldset {...averageCheckData} value={averageCheck} setOrdersDaily={setAverageCheck} />

      <ToggleButton
        dataYmGoal="inputCheckboxCalcDelivery"
        id="delivery"
        wrapClassName={styles.deliveryToggle}
        labelContent={
          <BlockWithTooltip tooltipText="Вы можете воспользоваться доставкой партнерами Яндекс.Еды" noMargin>
            Доставка Яндекс.Еды
          </BlockWithTooltip>
        }
        isOn={deliveryByYandex}
        setState={setDeliveryByYandex}
      />
    </div>
  );
};
