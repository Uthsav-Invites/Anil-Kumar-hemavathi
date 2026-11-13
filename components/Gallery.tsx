import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HORIZONTAL_IMAGES } from '../constants';
import WeddingVideo from './WeddingVideo';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Ornate Corner Accent for matching gallery frames
const CornerFloret: React.FC<{ rotation?: string }> = ({ rotation = '' }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-7 h-7 sm:w-8 sm:h-8 text-[#FFD700] pointer-events-none drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] ${rotation}`}
  >
    <path d="M4 56V26C4 13.8497 13.8497 4 26 4H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M10 56V30C10 18.9543 18.9543 10 30 10H56" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    <circle cx="16" cy="16" r="3.5" fill="currentColor" />
    <path d="M22 6C22 14 14 22 6 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
  </svg>
);

const ImageSlider: React.FC<{ images: { url: string }[]; aspect: string; title?: string }> = ({ images, aspect, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative group w-full max-w-sm sm:max-w-md mx-auto px-1 sm:px-2">
      {/* Ambient Gold & Maroon Glow Behind Frame */}
      <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-[#FFD700]/30 via-[#800000]/40 to-[#FFD700]/30 rounded-[3rem] blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

      {/* Ornate Gold Border Frame matching video */}
      <div className="relative p-1.5 sm:p-2 rounded-[2.5rem] bg-gradient-to-b from-[#FFE57F] via-[#FFD700] to-[#B8860B] shadow-[0_20px_45px_rgba(74,14,14,0.4),0_0_25px_rgba(255,215,0,0.3)]">
        <div className="relative rounded-[2.2rem] overflow-hidden bg-[#200404] border-2 border-[#FFD700]/80">
          {/* Corner Ornaments */}
          <div className="absolute top-2 left-2 z-20 pointer-events-none">
            <CornerFloret />
          </div>
          <div className="absolute top-2 right-2 z-20 pointer-events-none">
            <CornerFloret rotation="rotate-90" />
          </div>
          <div className="absolute bottom-2 left-2 z-20 pointer-events-none">
            <CornerFloret rotation="-rotate-90" />
          </div>
          <div className="absolute bottom-2 right-2 z-20 pointer-events-none">
            <CornerFloret rotation="rotate-180" />
          </div>

          {/* Sliding Images Container */}
          <div className={`relative ${aspect} overflow-hidden w-full`}>
            <div
              className="flex h-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div key={idx} className="min-w-full h-full relative">
                  <img
                    src={img.url}
                    alt={title ? `${title} ${idx + 1}` : `Gallery Image ${idx + 1}`}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A0E0E]/60 via-transparent to-black/30 opacity-70"></div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-black/50 hover:bg-[#800000] text-[#FFD700] rounded-full flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all border border-[#FFD700]/50 z-10 hover:scale-110 active:scale-95 shadow-lg backdrop-blur-sm"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-black/50 hover:bg-[#800000] text-[#FFD700] rounded-full flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all border border-[#FFD700]/50 z-10 hover:scale-110 active:scale-95 shadow-lg backdrop-blur-sm"
              aria-label="Next Image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots navigation */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                      ? 'bg-gradient-to-r from-[#FFD700] to-[#FFE57F] w-6 shadow-[0_0_8px_rgba(255,215,0,0.8)]'
                      : 'bg-white/40 hover:bg-white/70 w-2'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="pt-12 pb-20 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-script text-[#800000] mb-2 drop-shadow-sm">
            Moments of Love
          </h2>
          <p className="text-[#4A0E0E] font-serif tracking-widest uppercase text-xs md:text-sm">
            A glimpse into our joyous journey
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mt-4"
          />
        </motion.div>

        {/* Dual Showcase: Video Frame Next to Vertical Sliding Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center justify-items-center"
        >
          {/* Left / Primary: Wedding Film Video in Royal Frame */}
          <div className="w-full flex justify-center">
            <WeddingVideo />
          </div>

          {/* Right: Previous Sliding Vertical Images in Royal Frame */}
          {HORIZONTAL_IMAGES.length > 0 && (
            <div className="w-full flex justify-center">
              <ImageSlider images={HORIZONTAL_IMAGES} aspect="aspect-[2/3]" />
            </div>
          )}
        </motion.div>

        {/* Romantic Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 glass-maroon py-6 px-8 sm:px-12 rounded-[2.5rem] text-center italic text-[#4A0E0E] font-serif text-sm md:text-base max-w-2xl mx-auto leading-relaxed border border-[#FFD700]/40 shadow-lg relative"
        >
          <span className="text-xl text-[#FFD700] mr-1">“</span>
          A collection of memories, woven with love and laughter, leading us to our forever.
          <span className="text-xl text-[#FFD700] ml-1">”</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
