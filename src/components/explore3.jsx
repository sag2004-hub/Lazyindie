import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import bgImage from '../assets/i4.png';
import logo from '../assets/logo.png';

export default function ExplorePage3() {
  const [direction, setDirection] = useState(1); // +1 = right, -1 = left
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Explore', path: '/explore' },
    { name: 'AI Chat', path: '/ai_chat_land' },
    { name: 'Collaborations', path: '/collaborations' },
    { name: 'Join Community', path: '/join-community' },
    { name: 'Connect', path: '/connect' },
  ];

  const pages = ['/explore', '/explore2', '/explore3', '/explore4', '/explore5'];

  const pageVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { ease: 'easeOut', duration: 0.6 },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: { ease: 'easeInOut', duration: 0.5 },
    }),
  };

  const handleNavigate = (path, dir) => {
    setDirection(dir);
    setTimeout(() => navigate(path), 100); // delay for smoother transition
  };

  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-0" />

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
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 pt-24 pb-10 md:px-24">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-[100px] font-bold tracking-wide leading-tight font-[Recoleta]"
        >
          Collaborate
        </motion.h1>

        {/* Paragraph with arrows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center mt-6 max-w-5xl gap-4 text-center"
        >
          {/* Left Arrow */}
          <button
            onClick={() => handleNavigate('/explore2', -1)}
            className="text-white text-2xl hover:-translate-x-1 transition-transform duration-300"
            title="Previous Explore Page"
          >
            <i className="ri-arrow-left-wide-fill"></i>
          </button>

          {/* Center Text */}
          <p className="text-white text-sm md:text-base font-light leading-relaxed max-w-3xl">
            Our website allows you to easily collaborate with artists from around the world.
            Whether you're a musician, producer, or songwriter, you can connect, share ideas,
            and work together on creative projects in one seamless platform.
          </p>

          {/* Right Arrow */}
          <button
            onClick={() => handleNavigate('/explore4', 1)}
            className="text-white text-2xl hover:translate-x-1 transition-transform duration-300"
            title="Next Explore Page"
          >
            <i className="ri-arrow-right-wide-line"></i>
          </button>
        </motion.div>

        {/* Kebab Slider */}
        <div className="flex gap-4 mt-10 mb-4">
          {pages.map((path, index) => (
            <button
              key={index}
              onClick={() =>
                handleNavigate(path, pages.indexOf(path) > pages.indexOf(currentPath) ? 1 : -1)
              }
              className={`w-3 h-3 rounded-full border border-white ${
                currentPath === path
                  ? 'bg-white animate-pulse'
                  : 'bg-transparent hover:bg-white/50 transition'
              }`}
            />
          ))}
        </div>

        {/* Chat Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
        <Link
          to="/ai_land"
          className="px-6 py-3 text-white border border-white rounded-xl font-medium hover:bg-white hover:text-black transition duration-300"
        >
          CHAT
        </Link>
      </motion.div>
      </div>
    </motion.div>
  );
}
