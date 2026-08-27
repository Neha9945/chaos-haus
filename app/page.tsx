// 'use client';

// import { useState } from 'react';
// import IntroGate from '@/components/intro/IntroGate';
// import { ForestEntry } from '@/components/forest/ForestEntry';

// export default function Home() {
//   const [hasEntered, setHasEntered] = useState(false);

//   return (
//     <main className="w-full">
//       {!hasEntered ? (
//         <IntroGate onEnter={() => setHasEntered(true)} />
//       ) : (
//         <>
//           <ForestEntry />
//           {/* Phase 1 ends here - Forest Entry and scroll effect */}
//           {/* Additional rooms (door, living room, etc.) will be added in later phases */}
//         </>
//       )}
//     </main>
//   );
// }
'use client';

import { useState } from 'react';

import IntroGate from '@/components/intro/IntroGate';
//import { ForestEntry } from '@/components/forest/ForestEntry';
import Hero from '@/components/home/Hero';
import EnterTheHaus from '@/components/home/EnterTheHaus';
import TheUniform from '@/components/home/TheUniform';
import BuiltDifferently from '@/components/home/BuiltDifferently';
import HausCode from '@/components/home/HausCode';
import YourNextPiece from '@/components/home/YourNextPiece';
export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main className="w-full">
      {!hasEntered ? (
        <IntroGate onEnter={() => setHasEntered(true)} />
      ) : (
       <div className="animate-home-reveal">
  <Hero />

  <EnterTheHaus />
            <TheUniform />
         <BuiltDifferently />
         <HausCode />
         <YourNextPiece />
</div>
      )}
    </main>
  );
}
