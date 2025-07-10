import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import bgImage from '../assets/i2.png';
import logo from '../assets/logo.png';

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 0.6 } },
  exit: { opacity: 0, x: -100, transition: { ease: 'easeIn', duration: 0.4 } },
};

export default function Explore() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const lastClickRef = useRef(0);
  const dragStartY = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleDoubleClickStart = (e) => {
    const now = Date.now();
    if (now - lastClickRef.current < 300) {
      setDragging(true);
      dragStartY.current = e.clientY;
    }
    lastClickRef.current = now;
  };

  const handleMouseUp = (e) => {
    if (dragging) {
      const endY = e.clientY;
      const deltaY = dragStartY.current - endY;

      if (deltaY > 100) {
        navigate('/ai_chat_land');
      }

      setDragging(false);
      dragStartY.current = null;
    }
  };

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Explore', path: '/explore' },
    { name: 'AI Chat', path: '/ai_chat_land' },
    { name: 'Collaborations', path: '/collaborations' },
    { name: 'Join Community', path: '/join-community' },
    { name: 'Connect', path: '/connect' },
  ];

  const pages = ['/explore', '/explore2', '/explore3', '/explore4', '/explore5'];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseDown={handleDoubleClickStart}
      onMouseUp={handleMouseUp}
      className="relative w-full h-screen overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-0" />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-24 z-50 bg-transparent"
      >
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <div className="hidden md:flex gap-8 items-center text-white text-sm">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative group text-white/80 hover:text-white transition duration-300"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link to="/cart" className="hover:text-white text-white/80 transition duration-300">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-6xl md:text-[130px] font-bold tracking-wide leading-tight font-[Recoleta]"
        >
          Listen
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center justify-center mt-6 max-w-3xl px-4"
        >
          <p className="text-white text-base md:text-lg font-light leading-relaxed">
            Discover a diverse collection of artists from around the globe on our platform.
            Explore sounds that transcend borders and cultures, broaden your musical horizons,
            and celebrate global music!
          </p>

          <Link
            to="/explore2"
            className="ml-4 text-white text-2xl hover:translate-x-1 transition-transform duration-300"
            title="Next Explore Page"
          >
            <i className="ri-arrow-right-wide-line"></i>
          </Link>
        </motion.div>

        {/* Page Indicator Dots */}
        <div className="flex gap-4 mt-10 mb-4">
          {pages.map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`w-3 h-3 rounded-full border border-white ${
                currentPath === path
                  ? 'bg-white animate-pulse'
                  : 'bg-transparent hover:bg-white/50 transition'
              }`}
            />
          ))}
        </div>

        {/* CHAT Button as Link to /ai_chat_land */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link
            to="/ai_chat_land"
            className="px-6 py-3 text-white border border-white rounded-xl font-medium hover:bg-white hover:text-black transition duration-300"
          >
            CHAT
          </Link>
        </motion.div>

        {/* Swipe Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 2,
          }}
          className="mt-12 text-white text-base animate-bounce"
        >
          swipe up
        </motion.div>
      </div>
    </motion.div>
  );
}
