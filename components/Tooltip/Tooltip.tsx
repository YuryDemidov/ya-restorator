import { MutableRefObject, useCallback, useLayoutEffect, useRef, useState } from 'react';
import cn from 'classnames';

import styles from './Tooltip.module.scss';

const useTooltipPosition = (tooltipIconRef: MutableRefObject<HTMLSpanElement | null>) => {
  const baseDiffX = 118;
  const additionalDiffX = 10;
  const defaultDiffX = '';
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
        diffStr = ` + ${tooltipDiffXLeft + additionalDiffX}px`;
      } else if (tooltipDiffXRight > 0) {
        diffStr = ` - ${tooltipDiffXRight + additionalDiffX}px`;
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
  id: string;
  className?: string;
}

export const Tooltip: React.FC<ITooltipProps> = ({ id, className, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const diffX = useTooltipPosition(spanRef);

  const show = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);
  const hide = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);
  const toggle = useCallback(() => {
    setIsVisible((prevValue) => !prevValue);
  }, [setIsVisible]);
  const handleClick = useCallback((event: React.SyntheticEvent<HTMLSpanElement>) => {
    event.preventDefault();
  }, []);

  return (
    <span
      data-test="tooltipIcon"
      ref={spanRef}
      className={cn(styles.icon, className)}
      tabIndex={0}
      onMouseEnter={show}
      onMouseLeave={hide}
      onTouchStart={toggle}
      onClick={handleClick}
      onFocus={show}
      onBlur={hide}>
      <span
        id={id}
        className={cn(styles.text, {
          [styles.visible]: isVisible,
        })}
        style={{ left: `calc(50%${diffX})` }}
        aria-hidden={!isVisible}>
        {children}
      </span>
    </span>
  );
};
