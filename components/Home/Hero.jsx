'use client';

import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="w-full xl:w-[550px] flex flex-col mb-4 items-center xl:items-start text-center xl:text-left">
      <h1 className="h1">
        Hello! I'm Sedy, <br />
        <span className="inline-block min-h-[76px]">
          <TypeAnimation
            sequence={['Fullstack Developer', 2000, 'UIUX Designer', 2000]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            cursor={false}
            className="text-primary"
          />
        </span>
      </h1>
      <p className="paragraph-lg-regular max-w-[500px] mb-11">
        I build websites that look great, feel smooth, and just make sense —
        mixing design magic with clean code to bring ideas to life.
      </p>
    </div>
  );
};

export default Hero;
