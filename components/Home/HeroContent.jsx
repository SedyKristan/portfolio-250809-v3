import Hero from './Hero';
import DownloadButton from '../ui/DownloadButton';
import ContactInfo from '../Home/ContactInfo';

const HeroContent = () => {
  return (
    <div className="w-full xl:w-[550px] flex flex-col mb-4 items-center xl:items-start text-center xl:text-left z-20">
      <Hero />
      <DownloadButton className="flex-col md:flex-row" />
      <ContactInfo />
    </div>
  );
};

export default HeroContent;
