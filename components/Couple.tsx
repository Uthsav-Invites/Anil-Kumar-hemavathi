import React from 'react';
import { motion } from 'framer-motion';

const Couple: React.FC = () => {
  return (
    <section id="couple" className="py-16 px-4 text-center bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs font-bold text-[#800000] tracking-[0.3em] uppercase mb-1">
            Devanna Gari Wedding
          </div>
          <h2 className="text-4xl md:text-5xl font-script text-[#800000] mb-2">The Groom & Bride</h2>
          <p className="text-[#4A0E0E] font-serif tracking-widest uppercase text-sm">Two Souls, One Sacred Bond</p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-[#FFD700] mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Groom Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="glass-maroon p-8 sm:p-10 rounded-[2.5rem] border-2 border-[#800000]/10 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="relative mb-6">
              <motion.img
                initial={{ rotate: -5, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="/3.11.jpg"
                alt="Chi. D. Anil Kumar"
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border-4 border-[#FFD700] p-1.5 object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#800000] text-[#FFD700] text-xs px-6 py-1.5 rounded-full font-bold border-2 border-[#FFD700] shadow-lg tracking-widest uppercase">
                GROOM
              </div>
            </div>

            <h3 className="font-traditional font-bold text-xl sm:text-2xl md:text-3xl text-[#800000] mb-1">
              Chi. D. Anil Kumar
            </h3>
            <span className="text-xs font-serif font-bold text-[#FFD700] bg-[#800000] px-3 py-0.5 rounded-full mb-2">
              M.Sc.
            </span>

            <div className="w-20 h-0.5 bg-[#FFD700] my-3"></div>

            <div className="space-y-2 text-[#4A0E0E] my-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#800000]">Second Son of</p>
              <p className="font-serif text-base sm:text-lg font-semibold text-[#800000]">
                Smt. D. Lakshmamma
              </p>
              <p className="font-serif text-xs opacity-60 font-semibold">&</p>
              <p className="font-serif text-base sm:text-lg font-semibold text-[#800000]">
                Sri D. Srinivasulu Gowdu
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-[#800000]/15 w-full text-xs font-serif text-[#4A0E0E]/80 italic">
              📍 Appinapalli Village, Peddapanjani Mandal, Chittoor Dist.
            </div>
          </motion.div>

          {/* Bride Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="glass-maroon p-8 sm:p-10 rounded-[2.5rem] border-2 border-[#800000]/10 shadow-2xl flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="relative mb-6">
              <motion.img
                initial={{ rotate: 5, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="/3.12.jpg"
                alt="Chi.La.Sou. P. Hemavathi"
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border-4 border-[#FFD700] p-1.5 object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#800000] text-[#FFD700] text-xs px-6 py-1.5 rounded-full font-bold border-2 border-[#FFD700] shadow-lg tracking-widest uppercase">
                BRIDE
              </div>
            </div>

            <h3 className="font-traditional font-bold text-xl sm:text-2xl md:text-3xl text-[#800000] mb-1">
              Chi.La.Sou. P. Hemavathi
            </h3>
            <span className="text-xs font-serif font-bold text-[#FFD700] bg-[#800000] px-3 py-0.5 rounded-full mb-2">
              M.B.A.
            </span>

            <div className="w-20 h-0.5 bg-[#FFD700] my-3"></div>

            <div className="space-y-2 text-[#4A0E0E] my-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#800000]">Only Daughter of</p>
              <p className="font-serif text-base sm:text-lg font-semibold text-[#800000]">
                Smt. P. Kempamma
              </p>
              <p className="font-serif text-xs opacity-60 font-semibold">&</p>
              <p className="font-serif text-base sm:text-lg font-semibold text-[#800000]">
                Sri P. Sriramulu Gowdu
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-[#800000]/15 w-full text-xs font-serif text-[#4A0E0E]/80 italic">
              📍 Maredupalli Village, Gangavaram Mandal, Chittoor Dist.
            </div>
          </motion.div>
        </div>

        {/* Compliments and Contacts Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto glass p-6 sm:p-8 rounded-[2rem] border border-[#FFD700]/40 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-left">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#800000] mb-1">
                With Best Compliments from
              </p>
              <p className="font-serif text-base text-[#4A0E0E] font-semibold">
                Relatives & Friends
              </p>
              <p className="text-xs font-serif text-[#4A0E0E]/70 mt-1">
                కార్యనిర్వాహకులు : బంధుమిత్రులు
              </p>
            </div>
            <div className="md:border-l md:border-[#800000]/20 md:pl-6 text-center md:text-right">
              <p className="text-xs uppercase tracking-widest font-bold text-[#800000] mb-1">
                ఆహ్వానించువారు / Cordially Inviting
              </p>
              <p className="font-serif text-sm text-[#4A0E0E] font-medium mb-1">
                శ్రీమతి డి. లక్ష్మమ్మ & శ్రీ డి. శ్రీనివాసులు గౌడు
              </p>
              <p className="text-xs font-serif text-[#4A0E0E]/70">
                Smt. D. Lakshmamma & Sri D. Srinivasulu Gowdu
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Couple;
