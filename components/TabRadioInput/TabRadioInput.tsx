import React, { useCallback } from 'react';
import cn from 'classnames';

import { TPeriodKey } from '~u/constants/periods';
import { ymHandler } from '~u/helpers';
import styles from './TabRadioInput.module.scss';

export type TTabRadioInputValue = {
  label: string;
  value: TPeriodKey;
  dataYmGoal?: string;
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
      ymHandler(evt);
      setState && setState(() => evt.target.value as TPeriodKey);
    },
    [setState],
  );

  return (
    <fieldset id={name} className={styles.container}>
      <legend className={styles.legend}>{labelContent}</legend>
      {values.map(({ value, label, dataYmGoal }, i) => {
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
              data-ymgoal={dataYmGoal}
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
