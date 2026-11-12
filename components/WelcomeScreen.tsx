import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
    onOpen: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onOpen }) => {
    React.useEffect(() => {
        // Prevent scrolling on the welcome page
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[1000] bg-[#4A0E0E] flex items-center justify-center overflow-hidden touch-none"
        >
            {/* Background image with Ken Burns slow zoom effect */}
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center opacity-65"
                style={{ backgroundImage: "url('/2.1.jpg')" }}
            />

            {/* CSS Frosted-glass backdrop overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#4A0E0E]/40 to-black/75 backdrop-blur-[12px] -webkit-backdrop-blur-[12px] z-[1]" />

            {/* Decorative Mandalas */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -left-24 w-64 h-64 md:w-96 md:h-96 opacity-15 pointer-events-none z-[2]"
            >
                <svg viewBox="0 0 200 200" className="w-full h-full text-[#FFD700] fill-current">
                    <path d="M100,0 C110,40 150,40 150,100 C150,160 110,160 100,200 C90,160 50,160 50,100 C50,40 90,40 100,0 Z" />
                </svg>
            </motion.div>
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -right-24 w-64 h-64 md:w-96 md:h-96 opacity-15 pointer-events-none z-[2]"
            >
                <svg viewBox="0 0 200 200" className="w-full h-full text-[#FFD700] fill-current">
                    <path d="M100,0 C110,40 150,40 150,100 C150,160 110,160 100,200 C90,160 50,160 50,100 C50,40 90,40 100,0 Z" />
                </svg>
            </motion.div>

            {/* Main Interactive Invitation Container */}
            <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center justify-center">
                
                {/* Traditional Invocations */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-2"
                >
                    <p className="text-[11px] md:text-xs font-serif text-[#FFD700] tracking-[0.25em] uppercase drop-shadow">
                        Srirasthu • Subhamasthu • Kalyanamasthu
                    </p>
                    <p className="text-[10px] md:text-xs text-amber-200/90 font-serif tracking-widest mt-1">
                        ॥ Sri Lakshmi Venkateswara Swamy Prasannam ॥
                    </p>
                </motion.div>

                {/* Floating Diya Icon Motif */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.05, 1] }}
                    transition={{ 
                        opacity: { delay: 0.2, duration: 0.8 },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-16 h-16 md:w-20 md:h-20 my-3 pointer-events-none"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#FFD700] fill-current drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]">
                        <path d="M50 12 C54 22 64 32 64 47 C64 62 58 72 50 72 C42 72 36 62 36 47 C36 32 46 22 50 12 Z" fill="#FFA500" />
                        <path d="M50 20 C52 27 58 35 58 45 C58 55 54 62 50 62 C46 62 42 55 42 45 C42 35 48 27 50 20 Z" fill="#FFD700" className="animate-pulse" />
                        <path d="M15 65 C15 65 30 85 50 85 C70 85 85 65 85 65 C85 65 70 75 50 75 C30 75 15 65 15 65 Z" fill="#800000" stroke="#FFD700" strokeWidth="2.5" />
                    </svg>
                </motion.div>

                {/* Devanna Gari Wedding Invitation Header */}
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center mb-3"
                >
                    <div className="text-xs md:text-sm font-bold text-[#FFD700] uppercase tracking-[0.4em] drop-shadow">
                        Devanna Gari
                    </div>
                    <div className="text-xl md:text-2xl font-script text-[#FFD700] tracking-wider mt-0.5">
                        Wedding Invitation
                    </div>
                    
                    {/* Gold Gradient Flourish Divider */}
                    <div className="flex items-center justify-center gap-3 my-2 text-[#FFD700] opacity-80">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FFD700]"></div>
                        <span className="text-xs">🪔</span>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FFD700]"></div>
                    </div>
                </motion.div>

                {/* Welcome Subheader */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.85 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-white font-serif italic text-xs md:text-sm mb-4 max-w-md tracking-wider leading-relaxed"
                >
                    Solicit your gracious presence on the auspicious occasion of the marriage of our son
                </motion.p>

                {/* Main Names with Gold Glow Effect */}
                <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, type: "spring" }}
                    className="mb-8"
                >
                    <h1 className="text-white font-traditional text-3xl sm:text-5xl md:text-6xl mb-1 drop-shadow-[0_0_35px_rgba(255,215,0,0.65)] font-bold tracking-wide flex flex-col items-center gap-1">
                        <span className="whitespace-nowrap">Anil Kumar</span>
                        <span className="text-[#FFD700] font-script text-3xl sm:text-5xl md:text-6xl leading-none">&</span>
                        <span className="whitespace-nowrap">Hemavathi</span>
                    </h1>
                    <p className="text-[#FFD700]/90 font-serif italic text-xs md:text-sm mt-3 tracking-widest">
                        19th November, 2026 • Gangavaram, Chittoor
                    </p>
                </motion.div>

                {/* Animated Pulsing Call-to-action Button */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="w-full flex justify-center"
                >
                    <motion.button
                        onClick={onOpen}
                        animate={{ 
                            boxShadow: [
                                "0 0 15px rgba(255,215,0,0.3)", 
                                "0 0 35px rgba(255,215,0,0.7)", 
                                "0 0 15px rgba(255,215,0,0.3)"
                            ] 
                        }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{
                            scale: 1.05,
                            background: "linear-gradient(to right, #FFD700, #FFB300)",
                            color: "#4A0E0E",
                            boxShadow: "0 0 45px rgba(255, 215, 0, 0.85)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-full transition-all duration-500 tracking-[0.3em] text-xs md:text-sm group relative overflow-hidden shadow-2xl"
                    >
                        <span className="relative z-10 font-bold">OPEN INVITATION</span>
                    </motion.button>
                </motion.div>

                {/* Footer Invitation Phrase */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-6 text-white text-[10px] uppercase tracking-widest font-bold animate-pulse"
                >
                    Bless us with your esteemed presence
                </motion.p>
            </div>
        </motion.div>
    );
};

export default WelcomeScreen;
