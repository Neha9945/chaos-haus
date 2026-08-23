'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ParallaxLayerProps {
  children?: ReactNode;
  offset: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Parallax layer component that applies translateY transform
 * GPU-optimized using transform instead of position changes
 */
export function ParallaxLayer({
  children,
  offset,
  className = '',
  style = {},
}: ParallaxLayerProps) {
  return (
    <motion.div
      className={className}
      style={{
        y: offset,
        ...style,
      }}
      transition={{ type: 'tween', duration: 0 }}
    >
      {children}
    </motion.div>
  );
}
