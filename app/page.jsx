'use client';

import PageWrapper from '@/components/animations/PageWrapper';
import HeroContent from '@/components/Home/HeroContent';
import Image from 'next/image';
import avatarImage from '@/public/assets/mainv2.png';
import HexPattern from '@/public/assets/hex-pattern.png';

const Home = () => {
  return (
    <PageWrapper className="h-screen flex items-center">
      <div className="relative flex flex-col xl:flex-row items-center justify-between w-full">
        <div className="absolute -bottom-[268px] -right-[122px] w-full h-full max-w-[556px] animate-pulse">
          <Image
            src={HexPattern}
            alt="Hex pattern"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute -top-[280px] -left-[182px] xl:left-auto xl:right-[242px] w-full h-full max-w-[556px] animate-pulse">
          <Image
            src={HexPattern}
            alt="Hex pattern"
            fill
            className="object-contain"
          />
        </div>

        <HeroContent />
        <div className="flex-1 hidden xl:flex justify-center items-center relative z-20 h-[437px]">
          <div className="relative w-full h-full max-w-[437px]">
            <Image
              src={avatarImage}
              alt="Avatar"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
