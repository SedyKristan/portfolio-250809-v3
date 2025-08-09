import React from 'react';
import Animate from '../lib/animations/animate';
import { rectangleVariants } from '../lib/animations/variants';

// Configuration for rectangle layers
const RECTANGLE_LAYERS = [
  {
    id: 'layer-1',
    delay: 0,
    duration: 0.6,
    zIndex: 30,
    bgClass: 'bg-secondary-darkest-02',
  },
  {
    id: 'layer-2',
    delay: 0.25,
    duration: 0.8,
    zIndex: 20,
    bgClass: 'bg-secondary-darkest',
  },
  {
    id: 'layer-3',
    delay: 0.35,
    duration: 1,
    zIndex: 10,
    bgClass: 'bg-secondary-darker',
  },
  {
    id: 'layer-4',
    delay: 0.45,
    duration: 0.8,
    zIndex: 10,
    bgClass: 'bg-secondary-dark',
  },
];

// Shared easing curve
const EASING = [0.63, 0, 0.17, 1];

// Base classes for rectangle layers
const BASE_CLASSES = 'fixed top-full w-screen h-screen';

/**
 * Rectangle transition component that creates layered animated rectangles
 * Used for page transitions with staggered animation timing
 */
const Rectangle = () => {
  return (
    <>
      {RECTANGLE_LAYERS.map(({ id, delay, duration, zIndex, bgClass }) => (
        <Animate
          key={id}
          variants={rectangleVariants}
          transition={{
            delay,
            duration,
            ease: EASING,
          }}
          className={`${BASE_CLASSES} z-${zIndex} ${bgClass}`}
          style={{ zIndex }} // Fallback for dynamic z-index
        />
      ))}
    </>
  );
};

export default Rectangle;
