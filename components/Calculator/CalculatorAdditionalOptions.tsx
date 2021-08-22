import { useCalculator } from '~c/Calculator/Calculator';
import { BlockWithTooltip } from '~c/BlockWithTooltip/BlockWithTooltip';
import { ToggleButtonWithOutput } from '~c/ToggleButton/ToggleButtonWithOutput';
import { CALCULATOR_CONFIG_VALUES } from '~u/constants/calculatorConfig';
import { formatNumber } from '~u/helpers';
import styles from '~c/Calculator/Calculator.module.scss';

export const CalculatorAdditionalOptions = () => {
  const { income, adsInApp, setAdsInApp, promotions, setPromotions } = useCalculator();

  return (
    <div className={styles.additional}>
      <BlockWithTooltip
        tooltipText={
          <>
            Подключите инструменты для увеличения объемов вашего бизнеса. В калькуляторе используются средние значения
            на основе статистики за последний год.
          </>
        }>
        <h3 className={styles.title}>Дополнительные инструменты</h3>
      </BlockWithTooltip>
      <ToggleButtonWithOutput
        dataYmGoal="inputCheckboxCalcAdvertising"
        id="advertising"
        labelContent={
          // TODO Add tooltip text
          <BlockWithTooltip tooltipText="Здесь должен быть текст" noMargin>
            Реклама в приложении
          </BlockWithTooltip>
        }
        description={
          <>
            <b className={styles.textHighlight}>≈{CALCULATOR_CONFIG_VALUES.advRatio * 100}%</b> к выручке
          </>
        }
        output={`+ ${formatNumber(income * CALCULATOR_CONFIG_VALUES.advRatio)}`}
        isOn={adsInApp}
        setState={setAdsInApp}
      />
      <ToggleButtonWithOutput
        dataYmGoal="inputCheckboxCalcPromotion"
        id="promotions"
        labelContent={
          // TODO Add tooltip text
          <BlockWithTooltip tooltipText="Здесь должен быть текст" noMargin>
            Акции, скидки, мотивация
          </BlockWithTooltip>
        }
        description={
          <>
            <b className={styles.textHighlight}>≈{CALCULATOR_CONFIG_VALUES.saleRatio * 100}%</b> к выручке
          </>
        }
        output={`+ ${formatNumber(income * CALCULATOR_CONFIG_VALUES.saleRatio)}`}
        isOn={promotions}
        setState={setPromotions}
      />
    </div>
  );
};
