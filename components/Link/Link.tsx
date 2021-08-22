import { AnchorHTMLAttributes } from 'react';
import cn from 'classnames';

import { ymHandler } from '~u/helpers';
import styles from './Link.module.scss';

export interface ILinkDefaultProps {
  defaultColor?: boolean;
  defaultTextDecoration?: boolean;
  dataYmGoal?: string;
  onClickHandler?: (event: React.SyntheticEvent<HTMLElement>) => void;
}

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ILinkDefaultProps {}

export const Link: React.FC<ILinkProps> = ({
  className,
  children,
  defaultColor = true,
  defaultTextDecoration = true,
  dataYmGoal,
  onClickHandler,
  ...props
}) => {
  const clickHandler = (event: React.SyntheticEvent<HTMLElement>) => {
    ymHandler(event);
    if (onClickHandler) onClickHandler(event);
  };

  return (
    <a
      className={cn(
        styles.link,
        {
          [styles.defaultColor]: defaultColor,
          [styles.defaultTextDecoration]: defaultTextDecoration,
        },
        className,
      )}
      data-ymgoal={dataYmGoal}
      onClick={clickHandler}
      {...props}>
      {children}
    </a>
  );
};
