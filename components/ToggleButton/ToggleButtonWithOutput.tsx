import { ComponentProps } from 'react';
import cn from 'classnames';

import { ToggleButton } from '~c/ToggleButton/ToggleButton';
import styles from './ToggleButton.module.scss';

interface IToggleButtonWithOutputProps extends ComponentProps<typeof ToggleButton> {
  description: React.ReactChild;
  output: string;
}

export const ToggleButtonWithOutput = ({
  id,
  labelContent,
  description,
  output,
  isOn,
  setState,
  dataYmGoal,
}: IToggleButtonWithOutputProps) => {
  return (
    <div className={styles.block}>
      <ToggleButton dataYmGoal={dataYmGoal} id={id} labelContent={labelContent} isOn={isOn} setState={setState} />
      <p className={styles.output}>
        <span className={styles.description}>{description}</span>
        <output
          className={cn(styles.outputText, { [styles.outputTextVisible]: isOn })}
          htmlFor={id}
          aria-hidden={!isOn}>
          {output}
        </output>
      </p>
    </div>
  );
};
