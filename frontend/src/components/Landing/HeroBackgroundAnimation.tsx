import React from "react";
import { motion } from "framer-motion";

/**
 * HeroBackgroundAnimation
 * Refined 9-icon business transformation story for BOnRise.
 * 
 * FIX: Unified all keyframe arrays to exactly 8 elements and provided initial values 
 * to eliminate "undefined" SVG attribute errors during render and loop cycles.
 */

const DURATION = 10;
const TRANSITION = {
  duration: DURATION,
  ease: "easeInOut",
  repeat: Infinity,
} as const;

const ICONS = {
  // Store / Shop
  Shop: (
    <>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" />
      <polyline points="9 22 9 12 15 12 15 22" fill="none" />
    </>
  ),
  // Website Window
  Window: (
    <>
      <rect x="2" y="3" width="20" height="18" rx="2" ry="2" fill="none" />
      <line x1="2" y1="8" x2="22" y2="8" />
      <line x1="6" y1="5" x2="6" y2="5" />
      <line x1="9" y1="5" x2="9" y2="5" />
      <line x1="12" y1="5" x2="12" y2="5" />
    </>
  ),
  // Rising Arrow
  ArrowRise: (
    <>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" fill="none" />
      <polyline points="16 7 22 7 22 13" fill="none" />
    </>
  ),
  // Profile Card
  Profile: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" fill="none" />
      <circle cx="8" cy="10" r="2" fill="none" />
      <line x1="12" y1="9" x2="18" y2="9" />
      <line x1="12" y1="12" x2="18" y2="12" />
      <line x1="7" y1="16" x2="17" y2="16" />
    </>
  ),
  // Location Pin
  Location: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" />
      <circle cx="12" cy="10" r="3" fill="none" />
    </>
  ),
  // User
  User: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" />
      <circle cx="12" cy="7" r="4" fill="none" />
    </>
  ),
  // Global / Web
  Global: (
    <>
      <circle cx="12" cy="12" r="10" fill="none" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" />
    </>
  ),
  // Post Card
  Post: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </>
  ),
  // Notification (Alert Bell)
  Alert: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" fill="none" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" />
    </>
  ),
};

const GRID_X = [313, 500, 687];
const GRID_Y = [228, 321, 414];

const MAIN_NODES = [
  { id: "m1", start: [150, 150], target: [GRID_X[0], GRID_Y[0]], icon: ICONS.Shop },
  { id: "m2", start: [500, 80], target: [GRID_X[1], GRID_Y[0]], icon: ICONS.Window },
  { id: "m3", start: [850, 120], target: [GRID_X[2], GRID_Y[0]], icon: ICONS.ArrowRise },
  { id: "m4", start: [100, 350], target: [GRID_X[0], GRID_Y[1]], icon: ICONS.Profile },
  { id: "m5", start: [900, 350], target: [GRID_X[1], GRID_Y[1]], icon: ICONS.Location },
  { id: "m6", start: [150, 520], target: [GRID_X[2], GRID_Y[1]], icon: ICONS.User },
  { id: "m7", start: [450, 550], target: [GRID_X[0], GRID_Y[2]], icon: ICONS.Global },
  { id: "m8", start: [800, 500], target: [GRID_X[1], GRID_Y[2]], icon: ICONS.Post },
  { id: "m9", start: [650, 60], target: [GRID_X[2], GRID_Y[2]], icon: ICONS.Alert },
];

const HeroBackgroundAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none select-none">
      <motion.svg
        viewBox="0 0 1000 600"
        className="w-full h-full opacity-70"
        preserveAspectRatio="xMidYMid slice"
        // Scale handles responsiveness without affecting internal coordinates
        initial={{ scale: 1.1 }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-3)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--accent-1)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Phase 6: Signal Waves */}
        <motion.circle
          cx={500}
          cy={300}
          r={100}
          fill="none"
          stroke="var(--accent-3)"
          strokeWidth={3}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            scale: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 6, 0.5],
            opacity: [0, 0, 0, 0, 0, 0, 0.8, 0],
          }}
          transition={TRANSITION}
        />

        {/* Phase 2: Connecting Lines */}
        {MAIN_NODES.map((n, i) => {
          const next = MAIN_NODES[(i + 1) % MAIN_NODES.length];
          return (
            <motion.line
              key={`line-${n.id}`}
              stroke="var(--accent-1)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ x1: n.start[0], y1: n.start[1], x2: next.start[0], y2: next.start[1], opacity: 0 }}
              animate={{
                x1: [n.start[0], n.start[0], n.start[0], 500, 500, 500, 500, n.start[0]],
                y1: [n.start[1], n.start[1], n.start[1], 300, 300, 300, 300, n.start[1]],
                x2: [next.start[0], next.start[0], next.start[0], 500, 500, 500, 500, next.start[0]],
                y2: [next.start[1], next.start[1], next.start[1], 300, 300, 300, 300, next.start[1]],
                opacity: [0, 0.2, 0.6, 0.4, 0.2, 0, 0, 0],
                pathLength: [0, 1, 1, 1, 0.5, 0, 0, 0],
              }}
              transition={TRANSITION}
            />
          );
        })}

        {/* Phase 4: Hub Interface (Solution) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0, 0, 0, 1, 1, 0, 0], 
            scale: [0.8, 0.8, 0.8, 0.4, 1, 1, 0.8, 0.4],
          }}
          transition={TRANSITION}
          style={{ transformOrigin: "500px 300px" }}
        >
          <rect x={220} y={140} width={560} height={320} rx={24} fill="url(#hubGradient)" stroke="var(--accent-3)" strokeWidth={1.5} />
          <rect x={220} y={140} width={560} height={42} rx={24} fill="var(--primary)" opacity={0.6} />
          <circle cx={250} cy={161} r={5} fill="#ef4444" />
          <circle cx={270} cy={161} r={5} fill="#fbbf24" />
          <circle cx={290} cy={161} r={5} fill="#22c55e" />

          {/* 3x3 Grid Boxes */}
          {[...Array(9)].map((_, i) => {
            const cx = GRID_X[i % 3];
            const cy = GRID_Y[Math.floor(i / 3)];
            return (
              <rect
                key={i}
                x={cx - 45}
                y={cy - 35}
                width={90}
                height={70}
                rx={10}
                fill="var(--primary)"
                opacity={0.25}
                stroke="var(--accent-2)"
                strokeWidth={0.5}
              />
            );
          })}
        </motion.g>

        {/* Phase 1-6: Icons */}
        {MAIN_NODES.map((n) => (
          <motion.g
            key={n.id}
            initial={{ x: n.start[0], y: n.start[1], opacity: 0 }}
            animate={{
              x: [n.start[0], n.start[0] + 15, n.start[0], 500, n.target[0], n.target[0], n.target[0], n.start[0]],
              y: [n.start[1], n.start[1] - 15, n.start[1], 300, n.target[1], n.target[1], n.target[1], n.start[1]],
              opacity: [0.1, 0.3, 1, 1, 1, 1, 0, 0.1], 
              scale: [0.7, 0.9, 1.1, 0.3, 0.85, 0.85, 0.6, 0.7],
            }}
            transition={TRANSITION}
            stroke="var(--accent-3)"
          >
            <circle r={20} fill="var(--primary)" stroke="var(--accent-1)" strokeWidth={1} />
            <g transform="translate(-12, -12) scale(1)" fill="none" stroke="var(--accent-3)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              {n.icon}
            </g>
          </motion.g>
        ))}

        {/* Phase 5: Success (BonRise Logo) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0, 0, 0, 0, 0, 1, 0], 
            scale: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.1, 0.4],
          }}
          transition={TRANSITION}
          style={{ transformOrigin: "500px 300px" }}
        >
          <circle cx={500} cy={300} r={100} fill="var(--accent-3)" opacity={0.4} style={{ filter: "blur(40px)" }} />
          <image href="/logo.png" x={350} y={236} width={300} height={128} />
        </motion.g>

        {/* Phase 6: Ripple */}
        <motion.circle
          cx={500}
          cy={300}
          r={50}
          fill="var(--accent-3)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            scale: [0, 0, 0, 0, 0, 0, 3, 0],
            opacity: [0, 0, 0, 0, 0, 0, 0.3, 0],
          }}
          transition={TRANSITION}
          style={{ filter: "blur(25px)" }}
        />
      </motion.svg>
    </div>
  );
};

export { HeroBackgroundAnimation };
