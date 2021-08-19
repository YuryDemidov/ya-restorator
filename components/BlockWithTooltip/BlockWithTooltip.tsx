import cn from 'classnames';

import { Tooltip } from '~c/Tooltip/Tooltip';
import styles from './BlockWithTooltip.module.scss';

interface IBlockWithTooltipProps {
  noMargin?: boolean;
  tooltipText: React.ReactChild;
}

export const BlockWithTooltip: React.FC<IBlockWithTooltipProps> = ({ tooltipText, noMargin = false, children }) => {
  return (
    <span className={cn(styles.wrapper, { [styles.wrapperNoMargin]: noMargin })}>
      {children}
      <Tooltip className={styles.tooltip}>{tooltipText}</Tooltip>
    </span>
  );
};
