import cn from 'classnames';

import { InputNumberPartField } from './InputNumberPartField';
import { InputRangePartField } from './InputRangePartField';
import { IBasicInputProps } from './InputNumberRangeFieldset';
import styles from './InputNumberRangeFieldset.module.scss';

export interface IFieldProps extends IBasicInputProps {
  type: 'number' | 'range';
  label: string;
}

export const Field = ({ type, min, max, value, units, onChange, label, step }: IFieldProps) => {
  const isNumber = type === 'number';

  return (
    <label className={cn(styles.field, { [styles.fieldNumber]: isNumber, [styles.fieldRange]: !isNumber })}>
      <span className={styles.fieldText}>{label}</span>
      {isNumber ? (
        <InputNumberPartField min={min} max={max} step={step} value={value} units={units} onChange={onChange} />
      ) : (
        <InputRangePartField min={min} max={max} step={step} value={value} units={units} onChange={onChange} />
      )}
    </label>
  );
};
