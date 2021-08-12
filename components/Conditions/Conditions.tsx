import cn from 'classnames';

import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';
import { ConditionsRow } from './ConditionsRow';
import { conditionList, Condition } from './conditionList';
import styles from './Conditions.module.scss';

const compareSortByPriority = (a: Condition, b: Condition) => a.priority - b.priority;
const sortedConditionList = conditionList.sort(compareSortByPriority);

const conditionsRowList = sortedConditionList.map((item, index) => {
  return <ConditionsRow item={item} index={index} key={item.id} />;
});

export const Conditions = () => {
  return (
    <Section className={styles.conditions} id="conditions">
      <Title level="h2">Условия сотрудничества</Title>
      <div className={styles.conditionsBlock}>
        {conditionsRowList}
        <p className={styles.conditionsDescribe}>Комиссия</p>
        <p className={cn(styles.conditionsFee, styles.conditionsTariffYellow, styles.conditionsIndentRadiusBottom)}>
          15%
        </p>
        <p className={cn(styles.conditionsFee, styles.conditionsTariffDark, styles.conditionsIndentRadiusBottom)}>
          35%
        </p>
      </div>
    </Section>
  );
};
