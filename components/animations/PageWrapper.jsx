'use client';

import { motion } from 'framer-motion';
import { pageVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

const PageWrapper = ({ children, className = '' }) => {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn('min-h-screen', className)}
    >
      {children}
    </motion.section>
  );
};

export default PageWrapper;
