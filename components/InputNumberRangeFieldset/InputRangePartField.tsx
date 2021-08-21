import { CSSProperties } from 'react';

import { IBasicInputProps } from './InputNumberRangeFieldset';
import { splitNumberIntoDigits } from '~u/helpers';
import isFirefox from '~u/functions/isFirefox';
import styles from './InputNumberRangeFieldset.module.scss';

interface IPseudoTrackProps {
  value: number;
  min: number;
  max: number;
}

const generateBg = (value: number, min: number, max: number): CSSProperties => {
  const percent = ((value - min) / (max - min)) * 100;
  return {
    background: `linear-gradient(to right, #FFCC00 ${percent}%, #E6E9F0 ${percent}% 100%)`,
  };
};

const PseudoTrack = ({ value, min, max }: IPseudoTrackProps) => {
  const style = generateBg(value, min, max);

  return <span className={styles.pseudoTrack} style={style} />;
};

export const InputRangePartField = ({ min, max, step, value, units, onChange }: IBasicInputProps) => {
  const handleFocus = () => {
    !isFirefox() && setTimeout(() => (document.activeElement as HTMLElement).blur());
  };

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const restoreScroll = () => {
    document.body.style.overflow = '';
  };

  return (
    <>
      <PseudoTrack value={value} min={min} max={max} />
      <input
        className={styles.fieldRangeInput}
        type="range"
        name="range"
        autoComplete="off"
        size={value.toString().length + 1}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        onMouseDown={handleFocus}
        onTouchStart={disableScroll}
        onTouchEnd={restoreScroll}
      />
      <span className={styles.rangeStart}>{[splitNumberIntoDigits(min), units].join(' ')}</span>
      <span className={styles.rangeEnd}>{[splitNumberIntoDigits(max), units].join(' ')}</span>
    </>
  );
};
