import { useRef, useState, useEffect, useCallback } from 'react';

import { splitNumberIntoDigits } from '~u/helpers';
import { IBasicInputProps } from './InputNumberRangeFieldset';
import styles from './InputNumberRangeFieldset.module.scss';

export const InputNumberPartField = ({ min, max, step, value, units, onChange }: IBasicInputProps) => {
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

  useEffect(() => {
    if (!outputFlag) setSelectOnInput(inputRef.current);
  }, [outputFlag]);

  return (
    <>
      {outputFlag ? (
        <output
          tabIndex={0}
          htmlFor="number range"
          onFocus={setOutputFlagToFalse}
          onClick={setOutputFlagToFalse}
          className={styles.fieldNumberOutput}>
          {splitNumberIntoDigits(value)}
        </output>
      ) : (
        <input
          className={styles.fieldNumberInput}
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          onBlur={setOutputFlagToTrue}
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
