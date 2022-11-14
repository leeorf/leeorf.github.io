import React from 'react';
import classNames from 'classnames';

export enum HeadingLevel {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
}

type HeadingProps = {
  children: React.ReactNode;
  level: HeadingLevel;
  className?: string;
};

const headingClasses = {
  [HeadingLevel.h1]: 'text-3xl',
  [HeadingLevel.h2]: 'text-2xl',
  [HeadingLevel.h3]: 'text-xl',
};

export const Heading = (props: HeadingProps): React.ReactElement => {
  const { level, children, className } = props;

  const HeadingElement = level;

  const classes = classNames(className, {
    [headingClasses[level]]: true,
  });

  return <HeadingElement className={classes}>{children}</HeadingElement>;
};
