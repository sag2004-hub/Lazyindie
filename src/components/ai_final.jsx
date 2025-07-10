import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, LogIn } from 'lucide-react';
import bgImage from '../assets/i8.png';
import logo from '../assets/logo.png';

export default function AiFinal() {
  const location = useLocation();
  const [inputText, setInputText] = useState('');

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Explore', path: '/explore' },
    { label: 'AI Chat', path: '/ai_chat_land' },
    { label: 'Collaborations', path: '/collaborations' },
    { label: 'Join Community', path: '/join-community' },
    { label: 'Connect', path: '/connect' },
  ];

  const handleSubmit = () => {
    if (inputText.trim()) {
      console.log("Input submitted:", inputText);
      // Add your send logic here
      setInputText('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-screen font-sans overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-24 z-50"
      >
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <div className="hidden md:flex gap-8 items-center text-white text-sm">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative group text-white/80 hover:text-white transition duration-300"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <Link to="/cart" className="hover:text-white text-white/80 transition duration-300">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </motion.nav>

      {/* Blurred background accents */}
      <div className="absolute w-20 h-[150%] top-[-30%] left-[5%] bg-[#242329] blur-[85px] rounded-full pointer-events-none" />
      <div className="absolute w-20 h-[150%] top-[-30%] right-[5%] bg-[#242329] blur-[85px] rounded-full pointer-events-none" />

      {/* Content layout */}
      <div className="relative z-10 flex justify-between items-center h-full px-10 md:px-24">
        {/* Left: Chat Bot Heading */}
        <motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-white text-5xl md:text-[96px] font-[Recoleta] leading-tight"
        >
          Chat Bot
        </motion.h1>

        {/* Right: Description */}
        <motion.p
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="text-white text-base md:text-lg max-w-80 font-light text-justify"
        >
          Our chatbot is a smart, easy-to-use assistant that helps you find the right music artists,
          producers, or collaborators. Just share your preferences, and it will instantly match you
          with the most suitable connections based on genre, style, and role.
        </motion.p>
      </div>

      {/* Bottom Input Box with Door Icon */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl z-50"
      >
        <div className="relative group">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Ask anything..."
            className="w-full px-5 pr-12 py-3 text-white bg-white/10 border border-white/30 rounded-xl backdrop-blur-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />
          {/* Door Icon */}
          <button
            onClick={handleSubmit}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition"
          >
            <LogIn className="w-5 h-5" />
          </button>

          {/* Hover Underline */}
          <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-500" />
        </div>
      </motion.div>
    </motion.div>
  );
}
