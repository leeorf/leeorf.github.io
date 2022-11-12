import React from 'react';
import combinaClassNames from 'classnames';
import { Link } from 'gatsby';
import { Link as LinkType } from '../../types/Link';
import { InteractiveText } from './InteractiveText';

type HyperLinkProps = {
  link: LinkType;
  children: React.ReactNode;
  activeClassName?: string;
  shouldOpenInNewTab?: boolean;
  className?: string;
};

export const HyperLink = (props: HyperLinkProps): React.ReactElement | null => {
  const {
    link,
    children,
    className,
    shouldOpenInNewTab = true,
    activeClassName = '',
  } = props;

  const commonClasses = combinaClassNames(className);

  if (!link.url) {
    return null;
  }

  const isExternal = link.url.match(/http/gi);
  const isHash = link.url.startsWith('#');

  const externalLink = (
    <a
      href={link.url}
      title={link.caption}
      target={!isHash && shouldOpenInNewTab ? '_blank' : '_self'}
      rel="noreferrer"
    >
      <InteractiveText className={commonClasses}>{children}</InteractiveText>
    </a>
  );

  const internalLink = (
    <Link
      to={link.url}
      title={link.caption}
      className={commonClasses}
      activeClassName={activeClassName}
    >
      <InteractiveText className={commonClasses}>{children}</InteractiveText>
    </Link>
  );

  return isExternal || isHash ? externalLink : internalLink;
};
