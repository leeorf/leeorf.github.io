import React from 'react';
import classNames from 'classnames';

type RowProps = {
  children: React.ReactNode;
  responsive?: boolean;
  className?: string;
};

export const Row = (props: RowProps): React.ReactElement => {
  const { children, className, responsive = true } = props;

  const classes = classNames(className, {
    flex: true,
    'items-center': true,
    'flex-col': responsive,
    'sm:flex-row': responsive,
  });

  return <div className={classes}>{children}</div>;
};
