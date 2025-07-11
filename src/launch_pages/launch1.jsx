import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import guitarImage from '../assets/launch3.png';
import cornerImage from '../assets/launch1.png';

const words = ['collaborator', 'producer', 'band member'];

export default function Launch1() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Refs for gesture detection
  const lastTap = useRef(0);
  const tappedOnce = useRef(false);
  const touchStartY = useRef(null);
  const touchEndY = useRef(null);
  const lastClickTime = useRef(0);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Touch gesture: double tap + swipe up
  const handleTouchStart = (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap.current;
    if (tapLength < 300 && tapLength > 0) {
      tappedOnce.current = true;
    } else {
      tappedOnce.current = false;
    }
    lastTap.current = currentTime;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    touchEndY.current = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY.current;
    if (deltaY > 100 && tappedOnce.current) {
      navigate('/launch2');
    }
  };

  // Mouse gesture: double click + drag up
  const handleMouseDown = (e) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime.current < 400) {
      dragging.current = true;
      dragStart.current = { x: e.clientX, y: e.clientY };
    }
    lastClickTime.current = currentTime;
  };

  const handleMouseUp = (e) => {
    if (dragging.current) {
      const dy = dragStart.current.y - e.clientY;
      if (dy > 100) {
        navigate('/launch2');
      }
    }
    dragging.current = false;
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden font-sans bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Logo */}
      <img src={logo} alt="Logo" className="absolute top-6 left-6 h-12 z-10" />

      {/* Guitar image */}
      <motion.img
        src={guitarImage}
        alt="Guitar"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-60 md:w-[500px] z-10 rotate-[-50deg]"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      {/* Animated text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl md:text-5xl font-[Recoleta] z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 px-6 text-center">
          <span>get various artists as a</span>
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="px-4 py-1 border border-white rounded-lg min-w-[180px] text-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {words[index]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom corner images */}
      <motion.img
        src={cornerImage}
        alt="Corner Left"
        className="absolute bottom-[-40px] left-[-60px] w-[300px] md:w-[520px] transform -scale-x-100 rotate-[-15deg] z-10"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      />

      <motion.img
        src={cornerImage}
        alt="Corner Right"
        className="absolute bottom-[-40px] right-[-60px] w-[300px] md:w-[520px] transform rotate-[12deg] z-10"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      />

      {/* Swipe hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm tracking-wider z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        swipe up to see more
      </motion.div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-36 h-px bg-white z-10" />
    </div>
  );
}
