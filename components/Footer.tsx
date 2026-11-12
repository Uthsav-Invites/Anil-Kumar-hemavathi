import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <div className="pt-4 pb-0 bg-transparent text-center relative overflow-hidden z-0">
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
          <img
            src="/0.png"
            alt="Traditional Wedding Footer"
            className="w-full h-auto max-w-2xl mix-blend-multiply transform hover:scale-[1.02] transition-transform duration-500 mb-6"
          />
        </div>
      </div>

      {/* Dark Maroon Designed & Crafted by Section */}
      <footer className="w-full bg-gradient-to-b from-[#3E1108] via-[#300C06] to-[#1E0703] border-t-2 border-[#FFD700]/40 pt-7 pb-10 px-4 text-center relative z-10 shadow-[0_-10px_25px_rgba(0,0,0,0.4)]">
        <div className="max-w-md mx-auto flex flex-col items-center">
          
          {/* Header: DESIGNED & CRAFTED BY */}
          <div className="flex items-center justify-center gap-3 mb-5 w-full">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#FFD700]/70 to-[#FFD700]/90"></div>
            <span className="text-[10px] sm:text-xs font-traditional font-bold tracking-[0.25em] text-[#FFD700] uppercase drop-shadow">
              DESIGNED & CRAFTED BY
            </span>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#FFD700]/70 to-[#FFD700]/90"></div>
          </div>

          {/* Middle Row: UDAY STUDIO Logo + Brand Info */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 my-1">
            {/* Left: UDAY STUDIO Camera Logo */}
            <div className="flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#FFD700] leading-none drop-shadow-[0_0_12px_rgba(255,215,0,0.6)] font-sans">
                UDAY
              </span>
              
              {/* Camera body outline around STUDIO */}
              <div className="relative mt-1 inline-flex items-center justify-center">
                <svg viewBox="0 0 76 26" className="w-[72px] h-[24px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 4 7 C 2 7 1 8 1 10 L 1 22 C 1 24 2 25 4 25 L 72 25 C 74 25 75 24 75 22 L 75 10 C 75 8 74 7 72 7 L 62 7 L 60 3 C 59.5 2 58.5 2 57 2 L 47 2 C 45.5 2 44.5 2 44 3 L 42 7 Z"
                    stroke="#FFD700"
                    strokeWidth="1.6"
                    fill="rgba(255, 215, 0, 0.1)"
                  />
                  <text
                    x="38"
                    y="18.5"
                    fill="#FFD700"
                    fontSize="9.5"
                    fontWeight="900"
                    fontFamily="Montserrat, sans-serif"
                    letterSpacing="2.5"
                    textAnchor="middle"
                  >
                    STUDIO
                  </text>
                </svg>
              </div>

              <a
                href="tel:9966657783"
                className="text-[11px] sm:text-xs font-bold tracking-wider text-[#FFD700] mt-1 hover:text-white transition-colors"
              >
                9966657783
              </a>
            </div>

            {/* Right: Uday Studio Name + Links */}
            <div className="flex flex-col items-start justify-center text-left">
              <span className="font-script text-3xl sm:text-4xl text-[#FFD700] leading-tight drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                Uday Studio
              </span>
              
              <div className="flex items-center gap-2 mt-1.5 text-[9px] sm:text-[10px] font-bold tracking-widest text-white/90">
                <a
                  href="https://wa.me/919966657783?text=Hi%20Uday%20Studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  WHATSAPP
                </a>
                <span className="text-[#FFD700]/70">•</span>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  INSTAGRAM
                </a>
                <span className="text-[#FFD700]/70">•</span>
                <a
                  href="tel:9966657783"
                  className="hover:text-[#FFD700] transition-colors"
                >
                  WEBSITE
                </a>
              </div>
            </div>
          </div>

          {/* Ornamental Divider with Diamond */}
          <div className="flex items-center justify-center gap-3 my-4 w-full">
            <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#FFD700]/40 to-[#FFD700]/10"></div>
            <span className="text-[#FFD700] text-[10px] select-none">◈</span>
            <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent via-[#FFD700]/40 to-[#FFD700]/10"></div>
          </div>

          {/* Tagline */}
          <p className="text-[10px] sm:text-xs text-[#FFD700]/80 italic font-serif tracking-wide flex items-center justify-center gap-1.5">
            <span>Crafted with creativity & attention to detail</span>
            <span className="text-[8px] text-[#FFD700]/70">❖</span>
          </p>

        </div>
      </footer>
    </>
  );
};

export default Footer;

