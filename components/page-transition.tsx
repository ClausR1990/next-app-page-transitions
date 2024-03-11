'use client';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

type PageTransitionProps = {
  children: React.ReactNode;
};

function PageTransition({ children }: PageTransitionProps) {
  return <AnimatePresence mode='wait'>{children}</AnimatePresence>;
}

export default PageTransition;
