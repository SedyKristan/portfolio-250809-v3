'use client';

import PageWrapper from '@/components/animations/PageWrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeaders from '@/components/ui/SectionHeaders';
import Image from 'next/image';

import ServiceTooltip from '@/components/ui/ServiceTooltip';
import { services } from '@/data/services/services';

const Services = () => {
  return (
    <PageWrapper className="h-screen flex items-center ">
      <div className="container mx-auto w-full flex flex-col gap-16">
        <SectionHeaders
          title={
            <>
              End-to-End <span className="text-primary">Web Solutions</span> for
              Modern Brands
            </>
          }
          subtitle="My Services"
        />
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="h-[320px]"
        >
          {services.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-tertiary-ghost-01 rounded-[20px] w-full h-[284px] px-8 py-10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-12">
                    <Image
                      src={item.icon}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <ServiceTooltip data={item} />
                  </div>
                  <h4 className="h4 !font-bold max-w-[240px]">{item.title}</h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </PageWrapper>
  );
};

export default Services;
