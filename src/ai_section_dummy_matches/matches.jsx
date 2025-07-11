import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Users, CheckCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import bgImage from '../assets/i11.png';
import logo from '../assets/logo.png';

import artist1 from '../assets/artist9.jpg';
import artist2 from '../assets/artist7.jpg';
import artist3 from '../assets/artist6.jpg';
import artist4 from '../assets/artist1.jpg';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Ai Chat', path: '/ai_chat_land' },
  { label: 'Collaborations', path: '/collab' },
  { label: 'Join Community', path: '/community' },
  { label: 'Connect', path: '/connect' },
];

const artists = [
  { name: 'Arijit Singh', image: artist1, path: '/artist/arijit' },
  { name: 'Shreya Ghoshal', image: artist2, path: '/artist/shreya' },
  { name: 'Sonu Nigam', image: artist3, path: '/artist/sonu' },
  { name: 'Neha Kakkar', image: artist4, path: '/artist/neha' },
];

export default function Matches() {
  const location = useLocation();

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center overflow-y-scroll"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Inline Scrollbar Styling */}
      <style>{`
        /* Vertical Scrollbar */
        div::-webkit-scrollbar {
          width: 10px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full h-[80px] bg-white/5 backdrop-blur-md flex justify-between items-center px-8 md:px-24 z-50 border-b border-white/10"
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
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

      {/* Card Section */}
      <div className="relative z-20 pt-[120px] px-6 md:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-[40px] shadow-lg bg-black/90 backdrop-blur-2xl border border-white/10 flex flex-col overflow-hidden"
            >
              <Link to={artist.path}>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-t-[40px]">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </Link>

              <div className="p-6 text-white">
                <Link to={artist.path}>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-[24px] font-[Gilroy-Medium]">{artist.name}</h2>
                    <CheckCircle className="text-blue-400 w-5 h-5" />
                  </div>
                </Link>
                <p className="text-[#929292] text-[16px] leading-[24px] font-[Gilroy-UltraLight] whitespace-pre-line">
                  Loren ipsum{'\n'}
                  Loren ipsum{'\n'}
                  Loren ipsum{'\n'}
                  Loren ipsum{'\n'}
                  Loren ipsum{'\n'}
                  Loren ipsum
                </p>
              </div>

              <div className="flex items-center justify-between px-6 pb-6">
                <div className="flex gap-5 text-white text-[16px] font-semibold">
                  <Link to="/fans" className="flex items-center gap-2 hover:text-white/80">
                    <Users className="w-5 h-5 text-gray-300" />
                    312
                  </Link>
                  <Link to="/cart" className="flex items-center gap-2 hover:text-white/80">
                    <ShoppingCart className="w-5 h-5 text-gray-300" />
                    48
                  </Link>
                </div>
                <Link
                  to="/cart"
                  className="h-[48px] px-[20px] py-[10px] bg-[#343434] text-white rounded-full flex items-center gap-2 shadow-inner shadow-white/10 hover:bg-[#444] transition"
                >
                  <span className="text-[16px] font-[Gilroy-Medium]">Cart</span>
                  <Plus className="w-5 h-5 text-white" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
