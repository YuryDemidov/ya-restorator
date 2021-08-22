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
      <h3 className={styles.title}>Дополнительные инструменты</h3>
      <ToggleButtonWithOutput
        dataYmGoal="inputCheckboxCalcAdvertising"
        id="advertising"
        labelContent={
          <BlockWithTooltip
            tooltipText="Удобные инструменты для продвижения вашего ресторана в личном кабинете"
            noMargin>
            Реклама в приложении
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
          <BlockWithTooltip
            tooltipText="В личном кабинете вы можете создавать акции для пользователей: 1+1, скидка на меню или блюдо в подарок"
            noMargin>
            Скидки и акции
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
