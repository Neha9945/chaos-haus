// "use client";

// type IntroGateProps = {
//   onEnter: () => void;
// };

// export default function IntroGate({ onEnter }: IntroGateProps) {
//   return (
//     <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#252522] text-[#F3EEE4]">
      
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full border border-[#F3EEE4]/20" />
//         <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full border border-[#F3EEE4]/10" />
//       </div>

//       <div className="relative z-10 flex max-w-xl flex-col items-center px-6 text-center">

//         <p className="mb-8 text-[10px] uppercase tracking-[0.45em] opacity-60">
//           Chaos Index // 001
//         </p>

//         <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
//           CHAOS HAUS®
//         </h1>

//         <p className="mt-6 text-xs uppercase tracking-[0.3em] opacity-60">
//           Enter somewhere else.
//         </p>

//         <button
//           type="button"
//           onClick={onEnter}
//           className="mt-14 border border-[#F3EEE4]/50 px-8 py-4 text-[11px] uppercase tracking-[0.25em] transition hover:bg-[#F3EEE4] hover:text-[#252522]"
//         >
//           Enter the Haus →
//         </button>

//       </div>
//     </section>
//   );
// }
'use client';

import { useEffect, useRef } from 'react';

interface IntroGateProps {
  onEnter: () => void;
}

export default function IntroGate({ onEnter }: IntroGateProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleVideoEnd = () => {
      onEnter();
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [onEnter]);

  return (
    <section className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b0b0b] overflow-hidden">
      
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="h-full w-full object-contain"
      >
        <source
          src="/chaos-haus/videos/chaos-haus-intro.mp4"
          type="video/mp4"
        />
      </video>

    </section>
  );
}
