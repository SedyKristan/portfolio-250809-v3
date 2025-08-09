'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { ImQuotesLeft } from 'react-icons/im';

const data = [
  {
    title: 'How I approach work',
    content: 'I design as a developer, and develop as a designer',
  },
  {
    title: 'Projects I Love',
    content: [
      '✨ User-first web apps',
      '🔄 Scalable component systems',
      '📱 Clean responsive UIs',
    ],
  },
  {
    title: 'My Daily Stack',
    content: [
      '🛠️ Code: React, Next.js, VSCode, Git',
      '🎨 Design: Figma, Framer, Illustrator',
      '⚙️ Ops: Firebase, GraphQL, Airtable',
    ],
  },
  {
    title: 'Quick Info',
    content: [
      'Based in the Philippines',
      'Remote-ready and team-friendly',
      'Lifelong learner and builder',
    ],
  },
];

const Values = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-tertiary-ghost-01 rounded-lg"
    >
      {data.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="flex flex-col px-8 py-6">
            <p className="label-lg-bold mb-4">{item.title}</p>
            {typeof item.content === 'string' ? (
              <div className="flex gap-8 items-center">
                <ImQuotesLeft className="hidden xl:flex text-8xl text-primary" />
                <p className="paragraph-lg-regular">{item.content}</p>
              </div>
            ) : (
              <ul className="space-y-2">
                {item.content.map((point, index) => (
                  <li
                    key={index}
                    className="paragraph-lg-regular list-disc ml-6"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Values;
