import { useRef, useState, useEffect, useCallback } from 'react';

import { formatNumber, ymHandler } from '~u/helpers';
import { IBasicInputProps } from './InputNumberRangeFieldset';
import styles from './InputNumberRangeFieldset.module.scss';

export const InputNumberPartField = ({
  id,
  min,
  max,
  step,
  value,
  units,
  onBlur,
  onChange,
  dataYmGoal,
}: IBasicInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [outputFlag, setOutputFlag] = useState(true);

  const setSelectOnInput = (ref: HTMLInputElement | null) => {
    if (ref) {
      ref.focus();
      ref.select();
    }
  };

  const setOutputFlagToFalse = useCallback(() => setOutputFlag(false), []);
  const setOutputFlagToTrue = useCallback(() => setOutputFlag(true), []);

  const inputBlurHandler = (evt: React.FocusEvent<HTMLInputElement>) => {
    setOutputFlagToTrue();
    ymHandler(evt);
    onBlur && onBlur(evt);
  };

  useEffect(() => {
    if (!outputFlag) setSelectOnInput(inputRef.current);
  }, [outputFlag]);

  return (
    <>
      {outputFlag ? (
        <output
          tabIndex={0}
          htmlFor={id}
          onFocus={setOutputFlagToFalse}
          onClick={setOutputFlagToFalse}
          className={styles.fieldNumberOutput}>
          {formatNumber(value, false, false)}
        </output>
      ) : (
        <input
          data-ymgoal={dataYmGoal}
          className={styles.fieldNumberInput}
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          onBlur={inputBlurHandler}
          name="number"
          autoComplete="off"
          size={value.toString().length + 1}
          ref={inputRef}
        />
      )}
      {units && <span className={styles.fieldNumberCurrency}>{units}</span>}
    </>
  );
};
