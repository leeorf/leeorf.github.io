import React from 'react';
import classNames from 'classnames';
import { Heading, HeadingLevel } from './Heading';

type PageHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageHeader = (props: PageHeaderProps): React.ReactElement => {
  const { children, className } = props;

  const classes = classNames(className, {
    'mb-6': true,
    uppercase: true,
    'font-extrabold': true,
  });

  return (
    <Heading level={HeadingLevel.h1} className={classes}>
      {children}
    </Heading>
  );
};
