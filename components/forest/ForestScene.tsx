'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { OtterCharacter } from './OtterCharacter';
import { ParallaxLayer } from './ParallaxLayer';
import { COLORS, ANIMATION } from '@/lib/constants';
import { clamp } from '@/lib/utils';

interface ForestSceneProps {
  scrollProgress: number;
}

export function ForestScene({ scrollProgress }: ForestSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const otterRef = useRef<HTMLDivElement>(null);

  // Calculate parallax offsets based on scroll progress
  // Forest section is roughly the first 300vh of scrollable content
  const forestProgress = clamp(scrollProgress / 40, 0, 1); // Adjust divisor to control speed

  // Parallax depth values (different speeds for each layer)
  const backgroundY = -forestProgress * 60;
  const midgroundY = -forestProgress * 100;
  const otterY = -forestProgress * 80;
  const foregroundY = -forestProgress * 40;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-ch-paper via-slate-100 to-ch-paper"
    >
      {/* Background - slowest parallax */}
      <ParallaxLayer
        offset={backgroundY}
        className="absolute inset-0 opacity-40"
        style={{
          background: `linear-gradient(180deg, ${COLORS.paper} 0%, ${COLORS.olive}15 100%)`,
        }}
      />

      {/* Far background trees/depth - subtle parallax */}
      <ParallaxLayer offset={backgroundY * 0.7} className="absolute inset-0">
        <div className="w-full h-full opacity-30" style={{ backgroundColor: COLORS.olive + '20' }} />
      </ParallaxLayer>

      {/* Midground fog/light - medium parallax */}
      <ParallaxLayer offset={midgroundY} className="absolute inset-0">
        <div
          className="w-full h-1/3 mt-auto"
          style={{
            background: `radial-gradient(ellipse at center bottom, rgba(255,255,255,0.4) 0%, transparent 70%)`,
          }}
        />
      </ParallaxLayer>

      {/* Otter Character - primary subject */}
      <ParallaxLayer offset={otterY} className="absolute inset-0 flex items-center justify-center">
        <div ref={otterRef} className="relative z-20">
          <OtterCharacter />
        </div>
      </ParallaxLayer>

      {/* Foreground elements - fastest parallax */}
      <ParallaxLayer offset={foregroundY} className="absolute inset-0">
        <div className="w-full h-full opacity-20" style={{ backgroundColor: COLORS.black }} />
      </ParallaxLayer>

      {/* Atmospheric overlay - vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 30%, rgba(37, 37, 34, 0.1) 100%)`,
        }}
      />

      {/* Scene progression text - appears later in scroll */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 text-center pointer-events-none"
        animate={{ opacity: Math.max(0, Math.min(1, (forestProgress - 0.5) * 2)) }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-xs tracking-widest" style={{ color: COLORS.black }}>
          HAUS AHEAD
        </div>
        <div className="text-xs tracking-widest opacity-40 mt-2" style={{ color: COLORS.black }}>
          THE SYSTEM IS OPTIONAL.
        </div>
      </motion.div>
    </div>
  );
}
