'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ForestScene } from './ForestScene';
import { useScrollProgress, useInView } from '@/lib/hooks';
import { COLORS, ANIMATION } from '@/lib/constants';

export function ForestEntry() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: textRef, isInView } = useInView();
  const scrollProgress = useScrollProgress();
  const [sceneHeight, setSceneHeight] = useState('100vh');

  useEffect(() => {
    // Make forest scene approximately 3x viewport height for scroll effect
    setSceneHeight('300vh');
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-ch-paper">
      {/* Forest Scene - Scroll-driven */}
      <div className="sticky top-0 w-full" style={{ height: '100vh' }}>
        <ForestScene scrollProgress={scrollProgress} />
      </div>

      {/* Spacer for scroll effect */}
      <div style={{ height: 'calc(300vh - 100vh)' }} />

      {/* Text Content - appears over forest as you scroll */}
      <motion.div
        ref={textRef}
        className="relative z-20 -mt-96 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: ANIMATION.duration.normal }}
      >
        <div className="h-screen flex flex-col items-center justify-center px-6">
          <motion.div
            className="text-center max-w-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{
              duration: ANIMATION.duration.cinematic,
              ease: ANIMATION.easing.cinematic,
            }}
          >
            <h2
              className="text-4xl md:text-5xl font-display tracking-tight mb-8"
              style={{ color: COLORS.black }}
            >
              WELCOME TO THE HAUS.
            </h2>
            <p
              className="text-base md:text-lg font-body opacity-70 mb-20"
              style={{ color: COLORS.black }}
            >
              He lives where chaos meets calm.
            </p>
            <div
              className="text-xs tracking-widest opacity-40"
              style={{ color: COLORS.black }}
            >
              CHAOS INDEX // 001<br />
              SYSTEM STATUS: UNSTABLE
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none text-xs tracking-widest opacity-60"
        style={{ color: COLORS.black }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        SCROLL TO ENTER
      </motion.div>
    </div>
  );
}
