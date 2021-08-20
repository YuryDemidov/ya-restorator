import { sortListByPriority } from '~u/helpers';
import { Section } from '~c/Section/Section';
import { Title } from '~c/Title/Title';
import { ConditionsRow } from './ConditionsRow';
import { conditionList } from './conditionList';
import styles from './Conditions.module.scss';

const sortedConditionList = conditionList.sort(sortListByPriority);
const conditionsRowList = sortedConditionList.map((item) => {
  return <ConditionsRow item={item} key={item.id} />;
});

export const Conditions = () => {
  return (
    <Section className={styles.conditions} id="conditions">
      <Title level="h2">Условия сотрудничества</Title>
      <div className={styles.conditionsBlock}>
        {conditionsRowList}
        <p className={styles.conditionsDescribe}>
          Оплата <b>только</b> за выполненные заказы
        </p>
        <p className={styles.conditionsFee}>15%</p>
        <p className={styles.conditionsFee}>35%</p>
      </div>
    </Section>
  );
};
