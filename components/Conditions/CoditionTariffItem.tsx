import styles from './Conditions.module.scss';
import { Icon } from '~c/Icon/Icon';

interface IConditionTariffItemProps {
  isInclude: boolean;
}
export const ConditionTariffItem = ({ isInclude }: IConditionTariffItemProps) => {
  return (
    <div className={styles.conditionsTariffItem}>
      {isInclude ? (
        <Icon type="checkMark" size="l" className={styles.icon} />
      ) : (
        <Icon type="cross" size="l" className={styles.icon} />
      )}
    </div>
  );
};
