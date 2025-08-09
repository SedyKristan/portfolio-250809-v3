import SectionHeaders from '../ui/SectionHeaders';
import { MdHexagon } from 'react-icons/md';

const journey = [
  {
    year: '2024 - Present',
    role: 'Fullstack Web Developer',
    company: 'Ohmyhome Ltd. (NASDAQ: OMH)',
  },
  {
    year: '2022 - 2024',
    role: 'Fullstack Web Developer',
    company: 'MedGrocer',
  },
  {
    year: '2023',
    role: 'UI/UX Design Certification',
    company: 'CIIT College of Arts & Technology',
  },
  {
    year: '2018 - 2022',
    role: 'BS Computer Engineering',
    company: 'Polytechnic University of the Philippines',
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-6 self-stretch">
      <SectionHeaders
        title={
          <>
            <span className="text-primary">Experience</span> and Education
          </>
        }
        subtitle="My Journey"
      />
      <div className="flex flex-col">
        {journey.map((item, index) => {
          const { year, role, company } = item;
          return (
            <div key={index} className="flex items-center gap-12 w-full">
              <div className="flex flex-col w-max justify-center items-center">
                {/* <div className="w-3 h-3 bg-primary rounded-full"></div> */}
                <MdHexagon className="text-primary" size={24} />
                <div className="w-[1px] h-[180px] bg-white/10"></div>
              </div>
              <div className="flex flex-col gap-3 self-stretch max-w-[500px] justify-center">
                <p className="label-xs-bold text-primary">{year}</p>
                <div className="flex flex-col gap-1">
                  <p className="label-lg-bold">{role}</p>
                  <p className="label-md-bold text-typography-secondary">
                    {company}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
