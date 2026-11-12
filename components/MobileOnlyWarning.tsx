import React from 'react';

const MobileOnlyWarning: React.FC = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=4A0E0E&bgcolor=FDF5E6&data=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="hidden md:flex fixed inset-0 z-[9999] bg-[#4A0E0E] items-center justify-center p-6 text-center select-none overflow-y-auto">
      {/* Background mandala subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Content Card */}
      <div className="relative glass-maroon p-8 md:p-12 rounded-[2.5rem] border-2 border-[#FFD700]/30 shadow-2xl max-w-md w-full flex flex-col items-center gap-6 animate-fade-in-up">
        {/* Diya Icon */}
        <div className="text-4xl drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">🪔</div>
        
        <h2 className="font-traditional text-2xl md:text-3xl font-bold text-[#FFD700] tracking-wider drop-shadow-md">
          Mobile Experience Only
        </h2>
        
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
        
        <p className="text-white/95 text-xs md:text-sm leading-relaxed font-serif tracking-wide">
          This digital invitation has been designed specifically for mobile screens to provide the best interactive experience. Please open it on your mobile device or scan the QR code below to view.
        </p>

        {/* QR Code Container */}
        {currentUrl && (
          <div className="p-4 bg-[#FDF5E6] rounded-2xl border-2 border-[#FFD700]/50 shadow-2xl flex flex-col items-center gap-3 transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src={qrCodeUrl} 
              alt="Scan to open on mobile" 
              className="w-40 h-40 object-contain rounded-lg"
            />
            <span className="text-[10px] uppercase font-bold text-[#4A0E0E] tracking-widest animate-pulse">
              Scan to view invitation
            </span>
          </div>
        )}

        <div className="text-white/60 text-[10px] mt-2 italic font-serif">
          Anil Kumar & Hemavathi's Wedding Invitation
        </div>
      </div>
    </div>
  );
};

export default MobileOnlyWarning;
