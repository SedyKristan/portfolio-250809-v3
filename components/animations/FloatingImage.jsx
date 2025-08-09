'use client';

import { motion } from 'framer-motion';
import { floatingVariants, shadowVariants } from '@/lib/animations/variants';
import Image from 'next/image';

const FloatingImage = ({ src, alt, className = '' }) => {
  return (
    <div className={className}>
      {/* Floating Image */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="relative w-full h-full"
      >
        <Image src={src} alt={alt} fill className="object-contain" />
      </motion.div>
      
      {/* Animated Shadow */}
      <motion.div
        variants={shadowVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4"
        style={{
          width: '60%',
          height: '20px',
          background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(4px)',
        }}
      />
    </div>
  );
};

export default FloatingImage;
