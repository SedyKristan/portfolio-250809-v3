export const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2.4,
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};

export const rectangleVariants = {
  initial: {
    y: '-100%',
    height: '100%',
  },
  animate: {
    y: '0%',
    height: '0%',
  },
  exit: {
    y: ['0%', '-100%'],
    height: ['0%', '100%'],
  },
};

export const floatingVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

export const shadowVariants = {
  initial: {
    scaleX: 1,
    scaleY: 1,
    opacity: 0.3,
  },
  animate: {
    scaleX: [1.1, 0.9, 1.1],
    scaleY: [1.1, 0.9, 1.1],
    opacity: [0.4, 0.2, 0.4],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};
