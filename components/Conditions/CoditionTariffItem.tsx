import cn from 'classnames';

import styles from './Conditions.module.scss';
import { Icon } from '~c/Icon/Icon';

interface IConditionTariffItemProps {
  isInclude: boolean;
  className?: string;
}
export const ConditionTariffItem = ({ isInclude, className = '' }: IConditionTariffItemProps) => {
  return (
    <div className={cn(styles.conditionsTariffItem, className)}>
      {isInclude ? (
        <Icon type="checkMark" size="l" className={styles.icon} />
      ) : (
        <Icon type="cross" size="l" className={styles.icon} />
      )}
    </div>
  );
};
