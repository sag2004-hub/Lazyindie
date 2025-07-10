import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

import i13 from '../assets/i13.png';
import match1 from '../assets/match1.png';
import match2 from '../assets/match2.png';
import match3 from '../assets/match3.png';
import logo from '../assets/logo.png';

export default function Matches() {
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
        navigate('/explore');
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

  const matchImages = [match1, match2, match3];

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="relative w-full h-screen overflow-auto font-sans custom-scrollbar"
      style={{ backgroundImage: `url(${i13})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <style>{`
        .stripe {
          position: absolute;
          top: 0;
          height: 130px;
          width: 23px;
          transform: rotate(-13deg);
          left: -100%;
        }

        .group:hover .stripe {
          animation: stripe-slide 2s forwards;
        }

        .group:not(:hover) .stripe {
          animation: stripe-return 2s forwards;
        }

        @keyframes stripe-slide {
          0% { left: -100%; }
          100% { left: 250%; }
        }

        @keyframes stripe-return {
          0% { left: 250%; }
          100% { left: -100%; }
        }

        .card-enter {
          animation: card-fade-in 1s ease-out;
        }

        @keyframes card-fade-in {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #a020f0;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #c084fc;
        }

        .group:hover {
          background-color: inherit !important;
        }
      `}</style>

      {/* Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full h-[80px] bg-white/5 backdrop-blur-md flex justify-between items-center px-8 md:px-24 z-50"
      >
        <img src={logo} alt="Logo" className="h-10 w-auto animate-pulse" />
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
            <ShoppingCart className="w-5 h-5 animate-bounce" />
          </Link>
        </div>
      </motion.div>

      {/* Content */}
      <div className="pt-40 px-10 md:px-36 text-white">
        <motion.h1
          className="text-4xl md:text-5xl font-recoleta mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Here are the Top Artists according to your search
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-gilroy mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Unlock a world of musical opportunities with our platform. Gain access to a diverse database
          of pre-existing artists ready to collaborate. Our innovative chat bot will help you find
          the perfect match for your next project.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {matchImages.map((img, i) => (
            <motion.div
              key={i}
              className="bg-white/10 rounded-2xl backdrop-blur-md p-5 flex flex-col items-start card-enter"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={img} alt={`Artist ${i + 1}`} className="w-full h-64 object-cover rounded-xl mb-4" />
              <div className="text-2xl font-extrabold font-gilroy mb-2">Artist {i + 1}</div>
              <div className="text-base font-gilroy mb-4">Artist few details...</div>
              <div className="flex gap-3">
                <Link
                  to={`/artist/${i + 1}`}
                  className="relative px-6 py-3 text-white border border-white rounded-lg overflow-hidden group transition"
                >
                  <span className="relative z-10">Add to cart</span>
                  <div className="stripe bg-white z-0"></div>
                  <div className="stripe bg-purple-700 z-0" style={{ left: '-44px' }}></div>
                </Link>
                <Link
                  to={`/artist/${i + 1}/details`}
                  className="relative px-6 py-3 text-white border border-white rounded-lg overflow-hidden group transition"
                >
                  <span className="relative z-10">Show More</span>
                  <div className="stripe bg-white z-0"></div>
                  <div className="stripe bg-purple-700 z-0" style={{ left: '-44px' }}></div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Suggested Matches Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-recoleta mb-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Suggested Matches
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {matchImages.map((img, i) => (
            <motion.div
              key={`suggested-${i}`}
              className="bg-white/10 rounded-2xl backdrop-blur-md p-5 flex flex-col items-start card-enter"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={img} alt={`Suggested Artist ${i + 1}`} className="w-full h-64 object-cover rounded-xl mb-4" />
              <div className="text-2xl font-extrabold font-gilroy mb-2">Suggested Artist {i + 1}</div>
              <div className="text-base font-gilroy mb-4">Some additional info here...</div>
              <div className="flex gap-3">
                <Link
                  to={`/suggested-artist/${i + 1}`}
                  className="relative px-6 py-3 text-white border border-white rounded-lg overflow-hidden group transition"
                >
                  <span className="relative z-10">Add to cart</span>
                  <div className="stripe bg-white z-0"></div>
                  <div className="stripe bg-purple-700 z-0" style={{ left: '-44px' }}></div>
                </Link>
                <Link
                  to={`/suggested-artist/${i + 1}/details`}
                  className="relative px-6 py-3 text-white border border-white rounded-lg overflow-hidden group transition"
                >
                  <span className="relative z-10">Show More</span>
                  <div className="stripe bg-white z-0"></div>
                  <div className="stripe bg-purple-700 z-0" style={{ left: '-44px' }}></div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}