'use client';

import { motion } from 'framer-motion';
import { COLORS } from '@/lib/constants';

/**
 * Otter character placeholder
 * Replace with actual asset when available
 */
export function OtterCharacter() {
  return (
    <motion.div
      className="relative w-48 h-48 md:w-80 md:h-80 flex items-center justify-center"
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Placeholder SVG - replace with actual otter asset */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))' }}
      >
        {/* Body */}
        <ellipse cx="100" cy="120" rx="45" ry="55" fill={COLORS.clay} />
        {/* Head */}
        <circle cx="100" cy="60" r="35" fill={COLORS.clay} />
        {/* Left ear */}
        <circle cx="75" cy="30" r="12" fill={COLORS.clay} />
        {/* Right ear */}
        <circle cx="125" cy="30" r="12" fill={COLORS.clay} />
        {/* Eyes */}
        <circle cx="90" cy="55" r="5" fill={COLORS.black} />
        <circle cx="110" cy="55" r="5" fill={COLORS.black} />
        {/* Nose */}
        <circle cx="100" cy="65" r="3" fill={COLORS.black} />
        {/* Left arm */}
        <ellipse cx="70" cy="110" rx="15" ry="40" fill={COLORS.clay} opacity="0.8" />
        {/* Right arm */}
        <ellipse cx="130" cy="110" rx="15" ry="40" fill={COLORS.clay} opacity="0.8" />
        {/* Left foot */}
        <ellipse cx="80" cy="170" rx="18" ry="20" fill={COLORS.clay} />
        {/* Right foot */}
        <ellipse cx="120" cy="170" rx="18" ry="20" fill={COLORS.clay} />
      </svg>

      {/* Subtle glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(165, 121, 104, 0.2) 0%, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
