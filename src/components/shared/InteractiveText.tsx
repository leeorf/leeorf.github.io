import React from 'react';
import combineClassNames from 'classnames';

type InteractiveTextProps = {
  children: React.ReactNode;
  className?: string;
  hoverClassName?: string;
};

export const InteractiveText = (
  props: InteractiveTextProps
): React.ReactElement => {
  const { children, className, hoverClassName } = props;

  const classNames = combineClassNames(className, hoverClassName, {
    'transition duration-150 ease-in-out': true,
    'hover:text-teal-500': !hoverClassName,
  });

  return <span className={classNames}>{children}</span>;
};
