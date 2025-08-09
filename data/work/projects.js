import AleseaProj from '@/public/assets/projects/Alesea.jpg';
import DwellProj from '@/public/assets/projects/Dwell.jpg';
import ComponentLibraryProj from '@/public/assets/projects/Cover.jpg';
import HealthcareProj from '@/public/assets/projects/Healthcare.jpg';

export const projects = [
  {
    id: 1,
    category: 'fullstack',
    title: 'Dwell Student<br class="hidden xl:inline"/>Accommodation',
    description:
      'A multi-country student housing platform built with SEO and performance in mind. I developed the frontend and backend logic, integrated CMS, and ensured responsiveness across AU, UK, and CN regions.',
    image: DwellProj,
    tech: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Prismic CMS',
      'Framer Motion',
      'Node.js',
    ],
    url: 'https://www.dwellstudent.com/',
  },
  {
    id: 2,
    category: 'design',
    title: 'Healthcare App<br class="hidden xl:inline"/>Wireframes',
    description:
      'Designed clean and user-centered interfaces for e-pharmacy flows, mental health support, and internal tools — all tailored for the Philippine healthcare space (MedGrocer).',
    image: HealthcareProj,
    tech: ['Figma', 'Adobe Illustrator'],
    url: 'https://www.figma.com/design/LDXCrYQkdVBTqquCMh4Fb8/My-Portfolio?node-id=164-7120&p=f&t=lbRtFb8gDB96Kgbh-0',
  },
  {
    id: 3,
    category: 'frontend',
    title: 'Component Library<br class="hidden xl:inline"/>System',
    description:
      'Built a scalable, reusable UI component system to speed up development and maintain design consistency across multiple web projects and teams.',
    image: ComponentLibraryProj,
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Sass'],
    url: 'https://www.figma.com/design/zpFgNZI2BjMG2OyVB2SCrg/UI-Kit?node-id=89-268&p=f&t=58Ldx3jqnkx6wNmw-0',
  },
  {
    id: 4,
    category: 'fullstack',
    title: 'Alesea Villas',
    description:
      'Developed a fullstack luxury villas website using Vue.js and Nuxt with dynamic content powered by Contentful CMS — focused on performance, scalability, and elegant UI.',
    image: AleseaProj,
    tech: [
      'Nuxt',
      'Vue.js',
      'Typescript',
      'Tailwind CSS',
      'Node.js',
      'Sass',
      'Contentful',
      '.Net',
    ],
    url: 'https://www.alesea.co/',
  },
];

export const categories = ['all', 'fullstack', 'design', 'frontend'];
