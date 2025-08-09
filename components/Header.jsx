import Logo from './Logo';
import { MdMenu } from 'react-icons/md';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

import NavLinks from './NavLinks';
import IconButton from './ui/IconButton';

const Header = () => {
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <Sheet>
            <SheetTrigger asChild>
              <IconButton variant="outlined" size="md">
                <MdMenu />
              </IconButton>
            </SheetTrigger>
            <SheetContent
              className="bg-surface-gray border-0 flex flex-col pt-12 pb-8 max-w-[480px]"
              side="left"
            >
              <SheetHeader className="flex flex-col justify-center items-center self-stretch px-4 py-8">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className={'sr-only'}>
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <NavLinks
                containerStyles="flex flex-col py-8 gap-8 self-stretch"
                downloadButton
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
