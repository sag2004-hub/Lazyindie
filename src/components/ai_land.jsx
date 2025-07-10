import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import bgImage from '../assets/i7.png';
import logo from '../assets/logo.png';

export default function AILand() {
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

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
        navigate('/collaborations');
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
    { name: 'AI Chat', path: '/ai_chat_land' },
    { name: 'Collaborations', path: '/collaborations' },
    { name: 'Join Community', path: '/join-community' },
    { name: 'Connect', path: '/connect' },
  ];

  const pageVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      transition: { ease: 'easeOut', duration: 0.6 },
    }),
    animate: (direction) => ({
      opacity: 1,
      x: 0,
      transition: { ease: 'easeOut', duration: 0.6 },
    }),
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: { ease: 'easeInOut', duration: 0.5 },
    }),
  };

  const handleNavigate = (path, dir) => {
    setDirection(dir);
    setTimeout(() => navigate(path), 100);
  };

  return (
    <motion.div
      className="relative w-full min-h-screen font-sans bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
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
      <main className="relative z-10 flex flex-col items-start text-left px-6 md:px-28 pt-40 pb-16 gap-6 max-w-10xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-[32px] md:text-[60px] font-[Recoleta] leading-tight"
        >
          Discover Your Perfect Music Collaboration with Our Innovative Chat Bot.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white text-sm md:text-base font-light leading-relaxed max-w-2xl"
        >
          You can easily chat with our intelligent chatbot to find your perfect matches in the music world.
          Whether you're looking for artists based on specific music categories like hip-hop, rock, classical,
          EDM, or indie, or searching for producers, collaborators, or even full bands, the chatbot will guide
          you based on your preferences.
        </motion.p>

        <Link to="/ai_pop_up">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="h-22 w-72 px-8 py-1 text-white border border-white rounded-4xl text-3xl uppercase hover:bg-white hover:text-black transition duration-300"
          >
            CHAT
          </motion.button>
        </Link>
      </main>
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

    </motion.div>
  );
}