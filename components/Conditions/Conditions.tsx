import cn from 'classnames';

import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';
import styles from './Conditions.module.scss';
import { conditionList, Condition } from './conditionList';
import { ConditionTextItem } from './ConditionTextItem';
import { ConditionTariffItem } from './CoditionTariffItem';

const compareSortByPriority = (a: Condition, b: Condition) => a.priority - b.priority;
const sortedConditionList = conditionList.sort(compareSortByPriority);

const conditionTextList = sortedConditionList.map((item) => {
  return <ConditionTextItem text={item.condition} footnote={item.footnote || ''} key={item.id} />;
});

const conditionTariff15List = sortedConditionList.map((item) => {
  return <ConditionTariffItem isInclude={item.tariff15} key={item.id} />;
});

const conditionTariff35List = sortedConditionList.map((item) => {
  return <ConditionTariffItem isInclude={item.tariff35} key={item.id} />;
});

export const Conditions = () => {
  return (
    <Section className={styles.conditions}>
      <Title level="h2">Условия сотрудничества</Title>
      <div className={styles.conditionsBlock}>
        <div className={styles.conditionsList}>
          {conditionTextList}
          <p className={styles.conditionsDescribe}>Комиссия</p>
        </div>
        <div className={cn(styles.conditionsTariff, styles.conditionsTariffYellow)}>
          {conditionTariff15List}
          <p className={styles.conditionsFee}>15%</p>
        </div>
        <div className={cn(styles.conditionsTariff, styles.conditionsTariffDark)}>
          {conditionTariff35List}
          <p className={styles.conditionsFee}>35%</p>
        </div>
      </div>
    </Section>
  );
};
