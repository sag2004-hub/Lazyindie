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
      setTimeout(() => navigate('/launch3'), 800); // Wait for animation to finish
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="relative w-full h-screen bg-black text-white font-sans overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Logo Top-Left */}
          <motion.img
            src={logo}
            alt="Logo"
            className="absolute top-6 left-6 h-12 z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeOut' } }}
          />

          {/* Center Text */}
          <motion.div
            className="flex items-center justify-center h-full text-center"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0.8, ease: 'easeOut' } }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-wide font-[Recoleta]">
              TRENDING ARTISTS
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
