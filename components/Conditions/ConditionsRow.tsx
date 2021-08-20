import { Condition } from './conditionList';
import { ConditionTextItem } from './ConditionTextItem';
import { ConditionTariffItem } from './CoditionTariffItem';
import styles from './Conditions.module.scss';

interface IConditionProps {
  item: Condition;
}

export const ConditionsRow = ({ item }: IConditionProps) => {
  return (
    <>
      <ConditionTextItem text={item.condition} footnote={item.footnote || ''} />
      <ConditionTariffItem isInclude={item.tariff15} className={styles.conditionsTariffYellow} />
      <ConditionTariffItem isInclude={item.tariff35} className={styles.conditionsTariffDark} />
    </>
  );
};
