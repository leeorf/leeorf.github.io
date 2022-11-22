import React from 'react';
import classNames from 'classnames';
import { Link } from '../../types/Link';
import { HyperLink } from './HyperLink';
import { Heading, HeadingLevel } from './Heading';
import { Row } from './Row';
import { InteractiveText } from './InteractiveText';

type CardRootProps = {
  children?: React.ReactNode;
};

const CardRoot = (props: CardRootProps): React.ReactElement => {
  const { children } = props;

  return (
    <div className="flex flex-col shadow-card rounded-md bg-white overflow-hidden">
      {children}
    </div>
  );
};

type CardMediaProps = {
  children: React.ReactNode;
  link?: Link;
  className?: string;
};

const CardMedia = (props: CardMediaProps): React.ReactElement => {
  const { children, link, className } = props;

  const classes = classNames(className, {
    'h-48': true,
    'overflow-hidden': true,
    'transition-transform': true,
    'hover:-translate-y-1  hover:scale-105': true,
  });

  const wrappedElement = link ? (
    <HyperLink link={link}>{children}</HyperLink>
  ) : (
    children
  );

  return <div className={classes}>{wrappedElement}</div>;
};

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContent = (props: CardContentProps) => {
  const { children, className } = props;

  const classes = classNames(className, {
    'p-6': true,
    'flex-1': true,
  });

  return <div className={classes}>{children}</div>;
};

type CardTitleProps = {
  children: React.ReactNode;
  link?: Link;
  className?: string;
};

const CardTitle = (props: CardTitleProps) => {
  const { children, link, className } = props;

  const classes = classNames(className, {
    'mb-3': true,
  });

  const wrappedElement = link ? (
    <HyperLink link={link}>
      <InteractiveText>{children}</InteractiveText>
    </HyperLink>
  ) : (
    children
  );

  return (
    <Heading level={HeadingLevel.h3} className={classes}>
      {wrappedElement}
    </Heading>
  );
};

type CardActionsProps = {
  children: React.ReactNode;
  className?: string;
};

const CardActions = (props: CardActionsProps) => {
  const { children, className } = props;

  const classes = classNames(className, {
    'px-6 pb-6': true,
  });

  return (
    <div className={classes}>
      <Row className="gap-4 flex-col sm:flex-row">{children}</Row>
    </div>
  );
};

export const Card = {
  Root: CardRoot,
  Media: CardMedia,
  Content: CardContent,
  Title: CardTitle,
  Actions: CardActions,
};
