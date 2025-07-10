import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, UserPlus, Upload, Search } from 'lucide-react';
import bgImage from '../assets/i11.png';
import logo from '../assets/logo.png';
import gif from '../assets/gif5.gif';

const navItems = [
  { name: 'Home', path: '/home' },
  { name: 'Explore', path: '/explore' },
  { name: 'Ai chat', path: '/ai-chat-land' },
  { name: 'Collaborations', path: '/collaborations' },
  { name: 'Join Community', path: '/join-community' },
  { name: 'Connect', path: '/connect' },
];

export default function Community() {
  const navigate = useNavigate();
  const [overlayOpacity, setOverlayOpacity] = useState(0);
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
        navigate('/end'); // 🔁 Navigate to End.jsx
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    dragStartY.current = null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlayOpacity(0.6); // After 2s, dim the background
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const featureVariant = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay },
    },
  });

  return (
    <div
      className="w-full h-screen text-white relative overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Dimmed Overlay with 2s Delay */}
      <motion.div
        className="absolute inset-0 bg-black z-10"
        animate={{ opacity: overlayOpacity }}
        transition={{ duration: 1 }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-24 z-50 backdrop-blur-md">
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
      </nav>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6 md:px-12 pt-28 space-y-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <p className="text-sm text-white/70 font-semibold uppercase mb-2">Connect</p>
          <h1 className="text-3xl md:text-4xl font-serif leading-tight">
            Your Gateway to Musical Collaboration
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-4">
            Join our platform to discover and collaborate with talented artists. It's easy to connect and create music together.
          </p>
        </motion.div>

        {/* GIF + Features */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
          {/* Left Features */}
          <motion.div
            variants={featureVariant(0.4)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-10 text-center"
          >
            <div className="flex flex-col items-center gap-3 max-w-xs">
              <Search size={28} />
              <h3 className="text-base font-semibold">Sign Up</h3>
              <p className="text-white/70 text-sm">
                Create your profile and start exploring artists that match your musical vision.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 max-w-xs">
              <UserPlus size={28} />
              <h3 className="text-base font-semibold">Find Your Match</h3>
              <p className="text-white/70 text-sm">
                Use our chatbot to find artists that fit your style and budget.
              </p>
            </div>
          </motion.div>

          {/* GIF Centerpiece */}
          <motion.div
            className="w-[240px] h-[240px] md:w-[300px] md:h-[300px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <img
              src={gif}
              alt="Music Collaboration"
              className="rounded-xl w-full h-full object-cover shadow-xl border border-white/20"
            />
          </motion.div>

          {/* Right Features */}
          <motion.div
            variants={featureVariant(0.6)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-10 text-center"
          >
            <div className="flex flex-col items-center gap-3 max-w-xs">
              <UserPlus size={28} />
              <h3 className="text-base font-semibold">Collaborate Effortlessly</h3>
              <p className="text-white/70 text-sm">
                Communicate and collaborate with your chosen artists through our integrated messaging system.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 max-w-xs">
              <Upload size={28} />
              <h3 className="text-base font-semibold">Share Your Music</h3>
              <p className="text-white/70 text-sm">
                Upload your tracks and promote them to a wider audience within the community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Swipe Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
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
