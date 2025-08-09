import SectionHeaders from '../ui/SectionHeaders';
import {
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  Tooltip,
} from '../ui/tooltip';

import {
  SiReact,
  SiNextdotjs,
  SiNuxtdotjs,
  SiGatsby,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiBulma,
  SiMui,
  SiNodedotjs,
  SiDotnet,
  SiFirebase,
  SiGraphql,
  SiMake,
  SiCsharp,
  SiContentful,
  SiPrismic,
  SiAirtable,
  SiZendesk,
  SiXendit,
  SiFigma,
  SiAdobeillustrator,
  SiBlender,
} from 'react-icons/si';

const data = [
  {
    category: 'Frontend',
    skills: [
      {
        icon: <SiReact />,
        name: 'React.js',
      },
      {
        icon: <SiNextdotjs />,
        name: 'Next.js',
      },
      {
        icon: <SiNuxtdotjs />,
        name: 'Nuxt.js',
      },
      {
        icon: <SiGatsby />,
        name: 'Gatsby.js',
      },
      {
        icon: <SiTypescript />,
        name: 'TypeScript',
      },
      {
        icon: <SiJavascript />,
        name: 'JavaScript',
      },
      {
        icon: <SiHtml5 />,
        name: 'HTML',
      },
      {
        icon: <SiCss3 />,
        name: 'CSS',
      },
      {
        icon: <SiSass />,
        name: 'SASS',
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind CSS',
      },
      {
        icon: <SiBulma />,
        name: 'Bulma',
      },
      {
        icon: <SiMui />,
        name: 'Material UI',
      },
    ],
  },
  {
    category: 'Backend',
    skills: [
      {
        icon: <SiNodedotjs />,
        name: 'Node.js',
      },
      {
        icon: <SiDotnet />,
        name: '.Net',
      },
      {
        icon: <SiFirebase />,
        name: 'Firebase',
      },
      {
        icon: <SiGraphql />,
        name: 'GraphQl',
      },
      {
        icon: <SiMake />,
        name: 'Make (Integromat)',
      },
      {
        icon: <SiContentful />,
        name: 'Contentful',
      },
      {
        icon: <SiPrismic />,
        name: 'Prismic',
      },
      {
        icon: <SiAirtable />,
        name: 'Airtable',
      },
      {
        icon: <SiZendesk />,
        name: 'Zendesk',
      },
      {
        icon: <SiXendit />,
        name: 'Xendit',
      },
    ],
  },
  {
    category: 'Design',
    skills: [
      {
        icon: <SiFigma />,
        name: 'Figma',
      },
      {
        icon: <SiAdobeillustrator />,
        name: 'Adobe Illustrator',
      },
      {
        icon: <SiBlender />,
        name: 'Blender',
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col gap-6 self-stretch">
      <SectionHeaders
        title={
          <>
            <span className="text-primary">Skills</span> and Tools
          </>
        }
        subtitle="What I can do"
      />
      <div className="flex flex-col gap-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 max-w-sm xl:max-w-none"
            >
              <p className="label-lg-bold">{item.category}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, index) => {
                  return (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="h4 text-white rounded-lg hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out w-12 h-12 p-2 flex justify-center items-center bg-tertiary-ghost-03">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-primary text-secondary">
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
