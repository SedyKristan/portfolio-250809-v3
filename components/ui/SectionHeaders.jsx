import React from 'react';

const SectionHeaders = ({ title, subtitle, className }) => {
  return (
    <div className={`flex flex-col items-start self-stretch ${className}`}>
      {subtitle && <p className="label-lg-bold">{subtitle}</p>}
      <h2 className="h2">{title}</h2>
    </div>
  );
};

export default SectionHeaders;
