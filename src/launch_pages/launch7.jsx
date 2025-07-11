import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gifBackground from '../assets/gif3.gif';
import logo from '../assets/logo.png';

export default function Launch7() {
  const navigate = useNavigate();
  const lastClickTime = useRef(0);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowButtons(true), 800);
    return () => clearTimeout(timeout);
  }, []);

  const handleMouseDown = (e) => {
    const now = Date.now();
    if (now - lastClickTime.current < 400) {
      dragging.current = true;
      dragStart.current = { x: e.clientX, y: e.clientY };
    }
    lastClickTime.current = now;
  };

  const handleMouseUp = (e) => {
    if (dragging.current) {
      const dy = dragStart.current.y - e.clientY;
      if (dy > 100) {
        navigate('/launch8');
      }
    }
    dragging.current = false;
  };

  const topGenres = ['HIP HOP', 'POP', 'COUNTRY/FOLK', 'ROCK', 'JAZZ/BLUES'];
  const bottomGenres = [
    'REGGAE/WORLD MUSIC',
    'CLASSICAL/INSTRUMENTAL',
    'EDM',
    'OTHERS',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      className="w-full h-screen relative overflow-hidden text-white font-sans bg-[#0b0b0d]"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={gifBackground}
          alt="Background"
          className="absolute h-full w-[900px] object-cover left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        {/* Eclipse overlays */}
        <div className="absolute top-0 left-0 h-full w-[300px] bg-white opacity-20 blur-[100px] z-10" />
        <div className="absolute top-0 right-0 h-full w-[300px] bg-white opacity-20 blur-[100px] z-10" />
        {/* Background dimmer */}
        <AnimatePresence>
          {showButtons && (
            <motion.div
              className="absolute inset-0 bg-black/50 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Blinking Logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-6 left-6 w-[140px] md:w-[180px] h-auto animate-slow-blink z-30"
      />

      {/* Top Genre Buttons */}
      <AnimatePresence>
        {showButtons && (
          <motion.div
            className="absolute top-[22%] left-1/2 transform -translate-x-1/2 flex flex-nowrap justify-center gap-6 z-30 max-w-[90%]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {topGenres.map((genre, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 16px rgba(255,255,255,0.3)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                }}
                className="px-6 py-3 whitespace-nowrap rounded-full border border-white/20 text-white/50 text-base font-medium backdrop-blur-md cursor-pointer transition"
              >
                {genre}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Text */}
      <motion.h1
        className="absolute top-[42%] left-1/2 transform -translate-x-1/2 text-[38px] font-[Recoleta] z-30 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
      >
        Choose from any genre
      </motion.h1>

      {/* Bottom Genre Buttons */}
      <AnimatePresence>
        {showButtons && (
          <motion.div
            className="absolute top-[60%] left-1/2 transform -translate-x-1/2 flex flex-nowrap justify-center gap-6 z-30 max-w-[90%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {bottomGenres.map((genre, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 16px rgba(255,255,255,0.3)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                }}
                className="px-6 py-3 whitespace-nowrap rounded-full border border-white/20 text-white/50 text-base font-medium backdrop-blur-md cursor-pointer transition"
              >
                {genre}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Swipe Prompt */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-white text-sm md:text-xl font-light z-10"
        style={{ animation: 'bounce 1.2s infinite', cursor: 'pointer' }}
      >
        <span>Swipe to See More</span>
        <span className="font-semibold animate-glowTrail"></span>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slowBlink {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 12px rgba(255,255,255,0.9));
          }
          50% {
            opacity: 0.6;
            filter: drop-shadow(0 0 28px rgba(255,255,255,1));
          }
        }
        .animate-slow-blink {
          animation: slowBlink 3s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </motion.div>
  );
}
