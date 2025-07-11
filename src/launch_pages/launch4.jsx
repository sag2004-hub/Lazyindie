import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

export default function Launch2() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => navigate('/launch5'), 800); // Wait for exit animation
    }, 2000); // visible for 2s

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="relative w-full h-screen bg-black text-white font-sans overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Logo Top-Left */}
          <motion.img
            src={logo}
            alt="Logo"
            className="absolute top-6 left-6 h-12 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } }}
            exit={{ opacity: 0, y: -30, transition: { duration: 0.6 } }}
          />

          {/* Center Text */}
          <motion.div
            className="flex items-center justify-center h-full text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.2, delay: 0.5 } }}
            exit={{ opacity: 0, y: -80, transition: { duration: 0.8, ease: 'easeOut' } }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold tracking-wide font-[Recoleta]"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1, transition: { duration: 0.5, delay: 0.6 } }}
            >
              RISING ARTISTS
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
