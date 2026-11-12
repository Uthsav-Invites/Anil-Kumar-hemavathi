import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateBlessing } from '../services/geminiService';
import TraditionalBorder from './TraditionalBorder';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    relationship: 'Friend',
    attending: 'yes',
    guests: '1',
    message: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAIHelp = async () => {
    if (!formData.name) {
      alert("Please enter your name first!");
      return;
    }
    setIsGenerating(true);
    const blessing = await generateBlessing(formData.name, formData.relationship);
    setFormData(prev => ({ ...prev, message: blessing }));
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-24 px-4 bg-transparent text-[#4A0E0E]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center py-20 glass rounded-[3rem] relative shadow-2xl border-2 border-white/40"
        >
          <TraditionalBorder color="#800000" />
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-script text-[#800000] mb-6"
          >
            Shukriya!
          </motion.h2>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-serif"
          >
            Thank you for your response, <span className="text-[#800000] font-bold">{formData.name}</span>.
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 opacity-80 italic text-lg capitalize"
          >
            We look forward to seeing you at the celebrations!
          </motion.p>
          <motion.button
            whileHover={{ opacity: 1, scale: 1.05 }}
            onClick={() => setIsSubmitted(false)}
            className="mt-10 text-sm font-bold uppercase tracking-widest text-[#800000] underline opacity-60 transition-all"
          >
            Edit RSVP
          </motion.button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 px-4 bg-transparent relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto glass rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border-2 border-white/50"
      >
        {/* Left side: Image/Decoration */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-2/5 glass-maroon p-12 flex flex-col justify-center items-center text-center text-white border-r border-white/20"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-7xl mb-8"
          >
            🐘
          </motion.div>
          <h2 className="text-5xl font-script text-[#FFD700] mb-6 drop-shadow-md">Will You Join Us?</h2>
          <p className="font-serif italic opacity-90 text-lg leading-relaxed">Your presence will add to our joy and make this occasion even more special.</p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
          ></motion.div>
        </motion.div>

        {/* Right side: Form */}
        <div className="w-full md:w-3/5 p-10 md:p-14 relative bg-white/10 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative group"
              >
                <label className="block text-xs font-bold text-[#800000] mb-3 uppercase tracking-widest">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/20 border-b-2 border-[#800000]/20 focus:border-[#800000] outline-none transition-all placeholder:text-black/30 text-lg font-serif italic"
                  placeholder="e.g., Ramesh Kumar"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative group">
                <label className="block text-xs font-bold text-[#800000] mb-3 uppercase tracking-widest">Relationship</label>
                <select
                  value={formData.relationship}
                  onChange={e => setFormData(p => ({ ...p, relationship: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/20 border-b-2 border-[#800000]/20 focus:border-[#800000] outline-none bg-transparent text-lg font-serif italic"
                >
                  <option className="bg-[#FDF5E6]">Friend</option>
                  <option className="bg-[#FDF5E6]">Family</option>
                  <option className="bg-[#FDF5E6]">Colleague</option>
                  <option className="bg-[#FDF5E6]">Other</option>
                </select>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <label className="block text-xs font-bold text-[#800000] mb-4 uppercase tracking-widest">Attending?</label>
                <div className="flex gap-6">
                  {['yes', 'no'].map((val) => (
                    <label key={val} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          name="attending"
                          checked={formData.attending === val}
                          onChange={() => setFormData(p => ({ ...p, attending: val }))}
                          className="peer appearance-none w-5 h-5 border-2 border-[#800000]/30 rounded-full checked:border-[#800000] transition-all"
                        />
                        <div className="absolute w-2.5 h-2.5 bg-[#800000] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                      </div>
                      <span className="text-sm font-semibold text-[#4A0E0E] group-hover:text-[#800000] transition-colors">
                        {val === 'yes' ? 'Yes, with joy!' : 'Regretfully, no'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#800000] mb-3 uppercase tracking-widest">Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={e => setFormData(p => ({ ...p, guests: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/20 border-b-2 border-[#800000]/20 focus:border-[#800000] outline-none bg-transparent text-lg font-serif italic"
                >
                  <option className="bg-[#FDF5E6]" value="1">Just me</option>
                  <option className="bg-[#FDF5E6]" value="2">2 People</option>
                  <option className="bg-[#FDF5E6]" value="3">3 People</option>
                  <option className="bg-[#FDF5E6]" value="4+">Family (4+)</option>
                </select>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative group"
            >
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold text-[#800000] uppercase tracking-widest">Message to the Couple</label>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleAIHelp}
                  disabled={isGenerating}
                  className="text-[10px] font-bold text-white uppercase tracking-tighter bg-[#800000] hover:bg-[#4A0E0E] px-4 py-1.5 rounded-full transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  {isGenerating ? '🪔 Writing...' : '✨ AI Blessing'}
                </motion.button>
              </div>
              <textarea
                rows={3}
                value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                className="w-full px-5 py-4 bg-white/20 border-2 border-[#800000]/10 rounded-2xl focus:border-[#800000] focus:bg-white/40 outline-none transition-all italic text-[#4A0E0E] shadow-inner"
                placeholder="Share your wishes..."
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full glass-maroon text-white font-bold py-5 rounded-2xl shadow-2xl transition-all flex items-center justify-center gap-3 border border-[#FFD700]/30 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#800000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
              <span className="tracking-[0.2em] font-traditional text-sm relative z-10">CONFIRM MY PRESENCE</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl relative z-10"
              >
                🕉️
              </motion.span>
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default RSVP;
