import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gif8 from '../assets/gif8.gif';
import logo from '../assets/logo.png';

export default function Launch8() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative w-screen h-screen bg-black overflow-hidden text-white font-sans"
    >
      {/* Background GIF Centered */}
      <img
        src={gif8}
        alt="Background"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />

      {/* Left Eclipse */}
      <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Right Eclipse */}
      <div className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Logo - Top Left Glossy */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-6 left-6 w-[140px] md:w-[180px] h-auto animate-glow z-20"
      />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full space-y-6 text-center px-6">
        {/* Small Text */}
        <p className="text-lg md:text-xl text-white/80 animate-fade-in-up delay-100">
          We invite you to join us
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide animate-fade-in-up delay-300">
          Start your journey today
        </h1>

        {/* Sign Up Link Button */}
        <Link
          to="/signup"
          className="mt-6 px-10 py-3 text-white border border-white rounded-full text-lg font-medium transition-all duration-300 hover:text-black hover:bg-white hover:shadow-[0_0_20px_white] animate-fade-in-up delay-500"
        >
          Sign Up
        </Link>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }

        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(255, 255, 255, 1));
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
}
