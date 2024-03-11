'use client';
import { Variants, motion } from 'framer-motion';
import { useLayoutEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: [0, dimensions.width, 0] }}
        exit={{ width: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='absolute left-0 top-0 z-50 h-screen bg-muted'
      ></motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: [0, dimensions.width, 0] }}
        exit={{ width: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
        className='absolute left-0 top-0 z-50 h-screen bg-primary/50'
      ></motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: [0, dimensions.width, 0] }}
        exit={{ width: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        className='absolute left-0 top-0 z-50 h-screen bg-primary'
      ></motion.div>
      <motion.div
        variants={variants}
        initial='hidden'
        animate='visible'
        exit='exit'
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
