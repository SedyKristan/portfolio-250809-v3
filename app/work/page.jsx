'use client';

import Link from 'next/link';
import Image from 'next/image';

import PageWrapper from '@/components/animations/PageWrapper';
import SectionHeaders from '@/components/ui/SectionHeaders';

import 'swiper/css';
import 'swiper/css/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { categories, projects } from '@/data/work/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '@/components/ui/Button';
import { MdArrowOutward } from 'react-icons/md';
import { Pagination } from 'swiper/modules';

const Work = () => {
  return (
    <PageWrapper className="min-h-screen flex items-center py-24 xl:py-0">
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <SectionHeaders
          title={
            <>
              My Latest
              <span className="text-primary"> Projects</span>
            </>
          }
          subtitle="My Works"
          className="mb-6 xl:mb-12"
        />
        <Tabs
          defaultValue="all"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* Tab List */}
          <TabsList className="flex flex-wrap justify-start gap-4 h-full">
            {categories.map((category) => (
              <TabsTrigger
                value={category}
                key={category}
                className="capitalize border border-white/10 data-[state=active]:bg-primary data-[state=active]:border-secondary data-[state=active]:text-secondary h-[36px] rounded-lg label-sm-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-tertiary-ghost-01 px-4"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Tab Content */}
          <div>
            {categories.map((category) => (
              <TabsContent value={category} key={category}>
                <Swiper
                  spaceBetween={30}
                  modules={[Pagination]}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  className="h-full xl:h-[460px]"
                >
                  {projects
                    .filter(
                      (project) =>
                        category === 'all' || project.category === category
                    )
                    .map((project) => (
                      <SwiperSlide key={project.id}>
                        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                          <div className="w-full ma-w-[380px] flex flex-col gap-6 xl:gap-8 order-2 xl:order-none">
                            {/* title */}
                            <div className="flex flex-col gap-4 h-full xl:gap-6">
                              <h4
                                className="h4 !font-bold"
                                dangerouslySetInnerHTML={{
                                  __html: project.title,
                                }}
                              />
                              {/* Tech */}
                              <div className="flex flex-col gap-3">
                                <p className="label-md-bold">Tech Used</p>
                                <ul className="flex flex-wrap gap-2">
                                  {project.tech.map((tech, index) => (
                                    <li
                                      key={index}
                                      className="rounded-full text-primary bg-tertiary-ghost-01 px-4 py-2"
                                    >
                                      {tech}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            {/* Button */}
                            <Button
                              onClick={() =>
                                window.open(
                                  project.url,
                                  '_blank',
                                  'noopener,noreferrer'
                                )
                              }
                              variant="outlined"
                              size="md"
                              className="w-fit group"
                            >
                              Go to Project
                              <MdArrowOutward className="text-xl group-hover:rotate-45 transition-all duration-300 ease-in-out" />
                            </Button>
                          </div>
                          {/* Project image */}
                          <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative order-1 xl:order-none overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </PageWrapper>
  );
};

export default Work;
