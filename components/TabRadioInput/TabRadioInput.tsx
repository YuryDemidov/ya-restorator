import React, { useCallback } from 'react';
import cn from 'classnames';

import { TPeriodKey } from '~u/constants/periods';
import styles from './TabRadioInput.module.scss';

export type TTabRadioInputValue = {
  label: string;
  value: TPeriodKey;
};

interface ITabRadioInputProps {
  name: string;
  values: TTabRadioInputValue[];
  labelContent: React.ReactChild;
  defaultChecked: TPeriodKey;
  setState?: React.Dispatch<React.SetStateAction<TPeriodKey>>;
}

export const TabRadioInput = ({ name, values, defaultChecked, labelContent, setState }: ITabRadioInputProps) => {
  const changeHandler = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      if ((evt.nativeEvent as MouseEvent).clientX && (evt.nativeEvent as MouseEvent).clientY) {
        (document.activeElement as HTMLElement).blur();
      }
      setState && setState(() => evt.target.value as TPeriodKey);
    },
    [setState],
  );

  return (
    <fieldset id={name} className={styles.container}>
      <legend className={styles.legend}>{labelContent}</legend>
      {values.map(({ value, label }, i) => {
        const id = `${name}${i}`;
        return (
          <React.Fragment key={value}>
            <input
              id={id}
              className={cn(styles.input, 'visually-hidden')}
              name={name}
              type="radio"
              value={value}
              defaultChecked={defaultChecked === value}
              onChange={changeHandler}
            />
            <label className={styles.label} htmlFor={id}>
              {label}
            </label>
          </React.Fragment>
        );
      })}
    </fieldset>
  );
};
