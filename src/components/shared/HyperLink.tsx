import React from 'react';
import { Link } from 'gatsby';
import { Link as LinkType } from '../../types/Link';

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

  if (!link.url) {
    return null;
  }

  const isExternal = link.url.match(/http/gi);
  const isHash = link.url.startsWith('#');

  const externalLink = (
    <a
      href={link.url}
      title={link.caption}
      className={className}
      target={!isHash && shouldOpenInNewTab ? '_blank' : '_self'}
      rel="noreferrer"
    >
      {children}
    </a>
  );

  const internalLink = (
    <Link
      to={link.url}
      title={link.caption}
      activeClassName={activeClassName}
      className={className}
    >
      {children}
    </Link>
  );

  return isExternal || isHash ? externalLink : internalLink;
};
