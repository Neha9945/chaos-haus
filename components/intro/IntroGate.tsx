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

import { useState } from 'react';

interface IntroGateProps {
  onEnter: () => void;
}

export default function IntroGate({ onEnter }: IntroGateProps) {
  const [videoEnded, setVideoEnded] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleEnter = () => {
    setIsLeaving(true);

    setTimeout(() => {
      onEnter();
    }, 900);
  };

  return (
    <section
      className={`fixed inset-0 z-[9999] overflow-hidden bg-black transition-opacity duration-1000 ${
        isLeaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* FULL SCREEN VIDEO */}
      <video
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoEnded(true)}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/chaos-haus/videos/chaos-haus-intro.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* ENTER BUTTON */}
      <div
        className={`absolute bottom-12 left-1/2 z-10 -translate-x-1/2 transition-all duration-1000 ${
          videoEnded
            ? 'translate-y-0 opacity-100'
            : 'translate-y-6 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={handleEnter}
          className="
            group
            border border-white/30
            bg-black/20
            px-8
            py-4
            text-xs
            font-medium
            tracking-[0.35em]
            text-white
            transition-all
            duration-500
            hover:bg-white
            hover:text-black
          "
        >
          ENTER THE HAUS
          <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* SUBTLE LOADING / BRAND DETAIL */}
      <div
        className={`absolute top-8 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.4em] text-white/40 transition-opacity duration-1000 ${
          videoEnded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        CHAOS HAUS®
      </div>
    </section>
  );
}
