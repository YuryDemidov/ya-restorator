import cn from 'classnames';

import { Icon } from '~c/Icon/Icon';
import styles from './Conditions.module.scss';

interface IConditionTariffItemProps {
  isInclude: boolean;
  className?: string;
}
export const ConditionTariffItem = ({ isInclude, className = '' }: IConditionTariffItemProps) => {
  return (
    <div className={cn(styles.conditionsTariffItem, className)}>
      {isInclude ? (
        <Icon type="checkMarkCircle" size="l" className={styles.icon} />
      ) : (
        <Icon type="crossCircle" size="l" className={styles.icon} />
      )}
    </div>
  );
};
