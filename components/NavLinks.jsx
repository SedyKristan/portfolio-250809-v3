'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import DownloadButton from './ui/DownloadButton';

const links = [
  {
    name: 'home',
    path: '/',
  },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const NavLinks = ({ containerStyles = '', downloadButton }) => {
  const pathname = usePathname();

  console.log('Current pathname:', pathname);
  console.log('Pathname type:', typeof pathname);
  console.log('Pathname length:', pathname?.length);
  console.log('Is exactly root?:', pathname === '/');
  console.log('Download button prop:', downloadButton);
  console.log(
    'Should show download button?:',
    downloadButton && pathname !== '/'
  );

  return (
    <div className="flex flex-col justify-between h-full">
      <div className={cn(containerStyles)}>
        {links.map((link, index) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={index}
              href={link.path}
              className={cn(
                'relative flex py-3 text-typography-secondary hover:text-typography-primary active:text-typography-primary px-6 items-center label-md-bold gap-12 self-stretch capitalize transition-all duration-300 ease-in-out',
                isActive &&
                  'text-primary before:content-[] before:absolute before:w-[4px] before:rounded-tr-full before:rounded-br-full before:h-full before:bg-primary before:top-0 before:left-0 hover:text-primary active:text-primary'
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {downloadButton && pathname && pathname.trim() !== '/' && (
        <div className="flex flex-col justify-center items-center px-6">
          <DownloadButton className="self-stretch flex-col" />
        </div>
      )}
    </div>
  );
};

export default NavLinks;
