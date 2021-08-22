import { CSSProperties } from 'react';

import { IBasicInputProps } from './InputNumberRangeFieldset';
import { isFirefox, formatNumber, ymHandler } from '~u/helpers';
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

export const InputRangePartField = ({ id, min, max, step, value, onChange, dataYmGoal }: IBasicInputProps) => {
  const handleFocus = (event: React.SyntheticEvent<HTMLElement>) => {
    ymHandler(event);
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
        data-ymgoal={dataYmGoal}
        id={id}
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
      <span className={styles.rangeStart}>{formatNumber(min, false, true)}</span>
      <span className={styles.rangeEnd}>{formatNumber(max, false, true)}</span>
    </>
  );
};
