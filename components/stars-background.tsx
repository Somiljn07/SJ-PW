"use client";

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

// ── ✏️ Branded comet config — each fires independent of the others ──
const COMETS = [
  { label: "AWS",        color: "#FF9900", glow: "rgba(255,153,0,0.6)"   },
  { label: "Databricks", color: "#FF3621", glow: "rgba(255,54,33,0.6)"   },
  { label: "Docker",     color: "#2496ED", glow: "rgba(36,150,237,0.6)"  },
  { label: "Kubernetes", color: "#326CE5", glow: "rgba(50,108,229,0.6)"  },
  { label: "CI/CD",      color: "#FC6D26", glow: "rgba(252,109,38,0.6)"  },
  { label: "Terraform",  color: "#7B42BC", glow: "rgba(123,66,188,0.6)"  },
];

type Star = {
  id: number; top: number; left: number; size: number;
  duration: number; opacity: number; color: string;
};

type Meteor = {
  id: number; startX: number; startY: number;
  delay: number; duration: number;
};

type Comet = {
  id: number; label: string; color: string; glow: string;
  startX: number; startY: number;
  delay: number; duration: number;
  angle: number; // degrees — randomized per comet
};

// Warm star colors mixed with cool blues for a richer field
const STAR_COLORS = [
  '#ffffff', '#e0f2fe', '#bae6fd',   // cool white/blue
  '#fef3c7', '#fde68a',               // warm amber
  '#fce7f3', '#f9a8d4',               // rose/pink
  '#ede9fe', '#c4b5fd',               // violet
  '#38bdf8', '#818cf8',               // sky / indigo
];

export function StarsBackground() {
  const [stars,   setStars]   = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [comets,  setComets]  = useState<Comet[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax — star layer drifts at ~30% of scroll speed
  const { scrollY } = useScroll();
  const starsY    = useTransform(scrollY, [0, 3000], [0, -200]);
  const nebulaY   = useTransform(scrollY, [0, 3000], [0, -80]);
  const auroraY   = useTransform(scrollY, [0, 3000], [0, -60]);

  useEffect(() => {
    // ── Static star field (warm + cool mix) ───────────────────
    setStars(
      Array.from({ length: 280 }).map((_, i) => {
        const size = Math.random() * 2.8 + 0.4;
        return {
          id: i, size,
          top:      Math.random() * 100,
          left:     Math.random() * 100,
          duration: Math.random() * 5 + 2,
          opacity:  Math.random() * 0.75 + 0.2,
          color:    STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        };
      })
    );

    // ── Periodic plain meteors (no labels) ────────────────────
    setMeteors(
      Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        startX: 20 + Math.random() * 60,
        startY: 2  + Math.random() * 30,
        delay:    i * 7 + Math.random() * 4,
        duration: 1.2 + Math.random() * 0.8,
      }))
    );

    // ── Branded comets — evenly spread so max 1-2 visible at once ─
    // Each comet uses a 40s total cycle: travels in the first ~12s,
    // then stays invisible for the remaining 28s before repeating.
    const CYCLE = 40;
    setComets(
      COMETS.map((c, i) => ({
        id:       i,
        label:    c.label,
        color:    c.color,
        glow:     c.glow,
        startX:   55 + Math.random() * 35,
        startY:    5 + Math.random() * 35,
        delay:    i * (CYCLE / COMETS.length), // evenly distributed across the cycle
        duration: CYCLE,   // all comets share the same cycle length
        angle:    -(38 + Math.random() * 16),  // -38° to -54°
      }))
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#040814]"
    >
      {/* ── Aurora borealis bands ──────────────────────────── */}
      <motion.div style={{ y: auroraY }} className="absolute inset-0">
        {/* Emerald aurora band */}
        <div
          className="absolute top-[-8%] left-[-10%] w-[120%] h-[35%] opacity-[0.07]"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(16,185,129,0.9) 40%, rgba(16,185,129,0.5) 70%, transparent 100%)',
            filter: 'blur(60px)',
            animation: 'aurora-drift 18s ease-in-out infinite alternate',
          }}
        />
        {/* Indigo aurora band */}
        <div
          className="absolute top-[-5%] left-[20%] w-[100%] h-[30%] opacity-[0.055]"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.9) 45%, rgba(99,102,241,0.4) 75%, transparent 100%)',
            filter: 'blur(80px)',
            animation: 'aurora-drift 22s ease-in-out infinite alternate-reverse',
            animationDelay: '4s',
          }}
        />
        {/* Purple aurora accent */}
        <div
          className="absolute top-[-3%] right-[-5%] w-[70%] h-[25%] opacity-[0.04]"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(168,85,247,0.9) 50%, transparent 100%)',
            filter: 'blur(70px)',
            animation: 'aurora-drift 26s ease-in-out infinite alternate',
            animationDelay: '8s',
          }}
        />
      </motion.div>

      {/* ── Nebula depth blobs ─────────────────────────────── */}
      <motion.div style={{ y: nebulaY }} className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-900/20 blur-[130px] mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-indigo-900/15 blur-[150px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[30%] left-[40%] w-[50%] h-[50%] rounded-full bg-emerald-900/8 blur-[120px] mix-blend-screen opacity-40 animate-pulse" style={{ animationDuration: '14s' }} />
      </motion.div>

      {/* ── Star field w/ parallax ─────────────────────────── */}
      <motion.div style={{ y: starsY }} className="absolute inset-0">
        {stars.map((star) => (
          <div key={star.id} className="absolute rounded-full" style={{
            top: `${star.top}%`, left: `${star.left}%`,
            width:  `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            backgroundColor: star.color,
            animation: `twinkle ${star.duration}s infinite alternate ease-in-out`,
            boxShadow: `0 0 ${star.size + 2}px ${star.color}90`,
          }} />
        ))}
      </motion.div>

      {/* ── Plain meteors (no labels) ──────────────────────── */}
      {meteors.map((m) => (
        <div
          key={m.id}
          className="absolute"
          style={{
            left:     `${m.startX}%`,
            top:      `${m.startY}%`,
            opacity: 0,
            animation: `meteor ${m.duration}s linear ${m.delay}s infinite`,
          }}
        >
          <div style={{
            position:     'absolute',
            right:        '100%',
            top:          '50%',
            transform:    'translateY(-50%) rotate(-42deg)',
            transformOrigin: 'right center',
            width:        '90px',
            height:       '1px',
            background:   'linear-gradient(to right, transparent, rgba(255,255,255,0.6), #fff)',
            boxShadow:    '0 0 4px rgba(255,255,255,0.4)',
            borderRadius: '9999px',
          }} />
          <div style={{
            position:    'absolute',
            right:       'calc(100% - 3px)',
            top:         '50%',
            transform:   'translateY(-50%)',
            width:       '3px', height: '3px',
            borderRadius: '50%',
            background:  '#ffffff',
            boxShadow:   '0 0 6px 2px rgba(255,255,255,0.8)',
          }} />
        </div>
      ))}

      {/* ── Branded comets with upgraded trails + label pills ─ */}
      {comets.map((c) => (
        <div
          key={c.id}
          className="absolute"
          style={{
            left:    `${c.startX}vw`,
            top:     `${c.startY}vh`,
            opacity: 0,
            animation: `shoot ${c.duration}s linear ${c.delay}s infinite`,
          }}
        >
          {/* Long gradient comet tail */}
          <div style={{
            position:        'absolute',
            right:           '100%',
            top:             '50%',
            transform:       `translateY(-50%) rotate(${c.angle}deg)`,
            transformOrigin: 'right center',
            width:           '240px',
            height:          '2.5px',
            borderRadius:    '9999px',
            // 3-stop gradient: transparent → faint → bright (tip = hot)
            background:      `linear-gradient(to right, transparent 0%, ${c.color}30 40%, ${c.color} 100%)`,
            boxShadow:       `0 0 10px 2px ${c.glow}, 0 0 4px ${c.color}`,
            filter:          'blur(0.3px)',
          }} />

          {/* Coma halo behind the nucleus */}
          <div style={{
            position:    'absolute',
            right:       'calc(100% - 7px)',
            top:         '50%',
            transform:   'translateY(-50%)',
            width:       '14px', height: '14px',
            borderRadius: '50%',
            background:  `radial-gradient(circle, ${c.glow} 0%, transparent 70%)`,
            filter:      'blur(4px)',
          }} />

          {/* Bright nucleus dot */}
          <div style={{
            position:    'absolute',
            right:       'calc(100% - 4px)',
            top:         '50%',
            transform:   'translateY(-50%)',
            width:       '6px', height: '6px',
            borderRadius: '50%',
            background:  '#ffffff',
            boxShadow:   `0 0 10px 4px ${c.glow}`,
          }} />

          {/* Label pill — refined, glassmorphic */}
          <span style={{
            fontFamily:    '"JetBrains Mono", "Fira Code", monospace',
            fontSize:      '11px',
            fontWeight:    500,
            letterSpacing: '0.09em',
            color:         '#ffffff',
            textShadow:    `0 0 10px ${c.color}`,
            whiteSpace:    'nowrap',
            background:    'rgba(4, 8, 20, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border:        `1px solid ${c.color}55`,
            boxShadow:     `0 0 16px ${c.color}30, inset 0 1px 0 rgba(255,255,255,0.06)`,
            padding:       '3px 9px',
            borderRadius:  '20px',
          }}>
            {c.label}
          </span>
        </div>
      ))}

      {/* ── Constellation lines ────────────────────────────── */}
      <svg className="absolute inset-0 w-full h-full opacity-35" aria-hidden="true">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <polyline points="15%,15% 22%,28% 28%,20% 40%,25% 48%,12%" fill="none" stroke="rgba(186,230,253,0.5)" strokeWidth="0.8" strokeDasharray="3 4" />
        <circle cx="15%" cy="15%" r="2.5" fill="#bae6fd" filter="url(#glow)"/>
        <circle cx="22%" cy="28%" r="2"   fill="#e0f2fe" filter="url(#glow)"/>
        <circle cx="28%" cy="20%" r="2.5" fill="#bae6fd" filter="url(#glow)"/>
        <circle cx="40%" cy="25%" r="2.5" fill="#e0f2fe" filter="url(#glow)"/>
        <circle cx="48%" cy="12%" r="2"   fill="#ffffff" filter="url(#glow)"/>

        <polyline points="75%,60% 80%,65% 88%,60% 85%,50% 75%,55% 75%,60% 65%,45% 55%,38%" fill="none" stroke="rgba(186,230,253,0.4)" strokeWidth="0.8" strokeDasharray="3 4" />
        <circle cx="75%" cy="60%" r="2.5" fill="#bae6fd" filter="url(#glow)"/>
        <circle cx="80%" cy="65%" r="2"   fill="#e0f2fe" filter="url(#glow)"/>
        <circle cx="88%" cy="60%" r="2"   fill="#ffffff" filter="url(#glow)"/>
        <circle cx="85%" cy="50%" r="2.5" fill="#bae6fd" filter="url(#glow)"/>
        <circle cx="65%" cy="45%" r="2.5" fill="#ffffff" filter="url(#glow)"/>
        <circle cx="55%" cy="38%" r="2.5" fill="#bae6fd" filter="url(#glow)"/>

        <polyline points="10%,75% 15%,70% 30%,85% 35%,80% 45%,85%" fill="none" stroke="rgba(186,230,253,0.4)" strokeWidth="0.8" strokeDasharray="3 4" />
        <circle cx="10%" cy="75%" r="2"   fill="#ffffff" filter="url(#glow)"/>
        <circle cx="15%" cy="70%" r="2"   fill="#e0f2fe" filter="url(#glow)"/>
        <circle cx="30%" cy="85%" r="2.5" fill="#bae6fd" filter="url(#glow)"/>
        <circle cx="35%" cy="80%" r="2"   fill="#ffffff" filter="url(#glow)"/>
        <circle cx="45%" cy="85%" r="2.5" fill="#bae6fd" filter="url(#glow)"/>

        <polyline points="80%,15% 90%,25% 85%,35% 70%,30% 80%,15%" fill="none" stroke="rgba(186,230,253,0.3)" strokeWidth="0.6" strokeDasharray="2 5" />
        <circle cx="80%" cy="15%" r="2"   fill="#ffffff" filter="url(#glow)"/>
        <circle cx="90%" cy="25%" r="2"   fill="#e0f2fe" filter="url(#glow)"/>
        <circle cx="85%" cy="35%" r="2.5" fill="#bae6fd" filter="url(#glow)"/>
        <circle cx="70%" cy="30%" r="2"   fill="#e0f2fe" filter="url(#glow)"/>
      </svg>

      <style>{`
        @keyframes twinkle {
          0%   { opacity: 0.1; transform: scale(0.6); }
          100% { opacity: 1;   transform: scale(1.4); }
        }

        /* Comet — travels in the first 30% of the cycle, then stays
           invisible for the remaining 70% before repeating.
           This ensures max 1-2 comets are ever visible at once. */
        @keyframes shoot {
          0%    { opacity: 0;    transform: translate(0, 0); }
          3%    { opacity: 0.95; }
          26%   { opacity: 0.9;  }
          30%   { opacity: 0;    transform: translate(-110vw, 75vh); }
          30.1% { opacity: 0;    transform: translate(0, 0); }
          100%  { opacity: 0;    transform: translate(0, 0); }
        }

        /* Plain meteor — fast, white, no label */
        @keyframes meteor {
          0%   { opacity: 0;   transform: translate(0, 0); }
          5%   { opacity: 0.7; }
          80%  { opacity: 0.6; }
          100% { opacity: 0;   transform: translate(-60vw, 40vh); }
        }

        /* Aurora — slow horizontal drift */
        @keyframes aurora-drift {
          0%   { transform: translateX(-8%) skewX(-4deg); opacity: 0.7; }
          50%  { transform: translateX(4%)  skewX(2deg);  opacity: 1; }
          100% { transform: translateX(-4%) skewX(-2deg); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
