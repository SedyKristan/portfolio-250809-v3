'use client';

import { motion } from 'framer-motion';

/**
 * Reusable Animate component for consistent animations
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {Object} props.variants - Animation variants object
 * @param {string} props.initial - Initial animation state
 * @param {string} props.animate - Animate to state
 * @param {string} props.exit - Exit animation state
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.as - HTML element type (default: 'div')
 */
const Animate = ({
  children,
  variants,
  initial = 'initial',
  animate = 'animate',
  exit = 'exit',
  className = '',
  as = 'div',
  ...props
}) => {
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Animate;
