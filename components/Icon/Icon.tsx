import arrowSmallIcon from './icons/arrow-s.svg';
import arrowMediumIcon from './icons/arrow-m.svg';
import arrowLargeIcon from './icons/arrow-l.svg';
import checkMarkSmallIcon from './icons/check-mark-s.svg';
import checkMarkMediumIcon from './icons/check-mark-m.svg';
import checkMarkLargeIcon from './icons/check-mark-l.svg';
import crossSmallIcon from './icons/cross-s.svg';
import crossMediumIcon from './icons/cross-m.svg';
import crossLargeIcon from './icons/cross-l.svg';
import menuIcon from './icons/menu.svg';

interface ISvgrIconProps {
  className?: string;
  width?: number;
  height?: number;
}

type TIconSize = 's' | 'm' | 'l';

type TSvgIconSizes = Partial<Record<TIconSize, React.FC<ISvgrIconProps>>>;

type TSvgIconsMap = {
  [key: string]: TSvgIconSizes;
};

const SVG_ICONS: TSvgIconsMap = {
  arrow: {
    s: arrowSmallIcon,
    m: arrowMediumIcon,
    l: arrowLargeIcon,
  },
  checkMark: {
    s: checkMarkSmallIcon,
    m: checkMarkMediumIcon,
    l: checkMarkLargeIcon,
  },
  cross: {
    s: crossSmallIcon,
    m: crossMediumIcon,
    l: crossLargeIcon,
  },
  menu: {
    l: menuIcon,
  },
};

interface IIconProps extends ISvgrIconProps {
  type: keyof typeof SVG_ICONS;
  size: TIconSize;
}

export const Icon = ({ type, size, ...attributes }: IIconProps) => {
  const IconComponent = SVG_ICONS[type][size];
  return IconComponent ? <IconComponent {...attributes} /> : null;
};
