import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLOKAS, WEDDING_DATE } from '../constants';

const Hero: React.FC = () => {
  const [currentSloka, setCurrentSloka] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const slokaInterval = setInterval(() => {
      setCurrentSloka((prev) => (prev + 1) % SLOKAS.length);
    }, 5000);

    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = WEDDING_DATE.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timerInterval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => {
      clearInterval(slokaInterval);
      clearInterval(timerInterval);
    };
  }, []);

  const handleSaveDate = () => {
    const event = {
      title: "Wedding Ceremony of Anil Kumar & Hemavathi",
      details: "Join us to celebrate the auspicious marriage ceremony of Chi. D. Anil Kumar, M.Sc. & Chi.La.Sou. P. Hemavathi, M.B.A.",
      location: "P.S. Parems Function Hall, 4 Roads, Gangavaram Mandal, Chittoor Dist.",
      start: "20261119T020000",
      end: "20261119T030000"
    };

    const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleUrl, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#4A0E0E] py-20">
      {/* Ken Burns Background Image Effect */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/5.jpg')`,
          filter: 'brightness(0.45)'
        }}
      />

      {/* Top-to-Bottom Soft Dark Gradient Overlay for optimal legibility */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/40 to-[#4A0E0E]/90 pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">

        {/* Shloka Container */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 min-h-[3rem] flex items-center justify-center px-4 py-2 rounded-full bg-[#800000]/40 backdrop-blur-md border border-[#FFD700]/30 shadow-lg"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSloka}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#FFD700] font-traditional text-xs sm:text-sm md:text-base tracking-widest italic drop-shadow"
            >
              {SLOKAS[currentSloka]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Invitation Subheader */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#FFD700] font-traditional text-xs sm:text-sm md:text-base tracking-[0.3em] mb-2 uppercase drop-shadow-md font-bold"
        >
          Smt. D. Lakshmamma & Sri D. Srinivasulu Gowdu
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-white/90 font-serif text-xs md:text-sm tracking-[0.25em] uppercase mb-1"
        >
          Solicit your gracious presence on the auspicious occasion of the marriage of our son
        </motion.p>

        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="text-[#FFD700] font-script text-3xl sm:text-5xl md:text-6xl mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        >
          Wedding Ceremony
        </motion.h2>

        {/* Top Decorative Flourish Bracket */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center justify-center gap-3 my-2 text-[#FFD700]"
        >
          <div className="h-px w-32 sm:w-48 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
        </motion.div>

        {/* Main Names Centerpiece: Elegant Classic Layout */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="my-6 flex flex-col items-center gap-2 text-center"
        >
          <h1 className="text-white font-traditional text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider drop-shadow-2xl font-bold uppercase whitespace-nowrap">
            Anil Kumar
          </h1>

          <span className="text-[#FFD700] font-script text-4xl sm:text-6xl md:text-7.5xl lg:text-8.5xl drop-shadow-[0_0_25px_rgba(255,215,0,0.7)] inline-block leading-none">
            &
          </span>

          <h1 className="text-white font-traditional text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider drop-shadow-2xl font-bold uppercase whitespace-nowrap">
            Hemavathi
          </h1>
        </motion.div>

        {/* Bottom Decorative Flourish Bracket */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center justify-center gap-3 my-3 text-[#FFD700]"
        >
          <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
          <span className="text-sm sm:text-base font-serif italic text-[#FFD700] uppercase tracking-widest px-2">
            Subha Vivaham
          </span>
          <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
        </motion.div>

        {/* Date & Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-white font-serif text-lg sm:text-2xl md:text-3xl italic tracking-wide mb-8 drop-shadow-md"
        >
          19th November, 2026 • Gangavaram, Chittoor
        </motion.p>

        {/* Glassmorphism Countdown Timer with Maroon Accent & Animated Tick */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-4 gap-3 sm:gap-6 max-w-md mx-auto mb-10 w-full px-2"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hrs', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Sec', value: timeLeft.seconds }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, translateY: -4 }}
              className="bg-[#800000]/45 backdrop-blur-md flex flex-col items-center py-3 sm:py-4 rounded-2xl border border-[#FFD700]/40 shadow-[0_10px_25px_rgba(0,0,0,0.4)] px-2 sm:px-4 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <AnimatePresence mode="popLayout">
                <motion.span
                  key={item.value}
                  initial={{ y: -8, scale: 0.85, opacity: 0.6 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: 8, scale: 0.85, opacity: 0.6 }}
                  transition={{ duration: 0.25 }}
                  className="text-2xl sm:text-4xl font-bold text-[#FFD700] font-serif drop-shadow-[0_2px_8px_rgba(255,215,0,0.4)]"
                >
                  {item.value.toString().padStart(2, '0')}
                </motion.span>
              </AnimatePresence>

              <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] text-white/85 font-bold mt-1">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Save the Date Button with Soft Gradient, Soft Shadow & Glow Animation */}
        <motion.button
          onClick={handleSaveDate}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{
            scale: 1.08,
            boxShadow: '0 0 35px rgba(255, 215, 0, 0.7)'
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 1.1 }}
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#FFD700] via-[#FFE57F] to-[#FFD700] text-[#4A0E0E] font-bold rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(255,215,0,0.4)] border-2 border-white/80 tracking-[0.2em] uppercase text-xs md:text-sm hover:z-20 relative group overflow-hidden"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
          />
          <span className="relative z-10 font-bold drop-shadow-sm flex items-center gap-2">
            SAVE THE DATE
          </span>
        </motion.button>
      </div>

      {/* Decorative Corner Mandalas */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-50px] left-[-50px] w-48 h-48 md:w-80 md:h-80 opacity-20 pointer-events-none z-10"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#FFD700] fill-current">
          <path d="M100,0 C110,40 150,40 150,100 C150,160 110,160 100,200 C90,160 50,160 50,100 C50,40 90,40 100,0 Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-50px] right-[-50px] w-48 h-48 md:w-80 md:h-80 opacity-20 pointer-events-none z-10"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#FFD700] fill-current">
          <path d="M100,0 C110,40 150,40 150,100 C150,160 110,160 100,200 C90,160 50,160 50,100 C50,40 90,40 100,0 Z" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
