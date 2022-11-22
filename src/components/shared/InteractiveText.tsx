import React from 'react';
import combineClassNames from 'classnames';

type InteractiveTextProps = {
  children: React.ReactNode;
  className?: string;
};

export const InteractiveText = (
  props: InteractiveTextProps
): React.ReactElement => {
  const { children, className } = props;

  const classNames = combineClassNames(className, {
    'transition duration-150 ease-in-out hover:text-teal-500': true,
  });

  return <span className={classNames}>{children}</span>;
};
