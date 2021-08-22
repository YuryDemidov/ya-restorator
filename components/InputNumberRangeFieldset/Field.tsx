import cn from 'classnames';

import { InputNumberPartField } from './InputNumberPartField';
import { InputRangePartField } from './InputRangePartField';
import { IBasicInputProps } from './InputNumberRangeFieldset';
import styles from './InputNumberRangeFieldset.module.scss';

export interface IFieldProps extends IBasicInputProps {
  type: 'number' | 'range';
  label: string;
  numberDataYmGoal?: string;
  rangeDataYmGoal?: string;
}

export const Field = ({
  id,
  type,
  min,
  max,
  value,
  units,
  onChange,
  onBlur,
  label,
  step,
  numberDataYmGoal,
  rangeDataYmGoal,
}: IFieldProps) => {
  const isNumber = type === 'number';

  return (
    <label className={cn(styles.field, { [styles.fieldNumber]: isNumber, [styles.fieldRange]: !isNumber })}>
      <span className={styles.fieldText}>{label}</span>
      {isNumber ? (
        <InputNumberPartField
          dataYmGoal={numberDataYmGoal}
          id={id}
          min={min}
          max={max}
          step={step}
          value={value}
          units={units}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <InputRangePartField
          id={id}
          dataYmGoal={rangeDataYmGoal}
          min={min}
          max={max}
          step={step}
          value={value}
          units={units}
          onChange={onChange}
        />
      )}
    </label>
  );
};
