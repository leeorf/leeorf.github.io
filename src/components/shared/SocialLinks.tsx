import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { SocialLink, SocialLinkTypes } from '../../types/SocialLink';
import { Expander } from './Expander';
import { HyperLink } from './HyperLink';

type SocialLinksProps = {
  links: SocialLink[];
  numToShow?: number;
};

const socialLinkIcon = {
  [SocialLinkTypes.gitHub]: FaGithub,
  [SocialLinkTypes.linkedIn]: FaLinkedin,
};

export const SocialLinks = (props: SocialLinksProps): React.ReactElement => {
  const { links, numToShow = Infinity } = props;

  const onRender = (socialLink: SocialLink): React.ReactElement => {
    let linkIcon = null;

    if (socialLink.type && socialLink.type in socialLinkIcon) {
      const Icon = socialLinkIcon[socialLink.type];
      linkIcon = <Icon className="w-6 h-6" />;
    }

    return (
      <HyperLink link={socialLink}>{linkIcon || socialLink.url}</HyperLink>
    );
  };

  return <Expander items={links} onRender={onRender} numToShow={numToShow} />;
};
