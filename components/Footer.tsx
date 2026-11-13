import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-transparent">
      {/* Decorative Traditional Wedding Procession Motif */}
      <div className="pt-2 pb-3 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          <img
            src="/0.png"
            alt="Traditional Wedding Footer"
            className="w-full h-auto max-w-xl mix-blend-multiply opacity-80"
          />
        </div>
      </div>

      {/* Regal Deep Velvet Maroon & Gold Luxury Footer */}
      <div className="relative border-t-2 border-[#FFD700]/40 bg-gradient-to-b from-[#35060A] via-[#240306] to-[#180204] text-[#FFFDF8] shadow-[0_-12px_35px_rgba(40,4,8,0.35)]">

        {/* Ambient Warm Golden Glow in Center */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(255, 215, 0, 0.2) 0%, rgba(24, 2, 4, 0) 70%)'
          }}
        />

        {/* Snug & Compact Main Container */}
        <div className="max-w-md mx-auto px-4 sm:px-6 pt-4 sm:pt-5 pb-6 sm:pb-7 flex flex-col items-center text-center relative z-10">

          {/* Section Header Caption */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            custom={0.05}
            variants={fadeUp}
            className="flex items-center gap-2 mb-3"
          >
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#FFD790]/40"></span>
            <span className="text-[9px] sm:text-[10px] text-[#FFD708]/90 font-serif tracking-[0.32em] uppercase font-bold drop-shadow-sm">
              Designed & Crafted by
            </span>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#FFD700]/40"></span>
          </motion.div>

          {/* Uday Studio Logo PNG + Cursive Name Beside + Spaced Text Links Below */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            custom={0.15}
            variants={fadeUp}
            className="flex items-center justify-center gap-3.5 sm:gap-4 my-2"
          >
            {/* Logo PNG without background box */}
            <div className="shrink-0 flex items-center justify-center">
              <img
                src="/us1.png"
                alt="Uday Studio"
                className="h-15 sm:h-13 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,215,0,0.3)] hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Name in cursive font + Space + Text Links */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-2xl sm:text-3xl font-script text-[#FFD700] tracking-wide leading-none drop-shadow-[0_2px_10px_rgba(255,215,0,0.4)]">
                Uday Studio
              </h3>

              {/* Text Type Links with intentional vertical space */}
              <div className="flex items-center gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] font-serif tracking-widest uppercase mt-3 sm:mt-3.5">
                <a
                  href="https://wa.me/919966657783?text=Hi%20Uday%20Studio%2C%20I%20visited%20the%20wedding%20invitation%20website%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-[#FFD700] transition-colors duration-200 underline-offset-2 hover:underline font-medium"
                >
                  WhatsApp
                </a>
                <span className="text-[#FFD700]/50 select-none text-[8px]">•</span>
                <a
                  href="https://www.instagram.com/udaystudio_pgr?rpxt=MWxxb3B5bmR3bWh3aA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-[#FFD700] transition-colors duration-200 underline-offset-2 hover:underline font-medium"
                >
                  Instagram
                </a>
                <span className="text-[#FFD700]/50 select-none text-[8px]">•</span>
                <a
                  href="https://udaystudio.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/85 hover:text-[#FFD700] transition-colors duration-200 underline-offset-2 hover:underline font-medium"
                >
                  Website
                </a>
              </div>
            </div>
          </motion.div>

          {/* Luxury Filigree Divider */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.22}
            variants={fadeUp}
            className="flex items-center justify-center gap-2 w-full max-w-[180px] my-2"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#FFD700] bg-[#FFD700]/20" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#FFD700]/30 to-transparent" />
          </motion.div>

          {/* Closing Signature */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.28}
            variants={fadeUp}
            className="flex items-center justify-center gap-1.5 mt-0.5 text-white/50 font-serif italic text-[8.5px] sm:text-[9.5px] tracking-wide"
          >
            <span>Crafted with creativity & attention to detail</span>
            <span className="text-[#FFD700] not-italic">♡</span>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
