import { useCallback } from 'react';
import cn from 'classnames';

import styles from './ToggleButton.module.scss';

interface IToggleButtonProps {
  id: string;
  wrapClassName?: string;
  labelContent: React.ReactChild;
  isOn?: boolean;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleButton = ({ id, wrapClassName, labelContent, isOn = false, setState }: IToggleButtonProps) => {
  const changeHandler = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      if ((evt.nativeEvent as MouseEvent).clientX && (evt.nativeEvent as MouseEvent).clientY) {
        (document.activeElement as HTMLElement).blur();
      }
      setState && setState((previousValue) => !previousValue);
    },
    [setState],
  );

  return (
    <div className={cn(styles.wrapper, wrapClassName)}>
      <input
        id={id}
        className={cn('visually-hidden', styles.input)}
        name={id}
        type="checkbox"
        defaultChecked={isOn}
        onChange={changeHandler}
      />
      <label className={styles.label} htmlFor={id}>
        {labelContent}
      </label>
    </div>
  );
};
