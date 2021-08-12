import cn from 'classnames';

import { Condition } from './conditionList';
import { ConditionTextItem } from './ConditionTextItem';
import { ConditionTariffItem } from './CoditionTariffItem';
import styles from './Conditions.module.scss';

interface IConditionProps {
  item: Condition;
  index: number;
}

export const ConditionsRow = ({ item, index }: IConditionProps) => {
  let isFirst = !index;

  return (
    <>
      <ConditionTextItem text={item.condition} footnote={item.footnote || ''} />
      <ConditionTariffItem
        isInclude={item.tariff15}
        className={cn(styles.conditionsTariffYellow, { [styles.conditionsIndentRadiusTop]: isFirst })}
      />
      <ConditionTariffItem
        isInclude={item.tariff35}
        className={cn(styles.conditionsTariffDark, { [styles.conditionsIndentRadiusTop]: isFirst })}
      />
    </>
  );
};
