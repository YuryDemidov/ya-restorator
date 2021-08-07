import React from 'react';

interface ISvgIconProps {
  id: string;
  width: number;
  height: number;
  className?: string;
}

export const SvgIcon = ({ id, width, height, className }: ISvgIconProps): React.ReactElement => {
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};
