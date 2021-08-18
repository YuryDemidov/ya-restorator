import { Tooltip } from '~c/Tooltip/Tooltip';
import { Field } from './Field';
import styles from './InputNumberRangeFieldset.module.scss';

export interface IBasicInputProps {
  value: number;
  min: number;
  max: number;
  step: number;
  units: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export interface IInputNumberRangeFieldset extends IBasicInputProps {
  legend: string;
  label: string;
  moreInfo?: React.ReactNode;
  setOrdersDaily?: (x: number) => void;
}

export const InputNumberRangeFieldset = ({
  legend,
  moreInfo,
  min,
  max,
  value,
  units,
  label,
  step,
  setOrdersDaily,
}: IInputNumberRangeFieldset) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +event.target.value;
    if (setOrdersDaily) setOrdersDaily(newValue);
  };

  return (
    <fieldset className={styles.fieldset}>
      <div className={styles.legend}>
        <legend className={styles.legendText}>{legend}</legend>
        {moreInfo && (
          <div className={styles.legendIconBox}>
            <Tooltip>{moreInfo}</Tooltip>
          </div>
        )}
      </div>
      <Field
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        units={units}
        label={label}
        onChange={onChangeHandler}
      />
      <Field
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        units={units}
        label={label}
        onChange={onChangeHandler}
      />
    </fieldset>
  );
};
