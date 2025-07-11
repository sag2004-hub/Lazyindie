import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import bgImage from '../assets/gif6.gif';
import logo from '../assets/logo.png';

export default function AiPopUp() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Explore', path: '/explore' },
    { label: 'AI Chat', path: '/ai_chat_land' },
    { label: 'Collaborations', path: '/collaborations' },
    { label: 'Join Community', path: '/join-community' },
    { label: 'Connect', path: '/connect' },
  ];

  // Auto-redirect after 2 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/ai_final');
    }, 1000);
    return () => clearTimeout(timeout);
  }, [navigate]);

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
      <div className="absolute w-20 h-[150%] top-[-30%] left-[5%] bg-[#242329] blur-[85px] rounded-full z-0" />
      <div className="absolute w-20 h-[150%] top-[-30%] right-[5%] bg-[#242329] blur-[85px] rounded-full z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-16 text-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-[350px] font-[Recoleta] leading-tight"
        >
          Ai Chat
        </motion.h1>
      </div>
    </motion.div>
  );
}
