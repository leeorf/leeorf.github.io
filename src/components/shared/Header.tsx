import React from 'react';
import { Logo } from '../elements/Logo';
import { NavMenu } from '../elements/NavMenu';

export const Header = () => {
  return (
    <header className="flex items-center w-full space-x-12">
      <Logo />
      <nav>
        <NavMenu />
      </nav>
    </header>
  );
};
