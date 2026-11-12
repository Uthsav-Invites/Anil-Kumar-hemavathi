import React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  const quoteText = "Two lives, two hearts, joined together in friendship, united forever in love. Under the divine presence of Sri Lakshmi Venkateswara Swamy and the blessings of our elders and families, we begin our sacred journey together.";
  const words = quoteText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="story" className="py-12 px-4 text-center bg-transparent relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="glass-maroon p-8 sm:p-12 md:p-16 rounded-[2rem] border-2 border-[#800000]/10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-script text-[#800000] mb-6 relative z-10"
          >
            Our Sacred Union
          </motion.h2>

          <motion.p
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-[#4A0E0E] font-serif text-base sm:text-lg md:text-xl italic leading-relaxed max-w-3xl mx-auto mb-14 relative z-10 flex flex-wrap justify-center gap-x-1.5 gap-y-1"
          >
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <div className="flex flex-row justify-center items-center gap-6 sm:gap-12 overflow-visible relative z-10">
            {/* Groom */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="relative">
                <motion.img
                  initial={{ rotate: -10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  src="/3.11.jpg"
                  alt="Anil Kumar"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full border-4 border-[#FFD700] p-1 object-cover mb-2 shadow-lg group-hover:-rotate-3 transition-transform"
                />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 sm:-bottom-2 bg-[#800000] text-white text-[8px] sm:text-[10px] px-2 sm:px-4 py-0.5 sm:py-1 rounded-full font-bold border border-[#FFD700] shadow-md whitespace-nowrap">GROOM</div>
              </div>
              <p className="font-traditional font-bold mt-3 text-sm sm:text-xl text-[#800000] whitespace-nowrap">D. Anil Kumar</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#FFD700] to-transparent mb-2"></div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-3xl sm:text-5xl text-[#FFD700] drop-shadow-md"
              >
                ❤️
              </motion.div>
              <div className="w-px h-12 bg-gradient-to-t from-transparent via-[#FFD700] to-transparent mt-2"></div>
            </motion.div>

            {/* Bride */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="relative">
                <motion.img
                  initial={{ rotate: 10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  src="/3.12.jpg"
                  alt="Hemavathi"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full border-4 border-[#FFD700] p-1 object-cover mb-2 shadow-lg group-hover:rotate-3 transition-transform"
                />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 sm:-bottom-2 bg-[#800000] text-white text-[8px] sm:text-[10px] px-2 sm:px-4 py-0.5 sm:py-1 rounded-full font-bold border border-[#FFD700] shadow-md whitespace-nowrap">BRIDE</div>
              </div>
              <p className="font-traditional font-bold mt-3 text-sm sm:text-xl text-[#800000] whitespace-nowrap">P. Hemavathi</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Story;
