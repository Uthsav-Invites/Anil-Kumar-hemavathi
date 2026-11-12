import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HORIZONTAL_IMAGES } from '../constants';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Loading sacred memories...');

  useEffect(() => {
    // List of all critical assets to preload
    const assetsToPreload: string[] = [
      '/2.1.jpg',
      '/5.jpg',
      '/3.11.jpg',
      '/3.12.jpg',
      '/0.png',
      ...HORIZONTAL_IMAGES.map((img) => img.url),
    ];

    // Remove duplicates
    const uniqueAssets = Array.from(new Set(assetsToPreload));
    const total = uniqueAssets.length;
    let loadedCount = 0;
    let isFinished = false;

    const finish = () => {
      if (isFinished) return;
      isFinished = true;
      setProgress(100);
      setStatusText('Welcome to the Celebration');
      setTimeout(() => {
        onComplete();
      }, 500);
    };

    // Safety timeout: never block the user for more than 7 seconds even on very slow connections
    const timeoutId = setTimeout(() => {
      finish();
    }, 7000);

    const updateProgress = () => {
      loadedCount += 1;
      const currentPct = Math.min(Math.round((loadedCount / total) * 100), 99);
      setProgress(currentPct);

      if (currentPct > 70) {
        setStatusText('Preparing the auspicious invitation...');
      } else if (currentPct > 35) {
        setStatusText('Loading Moments of Love...');
      }

      if (loadedCount >= total) {
        clearTimeout(timeoutId);
        finish();
      }
    };

    // Preload each image using the Image constructor
    uniqueAssets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // Don't block on broken image
    });

    // Also preload the background music
    try {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = '/1.mp3';
    } catch {
      // Ignore audio preload errors
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[2000] bg-[#4A0E0E] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden touch-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Decorative Rotating Mandala */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute w-72 h-72 sm:w-96 sm:h-96 opacity-10 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#FFD700] fill-current">
          <path d="M100,0 C110,40 150,40 150,100 C150,160 110,160 100,200 C90,160 50,160 50,100 C50,40 90,40 100,0 Z" />
        </svg>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center max-w-sm mx-auto">
        {/* Animated Sacred Diya */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            filter: [
              'drop-shadow(0 0 15px rgba(255,215,0,0.6))',
              'drop-shadow(0 0 30px rgba(255,215,0,0.9))',
              'drop-shadow(0 0 15px rgba(255,215,0,0.6))',
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 sm:w-20 sm:h-20 mb-6"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Flame */}
            <motion.path
              animate={{
                d: [
                  'M50 10 C55 22 65 34 65 50 C65 65 58 75 50 75 C42 75 35 65 35 50 C35 34 45 22 50 10 Z',
                  'M50 8 C57 24 67 36 67 50 C67 65 58 75 50 75 C42 75 33 65 33 50 C33 36 43 24 50 8 Z',
                  'M50 10 C55 22 65 34 65 50 C65 65 58 75 50 75 C42 75 35 65 35 50 C35 34 45 22 50 10 Z',
                ],
              }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              fill="url(#preloaderFlameGrad)"
            />
            {/* Inner Flame Core */}
            <circle cx="50" cy="52" r="10" fill="#FFF7CC" opacity="0.9" />
            {/* Diya Base */}
            <path
              d="M15 65 C15 65 30 85 50 85 C70 85 85 65 85 65 C85 65 70 75 50 75 C30 75 15 65 15 65 Z"
              fill="#800000"
              stroke="#FFD700"
              strokeWidth="2.5"
            />
            <defs>
              <linearGradient id="preloaderFlameGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF3B0" />
                <stop offset="40%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FF4500" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Traditional Invocation */}
        <p className="text-[10px] sm:text-xs font-serif text-[#FFD700] tracking-[0.25em] uppercase mb-1 drop-shadow">
          ॥ శ్రీరస్తు శుభమస్తు కళ్యాణమస్తు ॥
        </p>
        <p className="text-[9px] sm:text-[10px] text-amber-200/80 font-serif tracking-widest mb-3">
          ॥ Sri Lakshmi Venkateswara Swamy Prasannam ॥
        </p>

        {/* Wedding Title */}
        <h1 className="text-xl sm:text-2xl font-traditional text-white font-bold tracking-wider mb-1 drop-shadow-md">
          Devanna Gari Wedding
        </h1>
        <p className="font-script text-2xl sm:text-3xl text-[#FFD700] mb-8 drop-shadow">
          Anil Kumar & Hemavathi
        </p>

        {/* Sleek Gold Progress Bar */}
        <div className="w-56 sm:w-64 h-2 bg-black/40 rounded-full overflow-hidden border border-[#FFD700]/40 p-0.5 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FFD700] via-[#FFF9D2] to-[#FFD700] rounded-full shadow-[0_0_12px_rgba(255,215,0,0.8)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
          />
        </div>

        {/* Numerical Percentage */}
        <div className="flex items-center justify-between w-56 sm:w-64 mt-2 px-1">
          <span className="text-[10px] font-serif text-white/70 italic tracking-wider">
            {statusText}
          </span>
          <span className="text-xs font-mono font-bold text-[#FFD700] tracking-wider">
            {progress}%
          </span>
        </div>

        {/* Bottom subtle note */}
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#FFD700]/60 mt-8 font-semibold animate-pulse">
          Optimizing high quality photos...
        </p>
      </div>
    </motion.div>
  );
};

export default Preloader;

