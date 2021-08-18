import { useState } from 'react';
import cn from 'classnames';

import styles from './Tooltip.module.scss';

interface ITooltipProps {
  className?: string;
}

export const Tooltip: React.FC<ITooltipProps> = ({ className, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className={cn(styles.icon, className)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p
        className={cn(styles.text, {
          [styles.visible]: isVisible,
        })}>
        {children}
      </p>
    </div>
  );
};
