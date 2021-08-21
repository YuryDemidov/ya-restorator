import { Tooltip } from '~c/Tooltip/Tooltip';
import { Field } from './Field';
import styles from './InputNumberRangeFieldset.module.scss';

export interface IBasicInputProps {
  value: number;
  min: number;
  max: number;
  step: number;
  units: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
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
  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = +evt.target.value;
    evt.target.value = `${newValue}`;

    if (newValue > max) {
      newValue = max;
    } else if (newValue < min && evt.target.value.length === `${min}`.length) {
      newValue = min;
    }

    if (setOrdersDaily) setOrdersDaily(newValue);
  };

  const blurHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (+evt.target.value < min) {
      evt.target.value = `${min}`;
      if (setOrdersDaily) setOrdersDaily(+evt.target.value);
    }
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
        onBlur={blurHandler}
        onChange={changeHandler}
      />
      <Field
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        units={units}
        label={label}
        onChange={changeHandler}
      />
    </fieldset>
  );
};
