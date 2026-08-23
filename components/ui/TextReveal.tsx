'use client';

import { motion } from 'framer-motion';
import { ANIMATION } from '@/lib/constants';
import { ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.easing.cinematic,
    },
  },
};

/**
 * Text reveal animation component
 */
export function TextReveal({
  children,
  className = '',
  delay = 0,
}: TextRevealProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {typeof children === 'string'
        ? children.split(' ').map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              variants={itemVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))
        : children}
    </motion.div>
  );
}
