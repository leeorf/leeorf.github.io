import React from 'react';
import { routes } from '../../constants/routes';
import { brandName } from '../../constants/siteMeta';

import { Link } from '../../types/Link';
import { HyperLink } from '../shared/HyperLink';

export const Logo = (): React.ReactElement => {
  const link: Link = routes.home;

  return (
    <HyperLink
      link={link}
      className="font-extrabold text-sm tracking-widest uppercase"
    >
      {brandName}
    </HyperLink>
  );
};
