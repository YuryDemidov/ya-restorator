import { MutableRefObject, useCallback, useLayoutEffect, useRef, useState } from 'react';
import cn from 'classnames';

import styles from './Tooltip.module.scss';

const useTooltipPosition = (tooltipIconRef: MutableRefObject<HTMLSpanElement | null>) => {
  const baseDiffX = 118,
    additionlDiffX = 10,
    defaultDiffX = '';
  const [diffX, setDiffX] = useState(defaultDiffX);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tooltipIconRef.current) {
        setDiffX(defaultDiffX);
        return;
      }

      const windowWidth =
        window.innerWidth && document.documentElement.clientWidth
          ? Math.min(window.innerWidth, document.documentElement.clientWidth)
          : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const iconBox = tooltipIconRef.current.getBoundingClientRect();
      const tooltipDiffXLeft = baseDiffX - iconBox.left;
      const tooltipDiffXRight = baseDiffX - (windowWidth - iconBox.right);

      let diffStr = defaultDiffX;
      if (tooltipDiffXLeft > 0) {
        diffStr = ` + ${tooltipDiffXLeft + additionlDiffX}px`;
      } else if (tooltipDiffXRight > 0) {
        diffStr = ` - ${tooltipDiffXRight + additionlDiffX}px`;
      }
      setDiffX(diffStr);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [tooltipIconRef]);

  return diffX;
};

interface ITooltipProps {
  className?: string;
}

export const Tooltip: React.FC<ITooltipProps> = ({ className, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const diffX = useTooltipPosition(spanRef);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);
  const handleTouchStart = useCallback(() => {
    setIsVisible((prevValue) => !prevValue);
  }, []);
  const handleClick = useCallback((event: React.SyntheticEvent<HTMLSpanElement>) => {
    event.preventDefault();
  }, []);

  return (
    <span
      ref={spanRef}
      className={cn(styles.icon, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onClick={handleClick}>
      <span
        style={{ left: `calc(50%${diffX})` }}
        className={cn(styles.text, {
          [styles.visible]: isVisible,
        })}>
        {children}
      </span>
    </span>
  );
};
