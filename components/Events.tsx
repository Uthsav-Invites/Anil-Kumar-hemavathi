import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_EVENTS } from '../constants';

const Events: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="ceremonies" className="py-12 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-script text-[#800000] mb-2">The Ceremonies</h2>
          <p className="text-[#4A0E0E] font-serif tracking-widest uppercase text-sm">Sacred Rituals & Celebrations</p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-[#FFD700] mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8"
        >
          {WEDDING_EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative glass p-8 rounded-2xl shadow-xl border-t-4"
              style={{ borderTopColor: event.color }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-20 h-20 flex-shrink-0 flex items-center justify-center rounded-2xl text-4xl mb-6 shadow-inner"
                  style={{ backgroundColor: `${event.color}20`, border: `1px solid ${event.color}40` }}
                >
                  {event.icon}
                </motion.div>

                <h3 className="text-2xl font-traditional text-[#800000] mb-4">{event.name}</h3>

                <div className="flex flex-col items-center gap-2 mb-6">
                  <div className="glass-light px-4 py-1.5 rounded-full text-xs font-bold text-[#800000] tracking-widest uppercase">
                    {event.date}
                  </div>
                  <div className="text-xs font-bold text-[#800000]/70 tracking-[0.2em] uppercase">
                    {event.time}
                  </div>
                </div>

                <p className="text-[#4A0E0E] mb-6 leading-relaxed italic text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                  "{event.description}"
                </p>

                <div className="mt-auto pt-6 border-t border-[#800000]/10 w-full">
                  <p className="text-[#4A0E0E] font-semibold text-xs uppercase tracking-widest">
                    <span className="text-lg">📍</span> {event.venue}
                  </p>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-20 transition-opacity pointer-events-none">
                <div className="text-6xl font-traditional" style={{ color: event.color }}>
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background mandala decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -left-24 w-64 h-64 opacity-10 pointer-events-none -translate-y-1/2"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#800000] opacity-20">
          <path fill="currentColor" d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Events;
