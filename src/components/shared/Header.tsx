import React from 'react';
import { Logo } from '../elements/Logo';
import { NavMenu } from '../elements/NavMenu';
import { InteractiveText } from './InteractiveText';

export const Header = () => {
  return (
    <header className="flex items-center w-full space-x-12">
      <InteractiveText>
        <Logo />
      </InteractiveText>
      <nav>
        <NavMenu />
      </nav>
    </header>
  );
};
