import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, RotateCcw, ArrowLeft, Sparkles, Heart } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

// Traditional Indian Wedding Filigree Corner Accent
const CornerOrnament: React.FC<{ className?: string; rotation?: string }> = ({ className = '', rotation = '' }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-7 h-7 sm:w-9 sm:h-9 text-[#FFD700] pointer-events-none drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] ${rotation} ${className}`}
  >
    {/* Outer border curves */}
    <path d="M4 56V26C4 13.8497 13.8497 4 26 4H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M10 56V30C10 18.9543 18.9543 10 30 10H56" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    {/* Floral flourish and dots */}
    <circle cx="16" cy="16" r="3.5" fill="currentColor" />
    <circle cx="4" cy="56" r="2.5" fill="currentColor" />
    <circle cx="56" cy="4" r="2.5" fill="currentColor" />
    <path d="M22 6C22 14 14 22 6 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    <path d="M24 24Q30 18 36 24Q30 30 24 24Z" fill="currentColor" opacity="0.9" />
  </svg>
);

const formatTime = (seconds: number) => {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export const WeddingVideo: React.FC = () => {
  const { pauseForVideo, resumeFromVideo } = useAudio();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const controlsTimeoutRef = useRef<number | null>(null);

  // Auto-hide controls timer
  const resetControlsTimeout = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying && !isEnded) {
        setShowControls(false);
      }
    }, 3500);
  }, [isPlaying, isEnded]);

  // Handle active video reference based on fullscreen state
  const getActiveVideo = useCallback(() => {
    if (isFullscreen && fullscreenVideoRef.current) {
      return fullscreenVideoRef.current;
    }
    return videoRef.current;
  }, [isFullscreen]);

  // Synchronize playback between normal and fullscreen video elements
  const syncPlayback = useCallback((source: HTMLVideoElement, target: HTMLVideoElement) => {
    target.currentTime = source.currentTime;
    target.muted = isMuted;
    if (!source.paused) {
      target.play().catch(() => { });
    } else {
      target.pause();
    }
  }, [isMuted]);

  // Time & progress update
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget;
    setCurrentTime(vid.currentTime);
    if (vid.duration) {
      setDuration(vid.duration);
      setProgress((vid.currentTime / vid.duration) * 100);
    }
  };

  // Play / Pause toggle
  const togglePlay = () => {
    const vid = getActiveVideo();
    if (!vid) return;

    setHasInteracted(true);
    if (vid.paused || vid.ended) {
      if (isEnded) {
        vid.currentTime = 0;
        setIsEnded(false);
      }
      vid.play()
        .then(() => {
          setIsPlaying(true);
          // If sound is active, stop bg music
          if (!isMuted) {
            pauseForVideo();
          }
        })
        .catch((err) => console.log('Playback error:', err));
    } else {
      vid.pause();
      setIsPlaying(false);
      // Resume background music while paused
      resumeFromVideo();
    }
    resetControlsTimeout();
  };

  // Toggle Sound (Mute / Unmute)
  const toggleSound = () => {
    setHasInteracted(true);
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    const vid = getActiveVideo();
    if (vid) {
      vid.muted = newMuted;
    }

    if (!newMuted) {
      // User turned sound ON -> Stop background music
      pauseForVideo();
      // Ensure video is playing
      if (vid && vid.paused) {
        vid.play().then(() => setIsPlaying(true)).catch(() => { });
      }
    } else {
      // User muted the video -> Resume background music
      resumeFromVideo();
    }
    resetControlsTimeout();
  };

  // Seek bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const vid = getActiveVideo();
    if (!vid || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    vid.currentTime = pos * duration;
    setProgress(pos * 100);
    resetControlsTimeout();
  };

  // Video ended handler
  const handleEnded = () => {
    setIsPlaying(false);
    setIsEnded(true);
    setShowControls(true);
    // As requested: after finishing the video, resume background music!
    resumeFromVideo();
  };

  // Replay
  const handleReplay = () => {
    const vid = getActiveVideo();
    if (!vid) return;

    vid.currentTime = 0;
    setIsEnded(false);
    vid.play()
      .then(() => {
        setIsPlaying(true);
        if (!isMuted) {
          pauseForVideo();
        }
      })
      .catch((err) => console.log('Replay error:', err));
    resetControlsTimeout();
  };

  // Enter Full Screen
  const handleEnterFullscreen = () => {
    const currentVid = videoRef.current;
    setIsFullscreen(true);
    resetControlsTimeout();

    setTimeout(() => {
      if (fullscreenVideoRef.current && currentVid) {
        syncPlayback(currentVid, fullscreenVideoRef.current);
      }
    }, 50);
  };

  // Exit Full Screen and Return to Moments of Love
  const handleExitFullscreen = () => {
    const fsVid = fullscreenVideoRef.current;
    const normalVid = videoRef.current;

    if (fsVid && normalVid) {
      if (isEnded) {
        normalVid.currentTime = 0;
        setIsEnded(false);
      } else {
        normalVid.currentTime = fsVid.currentTime;
      }
      normalVid.muted = isMuted;
      normalVid.play().catch(() => { });
    }

    setIsFullscreen(false);

    // Smooth scroll to Moments of Love section
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // If video was ended, ensure bg music is running
    if (isEnded) {
      resumeFromVideo();
    }
  };

  // IntersectionObserver: Autoplay when user scrolls to Moments of Love
  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vid = videoRef.current;
          if (!vid) return;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            // User scrolled to Moments of Love section!
            // Start video automatically
            if (vid.paused && !isEnded) {
              vid.muted = isMuted;
              vid.play()
                .then(() => {
                  setIsPlaying(true);
                  if (!isMuted) {
                    pauseForVideo();
                  }
                })
                .catch((e) => {
                  console.log('Autoplay muted fallback due to browser policy:', e);
                  vid.muted = true;
                  setIsMuted(true);
                  vid.play().then(() => setIsPlaying(true)).catch(() => { });
                });
            }
          } else if (!entry.isIntersecting) {
            // Scrolled away from section -> pause video and resume bg music
            if (!vid.paused && !isFullscreen) {
              vid.pause();
              setIsPlaying(false);
              resumeFromVideo();
            }
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75]
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isMuted, isEnded, isFullscreen, pauseForVideo, resumeFromVideo]);

  return (
    <>
      {/* ============================================================== */}
      {/* EMBEDDED VIDEO PLAYER IN ROYAL TRADITIONAL FRAME               */}
      {/* ============================================================== */}
      <div
        ref={containerRef}
        onMouseMove={resetControlsTimeout}
        onTouchStart={resetControlsTimeout}
        className="relative group w-full max-w-xl mx-auto px-1 sm:px-2"
      >
        {/* Ambient Gold & Maroon Glow Behind Frame */}
        <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-[#FFD700]/30 via-[#800000]/40 to-[#FFD700]/30 rounded-[3rem] blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

        {/* Master Ornate Royal Border Frame */}
        <div className="relative p-1.5 sm:p-2 rounded-[2.5rem] bg-gradient-to-b from-[#FFE57F] via-[#FFD700] to-[#B8860B] shadow-[0_20px_45px_rgba(74,14,14,0.4),0_0_25px_rgba(255,215,0,0.3)]">
          {/* Inner Accent Ring */}
          <div className="relative rounded-[2.2rem] overflow-hidden bg-[#200404] border-2 border-[#FFD700]/80">
            {/* Traditional Corner Filigrees */}
            <div className="absolute top-2 left-2 z-20 pointer-events-none">
              <CornerOrnament />
            </div>
            <div className="absolute top-2 right-2 z-20 pointer-events-none">
              <CornerOrnament rotation="rotate-90" />
            </div>
            <div className="absolute bottom-2 left-2 z-20 pointer-events-none">
              <CornerOrnament rotation="-rotate-90" />
            </div>
            <div className="absolute bottom-2 right-2 z-20 pointer-events-none">
              <CornerOrnament rotation="rotate-180" />
            </div>

            {/* Video Container (16:9 Aspect Ratio) */}
            <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
              <video
                ref={videoRef}
                playsInline
                loop
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              >
                <source src="/Anil%20%26%20Hemavathi%20V_3.mp4" type="video/mp4" />
                <source src="/Anil & Hemavathi V_3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* FLOATING ACTION BUTTONS OVER THE VIDEO */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {/* Top-Right Floating Sound Toggle Button */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 pointer-events-auto">
                  <motion.button
                    onClick={toggleSound}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border text-[11px] sm:text-xs font-traditional font-semibold transition-all duration-300 shadow-xl ${isMuted
                      ? 'bg-[#800000]/85 border-[#FFD700] text-[#FFD700] animate-pulse shadow-[0_0_15px_rgba(255,215,0,0.5)]'
                      : 'bg-black/70 border-[#FFD700]/70 text-[#FFD700]'
                      }`}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-[#FFD700]" />
                        {/* <span>Play Sound</span> */}
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-[#FFD700]" />
                        <span>Sound On</span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Top-Left Floating Fullscreen Button */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 pointer-events-auto">
                  <motion.button
                    onClick={handleEnterFullscreen}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#FFD700]/70 text-[#FFD700] hover:bg-[#800000]/80 hover:border-[#FFD700] text-[11px] sm:text-xs font-traditional font-semibold transition-all duration-300 shadow-xl"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    {/* <span>Fullscreen</span> */}
                  </motion.button>
                </div>

                {/* Center Play Button Overlay (when paused or ended) */}
                <AnimatePresence>
                  {(!isPlaying || isEnded) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none"
                    >
                      <button
                        onClick={isEnded ? handleReplay : togglePlay}
                        className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#FFD700] via-[#FFE57F] to-[#FFD700] text-[#800000] flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.8)] border-2 border-white hover:scale-110 active:scale-95 transition-all duration-300"
                      >
                        {isEnded ? (
                          <RotateCcw className="w-7 h-7" />
                        ) : (
                          <Play className="w-7 h-7 translate-x-0.5 fill-[#800000]" />
                        )}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* IMMERSIVE FULL-SCREEN MODAL EXPERIENCE                        */}
      {/* ============================================================== */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onMouseMove={resetControlsTimeout}
            onTouchStart={resetControlsTimeout}
            className="fixed inset-0 z-[99999] bg-[#0d0101]/95 backdrop-blur-2xl flex flex-col justify-between items-center p-3 sm:p-6 select-none overflow-hidden"
          >
            {/* FULLSCREEN TOP BAR: NAVIGATION & ACTIONS */}
            <div
              className={`w-full max-w-5xl flex items-center justify-between z-30 transition-opacity duration-300 ${showControls || !isPlaying || isEnded ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {/* PRIMARY RETURN BUTTON: "BACK TO MOMENTS OF LOVE" */}
              <motion.button
                onClick={handleExitFullscreen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#800000] via-[#A00000] to-[#800000] border-2 border-[#FFD700] text-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all font-traditional text-xs sm:text-sm font-bold tracking-wider"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700]" />
                <span>Back to Moments of Love</span>
              </motion.button>

              {/* RIGHT ACTIONS: SOUND & CLOSE */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={toggleSound}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full backdrop-blur-md border text-xs font-traditional transition-all ${isMuted
                    ? 'bg-[#800000]/80 border-[#FFD700] text-[#FFD700] animate-pulse'
                    : 'bg-black/60 border-[#FFD700]/50 text-[#FFD700]'
                    }`}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isMuted ? 'Unmute' : 'Sound On'}</span>
                </button>

                <button
                  onClick={handleExitFullscreen}
                  className="w-10 h-10 rounded-full bg-black/60 border border-[#FFD700]/50 text-[#FFD700] flex items-center justify-center hover:bg-[#800000] transition-colors"
                  title="Close Full Screen"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* FULLSCREEN CINEMA VIDEO FRAME */}
            <div className="relative w-full max-w-5xl aspect-video my-auto rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#FFD700]/80 shadow-[0_0_60px_rgba(255,215,0,0.35)] bg-black flex items-center justify-center">
              <video
                ref={fullscreenVideoRef}
                playsInline
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                onClick={togglePlay}
                className="w-full h-full object-contain cursor-pointer"
              >
                <source src="/Anil%20%26%20Hemavathi%20V_3.mp4" type="video/mp4" />
                <source src="/Anil & Hemavathi V_3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* CELEBRATION END-SCREEN OVERLAY (Appears when video ends in Fullscreen) */}
              <AnimatePresence>
                {isEnded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-40 bg-[#250303]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"
                  >
                    <div className="text-4xl sm:text-5xl mb-3 animate-bounce">🪔</div>
                    <h3 className="font-script text-3xl sm:text-5xl text-[#FFD700] mb-2 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                      Moments of Love
                    </h3>
                    <p className="font-serif text-white/90 text-sm sm:text-lg max-w-md mb-6 italic">
                      "Two souls united in love and laughter, celebrating the sacred union of Anil Kumar & Hemavathi."
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      {/* Return to invitation / moments of love button */}
                      <motion.button
                        onClick={handleExitFullscreen}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFE57F] to-[#FFD700] text-[#800000] font-traditional font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(255,215,0,0.7)] flex items-center gap-2.5 transition-all"
                      >
                        <ArrowLeft className="w-5 h-5 text-[#800000]" />
                        <span>Return to Moments of Love</span>
                      </motion.button>

                      {/* Replay button */}
                      <motion.button
                        onClick={handleReplay}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 sm:px-7 py-3 rounded-full bg-black/60 border border-[#FFD700]/70 text-[#FFD700] font-traditional text-xs sm:text-sm hover:bg-[#FFD700]/20 transition-all flex items-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4 text-[#FFD700]" />
                        <span>Watch Again</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Fullscreen Pause Overlay */}
              <AnimatePresence>
                {!isPlaying && !isEnded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none"
                  >
                    <button
                      onClick={togglePlay}
                      className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#FFD700] via-[#FFE57F] to-[#FFD700] text-[#800000] flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.8)] border-2 border-white hover:scale-110 active:scale-95 transition-all"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 translate-x-0.5 fill-[#800000]" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FULLSCREEN BOTTOM CONTROLS */}
            <div
              className={`w-full max-w-5xl z-30 transition-opacity duration-300 ${showControls || !isPlaying || isEnded ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {/* Timeline Bar */}
              <div
                onClick={handleSeek}
                className="relative w-full h-2 bg-white/20 hover:h-3 rounded-full cursor-pointer transition-all duration-200 mb-3 overflow-hidden group/bar"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#FFD700] via-[#FFE57F] to-[#FF8C00] rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg scale-0 group-hover/bar:scale-100 transition-transform" />
                </div>
              </div>

              {/* Bottom Row Info */}
              <div className="flex items-center justify-between text-white text-xs sm:text-sm">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFD700]/20 text-[#FFD700] flex items-center justify-center transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current translate-x-0.5" />}
                  </button>

                  <button
                    onClick={toggleSound}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFD700]/20 text-[#FFD700] flex items-center justify-center transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="font-mono text-xs sm:text-sm text-[#FFE57F]">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Return button also in bottom-right for quick reach */}
                <button
                  onClick={handleExitFullscreen}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#800000] border border-[#FFD700]/40 text-[#FFD700] transition-all text-xs font-traditional"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Exit Fullscreen</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WeddingVideo;

