import React from 'react';
import classNames from 'classnames';

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
};

export const Badge = (props: BadgeProps): React.ReactElement => {
  const { children, className } = props;

  const classes = classNames(className, {
    'bg-gray-200': true,
    'px-1': true,
    rounded: true,
    'text-xs': true,
  });

  return <span className={classes}>{children}</span>;
};
