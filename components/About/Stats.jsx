import React from 'react';
import CountUp from 'react-countup';

const statsData = [
  {
    id: 'experience',
    value: 3,
    label: 'Years',
    sublabel: 'experience',
  },
  {
    id: 'projects',
    value: 12,
    label: 'Projects',
    sublabel: 'Deployed',
  },
];

const StatItem = ({ value, label, sublabel, duration = 5, delay = 4 }) => (
  <div className="flex gap-5 items-center">
    <div className="text-5xl font-bold text-primary flex">
      <CountUp
        end={value}
        duration={duration}
        delay={delay}
        className="block"
      />
    </div>
    <div>
      {label} <br className="hidden xl:block" />
      {sublabel}
    </div>
  </div>
);

const Stats = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
      {statsData.map((stat) => (
        <StatItem
          key={stat.id}
          value={stat.value}
          label={stat.label}
          sublabel={stat.sublabel}
        />
      ))}
    </div>
  );
};

export default Stats;
