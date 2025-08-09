'use client';

import { MdFileDownload, MdVisibility } from 'react-icons/md';
import Button from './Button';

const DownloadButton = ({ className = '' }) => {
  const handlePreview = () => {
    window.open(
      '/[Resume]Sedy-Kristan-Ribaya.pdf',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className={`flex gap-4 mb-16 ${className}`}>
      <a
        href={'/[Resume]Sedy-Kristan-Ribaya.pdf'}
        download="Sedy-Kristan-Ribaya-Resume.pdf"
      >
        <Button variant="contained" size="lg">
          <MdFileDownload />
          Download Resume
        </Button>
      </a>
      <Button onClick={handlePreview} variant="outlined" size="lg">
        <MdVisibility />
        View Resume
      </Button>
    </div>
  );
};

export default DownloadButton;
