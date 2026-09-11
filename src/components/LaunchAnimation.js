'use client';

import { useEffect, useState } from 'react';

const confetti = [
  { x: '-250px', y: '-180px', r: '540deg', d: '0ms' },
  { x: '-210px', y: '-270px', r: '-620deg', d: '60ms' },
  { x: '-150px', y: '-220px', r: '700deg', d: '120ms' },
  { x: '-90px', y: '-290px', r: '-480deg', d: '180ms' },
  { x: '100px', y: '-280px', r: '620deg', d: '40ms' },
  { x: '160px', y: '-220px', r: '-700deg', d: '100ms' },
  { x: '220px', y: '-150px', r: '560deg', d: '160ms' },
  { x: '280px', y: '-50px', r: '-620deg', d: '220ms' },
  { x: '250px', y: '70px', r: '720deg', d: '280ms' },
  { x: '190px', y: '160px', r: '-580deg', d: '340ms' },
  { x: '100px', y: '210px', r: '650deg', d: '400ms' },
  { x: '-100px', y: '210px', r: '-700deg', d: '460ms' },
  { x: '-190px', y: '150px', r: '580deg', d: '320ms' },
  { x: '-270px', y: '70px', r: '-650deg', d: '380ms' },
  { x: '-300px', y: '-40px', r: '720deg', d: '440ms' },
  { x: '-70px', y: '130px', r: '-520deg', d: '500ms' },
  { x: '70px', y: '150px', r: '680deg', d: '540ms' },
];

export default function LaunchAnimation() {
  const [visible, setVisible] = useState(false);
  const [opening, setOpening] = useState(false);
  const [popper, setPopper] = useState(false);
  const [burst, setBurst] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const now = new Date();

    // =====================================================
    // LAUNCH DAY
    // Only 12 September 2026
    // =====================================================

    const launchStart = new Date('2026-09-12T00:00:00');
    const launchEnd = new Date('2026-09-13T00:00:00');

    if (now < launchStart || now >= launchEnd) {
      return;
    }

    // Show only once per browser session
    const alreadyShown = sessionStorage.getItem(
      'patentathon-launch-2026'
    );

    if (alreadyShown) {
      return;
    }

    sessionStorage.setItem(
      'patentathon-launch-2026',
      'true'
    );

    setVisible(true);

    // =====================================================
    // ANIMATION TIMELINE
    // =====================================================

    // 0.8s → curtains start opening
    const openingTimer = setTimeout(() => {
      setOpening(true);
    }, 800);

    // 3.0s → party popper starts flying
    const popperTimer = setTimeout(() => {
      setPopper(true);
    }, 3000);

    // 3.9s → confetti burst
    const burstTimer = setTimeout(() => {
      setBurst(true);
    }, 3900);

    // 4.1s → logo and title reveal
    const revealTimer = setTimeout(() => {
      setReveal(true);
    }, 4100);

    // 7.5s → start leaving
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 7500);

    // 8.7s → remove completely
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 8700);

    return () => {
      clearTimeout(openingTimer);
      clearTimeout(popperTimer);
      clearTimeout(burstTimer);
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[99999] overflow-hidden bg-[#00172B]
      transition-opacity duration-[1200ms]
      ${exiting ? 'opacity-0' : 'opacity-100'}`}
    >

      {/* =====================================================
          STAGE BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#00172B] via-[#00243D] to-[#000A12]" />

      {/* Central stage glow */}
      <div
        className={`absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[420px] h-[420px]
        md:w-[650px] md:h-[650px]
        rounded-full
        bg-[#00A3FF]/10
        blur-[90px]
        transition-all duration-[2200ms]
        ${
          opening
            ? 'scale-100 opacity-100'
            : 'scale-50 opacity-0'
        }`}
      />

      {/* Floor light */}
      <div
        className={`absolute left-1/2 bottom-[-20%]
        -translate-x-1/2
        w-[800px] h-[280px]
        rounded-[50%]
        bg-[#00A3FF]/10
        blur-[80px]
        transition-opacity duration-[1800ms]
        ${
          opening ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* =====================================================
          TOP VALANCE
      ====================================================== */}

      <div
        className={`absolute z-50 top-0 left-0 right-0 h-20
        bg-gradient-to-b from-[#02060A] via-[#082A43] to-transparent
        transition-opacity duration-1000
        ${
          opening ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* =====================================================
          LEFT CURTAIN
      ====================================================== */}

      <div
        className={`absolute z-40 top-0 left-0
        h-full w-1/2
        transition-transform duration-[2200ms]
        ease-[cubic-bezier(0.77,0,0.18,1)]
        ${
          opening
            ? '-translate-x-[94%]'
            : 'translate-x-0'
        }`}
        style={{
          background:
            'linear-gradient(90deg, #010409 0%, #09263C 12%, #00111D 25%, #0B4265 39%, #01101B 52%, #0A3550 66%, #020A12 79%, #0B3B5B 91%, #010508 100%)',
          boxShadow:
            '18px 0 55px rgba(0,0,0,0.8)',
        }}
      >
        {/* Fabric folds */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'repeating-linear-gradient(92deg, transparent 0px, transparent 22px, rgba(255,255,255,0.09) 32px, rgba(0,0,0,0.45) 46px, transparent 62px)',
          }}
        />

        {/* Edge shadow */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/70 to-transparent" />
      </div>

      {/* =====================================================
          RIGHT CURTAIN
      ====================================================== */}

      <div
        className={`absolute z-40 top-0 right-0
        h-full w-1/2
        transition-transform duration-[2200ms]
        ease-[cubic-bezier(0.77,0,0.18,1)]
        ${
          opening
            ? 'translate-x-[94%]'
            : 'translate-x-0'
        }`}
        style={{
          background:
            'linear-gradient(270deg, #010409 0%, #09263C 12%, #00111D 25%, #0B4265 39%, #01101B 52%, #0A3550 66%, #020A12 79%, #0B3B5B 91%, #010508 100%)',
          boxShadow:
            '-18px 0 55px rgba(0,0,0,0.8)',
        }}
      >
        {/* Fabric folds */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'repeating-linear-gradient(88deg, transparent 0px, transparent 22px, rgba(255,255,255,0.09) 32px, rgba(0,0,0,0.45) 46px, transparent 62px)',
          }}
        />

        {/* Edge shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      {/* =====================================================
          PARTY POPPER
      ====================================================== */}

      <div
        className={`absolute z-[70] left-1/2 top-1/2
        transition-all duration-[950ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]
        ${
          popper
            ? 'translate-x-[130px] translate-y-[65px] rotate-[-28deg] scale-100 opacity-100'
            : 'translate-x-[520px] translate-y-[360px] rotate-[65deg] scale-75 opacity-0'
        }`}
      >
        <div className="relative">

          {/* Cone */}
          <div
            className="w-16 h-28
            rotate-[45deg]
            rounded-b-[45%]
            bg-gradient-to-br
            from-[#0057D9]
            via-[#00A3FF]
            to-[#0043A5]
            border-2 border-white/20
            shadow-[0_18px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-5 left-2 right-2 h-px bg-white/30 rotate-[-18deg]" />
            <div className="absolute top-10 left-2 right-2 h-px bg-white/20 rotate-[-18deg]" />
            <div className="absolute top-15 left-2 right-2 h-px bg-white/15 rotate-[-18deg]" />
          </div>

          {/* Opening */}
          <div
            className="absolute -top-3 -right-4
            w-9 h-13
            rounded-full
            rotate-[45deg]
            bg-gradient-to-r
            from-white
            to-[#00A3FF]
            border border-white/50
            shadow-[0_0_22px_rgba(0,163,255,0.5)]"
          />

          {/* Handle */}
          <div
            className="absolute -bottom-10 left-1
            w-5 h-13
            rounded-full
            rotate-[45deg]
            bg-[#071827]
            border border-white/10"
          />

        </div>
      </div>

      {/* =====================================================
          CONFETTI BURST
      ====================================================== */}

      {burst && (
        <div className="absolute inset-0 z-[60] pointer-events-none">

          {confetti.map((piece, index) => (
            <span
              key={index}
              className={`absolute left-1/2 top-1/2
              w-2 h-4 rounded-sm
              ${
                index % 4 === 0
                  ? 'bg-[#00A3FF]'
                  : index % 4 === 1
                    ? 'bg-white'
                    : index % 4 === 2
                      ? 'bg-[#0066FF]'
                      : 'bg-slate-300'
              }`}
              style={{
                animationName: 'patentathonConfetti',
                animationDuration: '2400ms',
                animationTimingFunction:
                  'cubic-bezier(0.12, 0.75, 0.2, 1)',
                animationDelay: piece.d,
                animationFillMode: 'forwards',
                '--confetti-x': piece.x,
                '--confetti-y': piece.y,
                '--confetti-r': piece.r,
              }}
            />
          ))}

          <style>
            {`
              @keyframes patentathonConfetti {
                0% {
                  transform:
                    translate(0, 0)
                    rotate(0deg)
                    scale(0.4);
                  opacity: 1;
                }

                35% {
                  opacity: 1;
                }

                70% {
                  opacity: 0.9;
                }

                100% {
                  transform:
                    translate(
                      var(--confetti-x),
                      var(--confetti-y)
                    )
                    rotate(var(--confetti-r))
                    scale(1);
                  opacity: 0;
                }
              }
            `}
          </style>

        </div>
      )}

      {/* =====================================================
          LOGO + MESSAGE
      ====================================================== */}

      <div
        className={`absolute z-30 inset-0
        flex items-center justify-center
        px-6 text-center
        transition-all duration-[1000ms]
        ${
          reveal
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-90'
        }`}
      >
        <div>

          {/* Logo */}
          <div className="flex justify-center mb-5">
            <img
              src="/LOGO.svg"
              alt="Patent-A-Thon 2.0"
              className="w-24 h-24 md:w-32 md:h-32
              object-contain
              drop-shadow-[0_0_35px_rgba(0,163,255,0.4)]"
            />
          </div>

          {/* Label */}
          <p
            className="text-[10px] md:text-xs
            font-black uppercase
            tracking-[0.35em]
            text-[#00A3FF]"
          >
            Officially Launched
          </p>

          {/* Main title */}
          <h1
            className="mt-3
            text-4xl sm:text-5xl md:text-7xl
            font-black tracking-tight
            text-white
            drop-shadow-[0_5px_30px_rgba(0,0,0,0.8)]"
          >
            PATENT-A-THON
          </h1>

          {/* Version */}
          <p
            className="mt-1
            text-2xl md:text-4xl
            font-black
            text-[#00A3FF]
            drop-shadow-[0_0_25px_rgba(0,163,255,0.35)]"
          >
            2.0
          </p>

          {/* Subtitle */}
          <p
            className="mt-5
            text-sm md:text-lg
            font-medium
            text-slate-300"
          >
            Innovation starts now.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-14 h-px bg-gradient-to-r from-transparent to-[#00A3FF]" />

            <div className="w-1.5 h-1.5 rounded-full bg-[#00A3FF]" />

            <div className="w-14 h-px bg-gradient-to-l from-transparent to-[#00A3FF]" />
          </div>

        </div>
      </div>

    </div>
  );
}
