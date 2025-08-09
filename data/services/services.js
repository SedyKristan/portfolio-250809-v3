import design from '@/public/assets/design.svg';
import frontend from '@/public/assets/frontend.svg';
import seo from '@/public/assets/seo.svg';
import backend from '@/public/assets/backend.svg';

import designPreview from '@/public/assets/projects/Cover.jpg';
import frontendPreview from '@/public/assets/projects/Dwell.jpg';
import backendPreview from '@/public/assets/projects/Dwell.jpg';
import seoPreview from '@/public/assets/projects/Dwell.jpg';

export const services = [
  {
    icon: design,
    title: 'UI/UX Design',
    url: 'https://www.figma.com/design/LDXCrYQkdVBTqquCMh4Fb8/My-Portfolio?node-id=164-7120&p=f&t=aSpSlbPUWSgicMgr-0',
    message:
      'Figma designs for healthcare: e-pharmacy, mental health, and doctor dashboards.',
    preview: designPreview,
  },
  {
    icon: frontend,
    title: 'Frontend Development',
    url: 'https://www.dwellstudent.com/',
    message:
      'Built the Dwell Student site using React and Next.js — fast, responsive, and user-friendly.',
    preview: frontendPreview,
  },
  {
    icon: backend,
    title: 'Backend Development',
    url: 'https://www.dwellstudent.com/',
    message:
      'Handled backend logic, CMS integration, and dynamic routing for Dwell Student.',
    preview: backendPreview,
  },
  {
    icon: seo,
    title: 'SEO & Performance',
    url: 'https://www.dwellstudent.com/',
    message:
      'Optimized Dwell Student for speed, SEO, and accessibility across devices.',
    preview: seoPreview,
  },
];
