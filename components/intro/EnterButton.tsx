'use client';

import { motion } from 'framer-motion';
import { COLORS, ANIMATION } from '@/lib/constants';

interface EnterButtonProps {
  onClick: () => void;
  isReturning?: boolean;
}

export function EnterButton({ onClick, isReturning = false }: EnterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative px-8 py-3 text-xs tracking-widest font-display"
      style={{ color: COLORS.black }}
      whileHover={{ letterSpacing: '0.15em' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: ANIMATION.easing.smooth }}
      aria-label={isReturning ? 'Return to Chaos Haus' : 'Enter Chaos Haus'}
    >
      {/* Left line */}
      <motion.span
        className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-px"
        style={{ backgroundColor: COLORS.black }}
        animate={{ scaleX: 1 }}
        whileHover={{ scaleX: 1.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Text */}
      <span className="block px-6">
        {isReturning ? 'RETURN' : 'ENTER'} THE HAUS →
      </span>

      {/* Right line */}
      <motion.span
        className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-px"
        style={{ backgroundColor: COLORS.black }}
        animate={{ scaleX: 1 }}
        whileHover={{ scaleX: 1.5 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
