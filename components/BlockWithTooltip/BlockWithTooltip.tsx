import cn from 'classnames';

import { Tooltip } from '~c/Tooltip/Tooltip';
import styles from './BlockWithTooltip.module.scss';

interface IBlockWithTooltipProps {
  id: string;
  noMargin?: boolean;
  tooltipText: React.ReactChild;
}

export const BlockWithTooltip: React.FC<IBlockWithTooltipProps> = ({ id, tooltipText, noMargin = false, children }) => {
  return (
    <span className={cn(styles.wrapper, { [styles.wrapperNoMargin]: noMargin })} aria-describedby={id}>
      {children}
      <Tooltip id={id} className={styles.tooltip}>
        {tooltipText}
      </Tooltip>
    </span>
  );
};
