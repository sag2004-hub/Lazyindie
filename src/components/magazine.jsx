import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

import bgImage from '../assets/i14.png';
import logo from '../assets/logo.png';

export default function Magazine() {
  const location = useLocation();
  const currentPath = location.pathname;
  const direction = location.state?.direction === 'left' ? 'left' : 'right';

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Explore', path: '/explore' },
    { name: 'AI Chat', path: '/ai_chat_land' },
    { name: 'Collaborations', path: '/collaborations' },
    { name: 'Join Community', path: '/join-community' },
    { name: 'Connect', path: '/connect' },
  ];

  const pageVariants = {
    initial: { opacity: 0, x: direction === 'left' ? -100 : 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction === 'left' ? 100 : -100 },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease: 'easeOut', duration: 0.6 }}
      className="relative w-full h-screen overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-24 z-50"
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
        <div className="hidden md:flex gap-8 items-center text-white text-sm">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`relative group text-white/80 hover:text-white transition duration-300 ${
                currentPath === item.path ? 'font-bold text-white' : ''
              }`}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
            </Link>
          ))}
          <Link to="/cart" className="hover:text-white text-white/80 transition duration-300">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </motion.nav>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-6xl md:text-8xl font-bold"
        >
          Magazine
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center mt-6 max-w-2xl"
        >
          <p className="text-white text-lg font-light leading-relaxed">
            Dive into stories, interviews, and highlights from the world of music. Stay inspired and
            informed with our curated magazine articles and spotlights.
          </p>
          <Link
            to="/explore1"
            className="ml-4 text-white text-2xl hover:translate-x-1 transition-transform duration-300"
            title="Next Explore Page"
          >
            <i className="ri-arrow-right-wide-line"></i>
          </Link>
        </motion.div>

        {/* Read Magazine Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10"
        >
          <Link
            to="https://www.lazieindie.com/magazine"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-8 py-3 text-white border border-white rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></span>
            <span className="relative z-10">Read Magazine</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
