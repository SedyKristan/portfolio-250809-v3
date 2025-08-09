import React from 'react';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from './tooltip';
import IconButton from './IconButton';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Image from 'next/image';

const ServiceTooltip = ({ data }) => {
  return (
    <TooltipProvider key={data.title}>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton
            onClick={() => window.open(data.url, '_blank')}
            variant="text"
            size="lg"
            className="text-2xl group"
          >
            <MdOutlineArrowOutward className="transition-all duration-300 ease-in-out group-hover:rotate-45" />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="bg-primary text-secondary max-w-[284px] p-4"
        >
          <div className="flex flex-col gap-3">
            {/* Message at the top */}
            <p className="text-sm leading-relaxed">{data.message}</p>

            {/* Image at the bottom */}
            <div className="relative w-full h-32 rounded-lg overflow-hidden bg-secondary/10">
              <Image
                src={data.preview}
                alt={data.title}
                fill
                className="object-cover"
                sizes="284px"
              />
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ServiceTooltip;
