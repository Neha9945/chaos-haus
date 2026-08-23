'use client';

import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useReducedMotion } from '@/lib/hooks';

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper component that respects prefers-reduced-motion
 */
export function MotionWrapper({
  children,
  className,
  initial,
  animate,
  exit,
  transition,
  ...props
}: MotionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} {...(props as any)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
