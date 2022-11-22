import classNames from 'classnames';
import React from 'react';
import { Link } from '../../types/Link';
import { HyperLink } from './HyperLink';
import { InteractiveText } from './InteractiveText';

type ButtonProps = {
  children: React.ReactNode;
  /**
   * If link is passed, we render the element as an anchor tag instead
   * of a button.
   */
  link?: Link;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  startAdornment?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = (props: ButtonProps): React.ReactElement => {
  const { link, className, children, onClick, startAdornment } = props;

  const classes = classNames(className, {
    flex: true,
    'items-center': true,
    'gap-2': true,
    'bg-white': true,
    'py-2 px-3': true,
    rounded: true,
    'shadow-sm': true,
    'border border-solid border-gray-300': true,
  });

  if (link) {
    return (
      <HyperLink link={link}>
        <InteractiveText
          className={classes}
          hoverClassName="hover:bg-black hover:text-white hover:border-black"
        >
          {startAdornment}
          {children}
        </InteractiveText>
      </HyperLink>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {startAdornment}
      {children}
    </button>
  );
};
