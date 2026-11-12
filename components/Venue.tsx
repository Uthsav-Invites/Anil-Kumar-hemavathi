import React from 'react';
import { motion } from 'framer-motion';

const Venue: React.FC = () => {
    const venueName = "P.S. Parems Function Hall";
    const venueAddress = "4 Roads, Gangavaram Mandal, Chittoor District, Andhra Pradesh.";
    const mapsLink = "https://www.google.com/maps/search/?api=1&query=PS+Parems+Function+Hall+Gangavaram";
    const reliableMapUrl = `https://www.google.com/maps?q=Gangavaram+Chittoor+Andhra+Pradesh&output=embed`;

    return (
        <section id="venue" className="py-20 px-4 bg-transparent relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-script text-[#800000] mb-2">The Venue</h2>
                    <p className="text-[#4A0E0E] font-serif tracking-widest uppercase text-sm">Where we begin our journey</p>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-[#FFD700] mx-auto mt-4"
                    ></motion.div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Venue Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div className="glass-maroon p-8 rounded-3xl border border-[#800000]/10 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="text-8xl">🏛️</span>
                            </div>

                            <h3 className="text-2xl font-traditional text-[#800000] mb-4">{venueName}</h3>
                            <p className="text-[#4A0E0E] font-serif text-lg italic leading-relaxed mb-6">
                                "{venueAddress}"
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#800000] flex-shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#800000] text-sm uppercase tracking-wider">Location</p>
                                        <p className="text-[#4A0E0E]/70 text-sm">4 Roads, Gangavaram Mandal, Chittoor Dt.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#800000] flex-shrink-0">
                                        🚗
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#800000] text-sm uppercase tracking-wider">Accessibility</p>
                                        <p className="text-[#4A0E0E]/70 text-sm">Well connected by road near Gangavaram 4 Roads junction.</p>
                                    </div>
                                </div>
                            </div>

                            <motion.a
                                href={mapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-10 inline-flex items-center gap-3 px-8 py-3 bg-[#800000] text-white font-bold rounded-full transition-all text-xs tracking-widest uppercase hover:bg-[#4A0E0E]"
                            >
                                Get Directions ↗
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Map Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative group p-4 glass rounded-[2.5rem] border border-[#FFD700]/30 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/10 to-transparent rounded-[2.5rem] -z-10 blur-xl"></div>

                            <div className="w-full h-[400px] rounded-[2rem] overflow-hidden shadow-inner border-2 border-white/50">
                                <iframe
                                    src={reliableMapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Venue Map"
                                    className="grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            {/* Decorative corner element */}
                            <div className="absolute -bottom-2 -right-2 w-20 h-20 text-[#FFD700] opacity-30 transform rotate-180 pointer-events-none">
                                <svg viewBox="0 0 100 100">
                                    <path fill="currentColor" d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Venue;
