import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full gap-8">
        <div className="flex flex-col justify-center items-center px-6 py-8">
          <Logo />
        </div>
        <NavLinks containerStyles="flex flex-col gap-6 h-full" downloadButton />
      </div>
    </nav>
  );
};

export default MainNav;
