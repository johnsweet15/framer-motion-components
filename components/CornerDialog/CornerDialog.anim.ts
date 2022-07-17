import { Variants } from 'framer-motion';

export const getVariants = (): Variants => {
  return {
    hidden: {
      x: '100vw',
      opacity: 0,
    },
    visible: {
      x: '0vw',
      right: 0,
      bottom: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        damping: 25,
        stiffness: 250,
      },
    },
    exit: {
      opacity: 0,
      x: '100vw',
      transition: {
        duration: 0.5,
      },
    },
  };
};
