'use client';

import { useRef } from 'react';

// Components
import Experience from '@/components/About/Experience';
import Skills from '@/components/About/Skills';
import Stats from '@/components/About/Stats';
import Values from '@/components/About/Values';
import FloatingImage from '@/components/animations/FloatingImage';
import PageWrapper from '@/components/animations/PageWrapper';
import { ScrollArea } from '@/components/ui/scroll-area';
import SectionHeaders from '@/components/ui/SectionHeaders';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

// Assets
import mainImage from '@/public/assets/mainv2.png';

const About = () => {
  const scrollAreaRef = useRef(null);

  return (
    <PageWrapper className="h-screen flex items-center">
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative">
            <FloatingImage
              src={mainImage}
              alt="Main profile image"
              className="w-full h-full relative"
            />
          </div>
          <ScrollArea ref={scrollAreaRef} className="w-full h-[680px]">
            <div>
              <div className="flex flex-col gap-3">
                <SectionHeaders
                  title={
                    <>
                      <span className="text-primary">Sedy</span> Kristan Ribaya
                    </>
                  }
                  subtitle="About me"
                />
                <p className="max-w-[540px] mb-12">
                  I’m Sedy, a frontend-focused fullstack developer and UI/UX
                  designer. I specialize in building fast, clean, and responsive
                  websites — blending design thinking with solid engineering. My
                  passion lies in creating user-first digital experiences that
                  are both beautiful and functional.
                </p>
              </div>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Values />
                <Experience />
                <Skills />
              </div>
            </div>
          </ScrollArea>
          
          {/* Scroll Indicator */}
          <ScrollIndicator scrollAreaRef={scrollAreaRef} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
