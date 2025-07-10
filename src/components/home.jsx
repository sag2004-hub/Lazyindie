import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import gifImage from '../assets/gif2.gif';
import logo from '../assets/logo.png';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const dragStartY = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    dragStartY.current = e.clientY;
  };

  const handleMouseUp = (e) => {
    if (dragging) {
      const endY = e.clientY;
      const deltaY = dragStartY.current - endY;

      if (deltaY > 100) {
        navigate('/explore'); // Navigate if upward drag > 100px
      }

      setDragging(false);
      dragStartY.current = null;
    }
  };

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Explore', path: '/explore' },
    { label: 'AI Chat', path: '/ai_chat_land' },
    { label: 'Collaborations', path: '/collaborations' },
    { label: 'Join Community', path: '/join-community' },
    { label: 'Connect', path: '/connect' },
  ];

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="relative w-full h-screen bg-[#030303] overflow-hidden font-sans"
    >
      {/* Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full h-[80px] bg-white/5 backdrop-blur-md flex justify-between items-center px-8 md:px-24 z-50"
      >
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <div className="hidden md:flex items-center gap-8 text-white text-base font-medium">
          {navItems.map(({ label, path }, idx) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={idx}
                to={path}
                className="relative text-white/80 transition-colors duration-300 hover:text-white group"
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            );
          })}
          <Link to="/cart" className="hover:text-white text-white/80 transition duration-300">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>

      {/* Background GIF */}
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1.2 }}
        src={gifImage}
        alt="Hero Animation"
        className="absolute right-0 top-0 h-full object-cover z-0"
      />

      {/* Decorative Blurs */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute hidden md:block w-28 h-[80%] left-[40%] top-20 bg-[#020202] rounded-full blur-3xl shadow-2xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 90 }}
        transition={{ duration: 1.4, delay: 0.7 }}
        className="absolute hidden md:block w-28 h-[120%] left-[110%] top-[20%] bg-[#020202] rounded-full blur-3xl shadow-2xl origin-top-left"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 md:px-8 text-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white text-5xl md:text-7xl font-serif font-semibold tracking-wide leading-tight"
        >
          Connect. Collaborate. Create.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-sm md:text-lg font-light mt-6 md:mt-4 leading-relaxed max-w-2xl md:max-w-3xl"
        >
          Unlock your potential as an artist with our platform. Discover, collaborate, and <br className="hidden md:inline" />
          engage with fellow musicians and fans like never before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'loop', repeatDelay: 2 }}
          className="mt-10 text-white text-base md:text-lg font-light animate-bounce"
        >
          swipe up
        </motion.div>
      </div>
    </div>
  );
}
