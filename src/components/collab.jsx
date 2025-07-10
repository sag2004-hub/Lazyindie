import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, UserPlus } from 'lucide-react';
import bgImage from '../assets/i9.png';
import logo from '../assets/logo.png';
import gif from '../assets/gif3.gif';

export default function Collaboration() {
  const navigate = useNavigate();
  const dragStartY = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    dragStartY.current = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (dragging && dragStartY.current !== null) {
      const currentY = e.clientY;
      const deltaY = dragStartY.current - currentY;
      if (deltaY > 100) {
        setDragging(false);
        dragStartY.current = null;
        navigate('/join-community'); // 👈 Swipe up navigates to join-community
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    dragStartY.current = null;
  };

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Explore', path: '/explore' },
    { name: 'Ai chat', path: '/ai_chat_land' },
    { name: 'Collaborations', path: '/collaborations' },
    { name: 'Join Community', path: '/join-community' },
    { name: 'Connect', path: '/connect' },
  ];

  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white relative"
      style={{ backgroundImage: `url(${bgImage})` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Navbar */}
      <motion.nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-24 z-50 bg-transparent backdrop-blur-2xl">
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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-24 pt-24">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: 'easeIn' }}
        >
          <h1 className="text-4xl md:text-4xl font-bold leading-tight">
            Unlock Your Creative Potential: <br /> Collaborate with Talented Artists Today!
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-80">
            Discover a world of collaboration with our platform, where artists connect and create together.
            Find your perfect match and elevate your music journey.
          </p>

          {/* Features */}
          <div className="flex flex-col md:flex-row gap-10 mt-6">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <UserPlus size={40} className="mb-2" />
              <h3 className="font-semibold text-lg">Connect Creatively</h3>
              <p className="text-white/70 text-sm max-w-xs mt-1">
                Easily collaborate with artists who share your vision and passion for music.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <UserPlus size={40} className="mb-2" />
              <h3 className="font-semibold text-lg">Endless Opportunities</h3>
              <p className="text-white/70 text-sm max-w-xs mt-1">
                Explore diverse genres and styles to find the ideal artist for your project.
              </p>
            </div>
          </div>
        </motion.div>

        {/* GIF Section */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: 'easeIn' }}
        >
          <img
            src={gif}
            alt="Collaboration Visual"
            className="rounded-xl w-full max-w-[650px] md:max-w-[575px]"
          />
        </motion.div>
      </div>

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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-base animate-bounce"
      >
        swipe up
      </motion.div>
    </div>
  );
}
