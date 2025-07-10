import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import bgImage from '../assets/i12.png';
import logo from '../assets/logo.png';
import footerImg from '../assets/footer.png';

const navItems = [
  { name: 'Home', path: '/home' },
  { name: 'Explore', path: '/explore' },
  { name: 'Ai chat', path: '/ai_chat_land' },
  { name: 'Collaborations', path: '/collaborations' },
  { name: 'Join Community', path: '/join-community' },
  { name: 'Connect', path: '/connect' },
];

export default function End() {
  const [footerVisible, setFooterVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show footer once on scroll down
      if (!footerVisible && currentY > lastScrollY + 30) {
        setFooterVisible(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [footerVisible, lastScrollY]);

  return (
    <div
      className="min-h-[200vh] w-full bg-no-repeat bg-center bg-cover relative text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Animated Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-6 md:px-24 z-50 backdrop-blur-md bg-black/20"
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

      {/* Animated Hero Section */}
      <div className="flex flex-col justify-center items-center h-screen text-center px-4 pt-32">
        <motion.h1
          className="text-2xl md:text-5xl font-serif mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          Start your music journey today.
        </motion.h1>
        <Link to="/ai_chat_land">
          <motion.button
            className="px-6 py-2 border border-white text-white rounded-lg bg-gradient-to-r from-[#A020F0]/30 to-transparent relative overflow-hidden transition-all duration-300 shadow-md hover:from-[#A020F0]/80 hover:to-[#fff]/10 hover:scale-105 hover:shadow-xl hover:text-black hover:bg-white/80"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
          >
            CHAT
          </motion.button>
        </Link>
      </div>

      {/* Footer: Triggered on scroll down once */}
      <AnimatePresence>
        {footerVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 w-full z-40"
          >
            <footer className="w-full px-6 md:px-24 py-8 bg-[#181818]">
              <div className="flex flex-col md:flex-row justify-between gap-10 text-white text-sm">
                <div className="max-w-md">
                  <p className="text-lg font-serif">
                    NetGenome is the platform<br />every music artist dreams of.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-white/60 mb-2">LEGAL</h4>
                    <ul className="space-y-1">
                      <li><a href="#">Terms and Conditions</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white/60 mb-2">SOCIALS</h4>
                    <ul className="space-y-1">
                      <li><a href="#">Instagram</a></li>
                      <li><a href="#">Twitter</a></li>
                      <li><a href="#">Facebook</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white/60 mb-2">IMPORTANT</h4>
                    <ul className="space-y-1">
                      <li><Link to="/home">Home</Link></li>
                      <li><a href="#">Find Artist</a></li>
                      <li><a href="#">Sponsors</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>

            <div className="w-full flex justify-center items-end bg-[#181818]">
              <img
                src={footerImg}
                alt="Footer Graphic"
                className="w-full object-contain object-bottom select-none pointer-events-none bg-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
