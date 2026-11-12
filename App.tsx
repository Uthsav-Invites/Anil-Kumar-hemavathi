
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import WelcomeScreen from './components/WelcomeScreen';
import { AnimatePresence, motion } from 'framer-motion';
import MobileOnlyWarning from './components/MobileOnlyWarning';
import Footer from './components/Footer';
import Preloader from './components/Preloader';




const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NavigationHandler: React.FC<{
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>
}> = ({ isPlaying, setIsPlaying, audioRef }) => {
  const location = useLocation();

  useEffect(() => {
    // When the path changes (navigation to a different page)
    // or when the location key changes (re-navigating to the same page/Home)
    // we stop the background music as requested.
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [location.pathname, location.key]);

  return null;
};

const Layout: React.FC<{
  children: React.ReactNode;
  isPlaying: boolean;
  onToggleMusic: () => void;
  onStopMusic: () => void;
  onGoHome: () => void;
}> = ({ children, isPlaying, onToggleMusic, onStopMusic, onGoHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('hero');

  // Logic to highlight active section on scroll using IntersectionObserver
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sections = ['hero', 'story', 'couple', 'ceremonies', 'venue', 'gallery'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const navLinks = [
    { id: 'hero', label: 'Home', path: '/' },
    { id: 'story', label: 'Story', path: '/#story' },
    { id: 'couple', label: 'Couple', path: '/#couple' },
    { id: 'ceremonies', label: 'Events', path: '/#ceremonies' },
    { id: 'venue', label: 'Location', path: '/#venue' },
    { id: 'gallery', label: 'Gallery', path: '/#gallery' }
  ];

  return (
    <div className="relative min-h-screen bg-transparent">

      {/* Music Toggle Button with Gentle Pulse Glow */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <motion.button
          onClick={onToggleMusic}
          animate={{ scale: [1, 1.08, 1], boxShadow: ["0 0 15px rgba(255,215,0,0.4)", "0 0 30px rgba(255,215,0,0.8)", "0 0 15px rgba(255,215,0,0.4)"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-tr from-[#FFD700] via-[#FFE57F] to-[#FFD700] text-[#800000] rounded-full flex items-center justify-center border-2 border-white shadow-2xl transition-all"
        >
          {isPlaying ? (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </motion.div>
          ) : (
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            </motion.div>
          )}
        </motion.button>
      </div>

      {/* Hamburger Navigation */}
      <div className="fixed top-6 right-6 z-[60]">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-14 h-14 bg-[#FFD700] text-[#800000] rounded-full flex flex-col items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(255,215,0,0.4)] border-2 border-white transition-all active:scale-90 hover:scale-105"
        >
          <div className={`w-6 h-0.5 bg-[#800000] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#800000] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#800000] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Expanded Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-[#4A0E0E]/80 backdrop-blur-2xl flex items-center justify-center transition-all duration-700 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-center">
          <ul className="space-y-8">
            {navLinks.map((link, idx) => (
              <li
                key={link.id}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`transition-all transform duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {link.path.startsWith('/#') ? (
                  <a
                    href={link.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                      // If navigating within the page, we might want to keep music?
                      // But the user said "switching from that page" should stop it.
                      // If they consider sections as "pages", they might want it to stop.
                      // However, most users would want it to continue.
                      // I will only stop it if they navigate to 'Home' specially.
                    }}
                    className={`text-3xl md:text-5xl font-traditional transition-all hover:tracking-widest ${activeSection === link.id && location.pathname === '/' ? 'text-[#FFD700] scale-110 blur-0' : 'text-white/40 hover:text-white'
                      }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (link.id === 'hero') {
                        onGoHome(); // This will stop music and show welcome screen
                      }
                    }}
                    className={`text-3xl md:text-5xl font-traditional transition-all hover:tracking-widest ${location.pathname === link.path ? 'text-[#FFD700] scale-110 blur-0' : 'text-white/40 hover:text-white'
                      }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-16 text-[#FFD700] text-4xl animate-bounce">🪔</div>
        </div>
      </div>

      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}

const App: React.FC = () => {
  const [petals, setPetals] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Generate rich petal & sparkle properties
    const dotColors = ['#FFD700', '#FFF4CC', '#FFDE7A', '#FFFFFF', '#FF8C00', '#FF4500'];
    const symbols = ['🌸', '✨', '🌼', '💛', '•', '✨'];
    const newPetals = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      size: i % 4 === 0 ? 14 : 6 + Math.random() * 8,
      duration: 10 + Math.random() * 16,
      delay: Math.random() * 20,
      left: `${Math.random() * 100}%`,
      rotate: Math.random() * 360,
      swayDuration: 3 + Math.random() * 4,
      color: dotColors[i % dotColors.length],
      symbol: symbols[i % symbols.length],
      isSymbol: i % 3 === 0
    }));
    setPetals(newPetals);

    // Initialize audio
    audioRef.current = new Audio('/1.mp3');
    audioRef.current.loop = true;
  }, []);

  const handleOpenInvitation = () => {
    setShowWelcome(false);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      setIsPlaying(true);
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const goHome = () => {
    stopMusic();
    setShowWelcome(true);
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <ScrollToTop />
      <MobileOnlyWarning />
      <NavigationHandler isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} />

      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen key="welcome" onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Petal & Sparkle Falling Animation */}
      {petals.map(petal => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            animationDuration: `${petal.duration}s`,
            animationDelay: `-${petal.delay}s`,
          }}
        >
          {petal.isSymbol ? (
            <span
              className="petal-inner text-sm select-none opacity-70 drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
              style={{
                animationDuration: `${petal.swayDuration}s`,
                transform: `rotate(${petal.rotate}deg)`,
              }}
            >
              {petal.symbol}
            </span>
          ) : (
            <div
              className="petal-inner"
              style={{
                width: petal.size,
                height: petal.size,
                opacity: 0.7,
                transform: `rotate(${petal.rotate}deg)`,
                animationDuration: `${petal.swayDuration}s`,
                borderRadius: '9999px',
                background: petal.color,
                boxShadow: '0 0 12px rgba(255, 215, 0, 0.6), 0 0 4px rgba(255, 255, 255, 0.8)'
              }}
            />
          )}
        </div>
      ))}

      <Layout
        isPlaying={isPlaying}
        onToggleMusic={toggleMusic}
        onStopMusic={stopMusic}
        onGoHome={goHome}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};


export default App;
