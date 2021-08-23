import { Field } from './Field';
import { Tooltip } from '~c/Tooltip/Tooltip';
import styles from './InputNumberRangeFieldset.module.scss';

export interface IBasicInputProps {
  id: string;
  value: number;
  min: number;
  max: number;
  step: number;
  units?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  dataYmGoal?: string;
  numberDataYmGoal?: string;
  rangeDataYmGoal?: string;
}

export interface IInputNumberRangeFieldset extends IBasicInputProps {
  legend: string;
  label: string;
  moreInfo?: React.ReactNode;
  setOrdersDaily?: (x: number) => void;
}

export const InputNumberRangeFieldset = ({
  id,
  legend,
  moreInfo,
  min,
  max,
  value,
  units,
  label,
  step,
  setOrdersDaily,
  numberDataYmGoal,
  rangeDataYmGoal,
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

  const legendId = `${id}Legend`;

  return (
    <fieldset className={styles.fieldset} aria-labelledby={legendId}>
      <div className={styles.legend}>
        <span id={legendId} className={styles.legendText}>
          {legend}
        </span>
        {moreInfo && (
          <div className={styles.legendIconBox}>
            <Tooltip id={`${id}Tooltip`}>{moreInfo}</Tooltip>
          </div>
        )}
      </div>
      <Field
        numberDataYmGoal={numberDataYmGoal}
        id={id}
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
        rangeDataYmGoal={rangeDataYmGoal}
        id={id}
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
