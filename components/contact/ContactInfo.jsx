import React from 'react';
import { MdLocationPin, MdPhone, MdEmail } from 'react-icons/md';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: MdPhone,
      label: 'Phone',
      value: '0929 331 6663',
      href: 'tel:+639293316663',
    },
    {
      icon: MdEmail,
      label: 'Email',
      value: 'ribayasedy@gmail.com',
      href: 'mailto:ribayasedy@gmail.com',
    },
    {
      icon: MdLocationPin,
      label: 'Location',
      value: 'City of San Jose del Monte, Bulacan, Philippines',
      href: null,
    },
  ];

  return (
    <div className="flex flex-col gap-4 mb-6 xl:mb-0">
      {contactInfo.map((contact, index) => {
        const IconComponent = contact.icon;
        const content = (
          <p
            className="flex items-center gap-4 paragraph-regular group cursor-pointer"
            key={index}
          >
            <span className="text-primary transition-transform duration-200 group-hover:scale-110">
              <IconComponent className="text-2xl" aria-hidden="true" />
            </span>
            <span className="group-hover:text-primary label-md-bold transition-colors duration-200">
              {contact.value}
            </span>
          </p>
        );

        return contact.href ? (
          <a
            key={index}
            href={contact.href}
            className="block"
            aria-label={`${contact.label}: ${contact.value}`}
          >
            {content}
          </a>
        ) : (
          <div key={index} aria-label={`${contact.label}: ${contact.value}`}>
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
