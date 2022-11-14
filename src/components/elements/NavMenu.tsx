import React from 'react';
import { routesList } from '../../constants/routes';
import { HyperLink } from '../shared/HyperLink';

export const NavMenu = (): React.ReactElement => {
  return (
    <ul className="flex space-x-5">
      {routesList.map(route => (
        <li key={route.url} className="uppercase text-xs">
          <HyperLink link={route} activeClassName="font-bold">
            {route.caption}
          </HyperLink>
        </li>
      ))}
    </ul>
  );
};
