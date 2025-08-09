import { MdPhone, MdEmail } from 'react-icons/md';

const ContactInfo = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
      <a 
        href="sms:09293316663" 
        className="label-md-bold flex gap-4 items-center hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-primary text-2xl">
          <MdPhone />
        </span>
        <span>0929 331 6663</span>
      </a>
      <a 
        href="mailto:ribayasedy@gmail.com" 
        className="label-md-bold flex gap-4 items-center hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-primary text-2xl">
          <MdEmail />
        </span>
        <span>ribayasedy@gmail.com</span>
      </a>
    </div>
  );
};

export default ContactInfo;
