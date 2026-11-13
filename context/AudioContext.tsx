import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';

export interface AudioContextType {
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
  playMusic: () => void;
  pauseMusic: () => void;
  toggleMusic: () => void;
  pauseForVideo: () => void;
  resumeFromVideo: () => void;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wasPlayingBeforeVideoRef = useRef(false);

  useEffect(() => {
    const audio = new Audio('/1.mp3');
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const playMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.error("Audio play failed:", e));
    }
  }, []);

  const pauseMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.error("Audio play failed:", e));
      }
    }
  }, [isPlaying]);

  const pauseForVideo = useCallback(() => {
    if (audioRef.current && !audioRef.current.paused) {
      wasPlayingBeforeVideoRef.current = true;
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const resumeFromVideo = useCallback(() => {
    if (wasPlayingBeforeVideoRef.current && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          wasPlayingBeforeVideoRef.current = false;
        })
        .catch((e) => console.warn("Audio resume error:", e));
    }
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        playMusic,
        pauseMusic,
        toggleMusic,
        pauseForVideo,
        resumeFromVideo,
        audioRef
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

