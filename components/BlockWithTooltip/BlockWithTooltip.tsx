import { Tooltip } from '~c/Tooltip/Tooltip';
import styles from './BlockWithTooltip.module.scss';

interface IBlockWithTooltipProps {
  tooltipText: React.ReactChild;
}

export const BlockWithTooltip: React.FC<IBlockWithTooltipProps> = ({ tooltipText, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{children}</div>
      <Tooltip className={styles.tooltip}>{tooltipText}</Tooltip>
    </div>
  );
};
