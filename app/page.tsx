'use client';

import { useState } from 'react';
import IntroGate from '@/components/intro/IntroGate';
import { ForestEntry } from '@/components/forest/ForestEntry';

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="w-full">
      {!hasEntered ? (
        <IntroGate onEnter={() => setHasEntered(true)} />
      ) : (
        <>
          <ForestEntry />
          {/* Phase 1 ends here - Forest Entry and scroll effect */}
          {/* Additional rooms (door, living room, etc.) will be added in later phases */}
        </>
      )}
    </main>
  );
}
