import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Users, CheckCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

import bgImage from '../assets/i11.png';
import logo from '../assets/logo.png';
import artist1 from '../assets/artist9.jpg';
import artist2 from '../assets/artist7.jpg';
import artist3 from '../assets/artist6.jpg';
import artist4 from '../assets/artist1.jpg';

const artists = [
  {
    id: 1,
    name: 'Arijit Singh',
    image: artist1,
    path: '/artist/arijit',
    genres: 'Indie, Bollywood',
    role: 'Vocalist',
    vibe: 'Soulful',
    desc: 'Award-winning singer known for soulful melodies.',
    price: 0.01,
  },
  {
    id: 2,
    name: 'Shreya Ghoshal',
    image: artist2,
    path: '/artist/shreya',
    genres: 'Classical, Indie',
    role: 'Singer',
    vibe: 'Elegant',
    desc: 'Classically trained voice with a modern flair.',
    price: 0.01,
  },
  {
    id: 3,
    name: 'Sonu Nigam',
    image: artist3,
    path: '/artist/sonu',
    genres: 'Pop, Ghazal',
    role: 'Singer',
    vibe: 'Dynamic',
    desc: 'Versatile artist with unmatched vocal range.',
    price: 0.01,
  },
  {
    id: 4,
    name: 'Neha Kakkar',
    image: artist4,
    path: '/artist/neha',
    genres: 'Pop, Dance',
    role: 'Singer',
    vibe: 'Energetic',
    desc: 'Power-packed performer with chart-topping hits.',
    price: 0.01,
  },
];

export default function Matches() {
  const location = useLocation();
  const { items, addToCart } = useContext(CartContext);
  const [justAddedId, setJustAddedId] = useState(null);

  const handleAdd = (artist) => {
    addToCart(artist);
    setJustAddedId(artist.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  const inCart = (id) => items.some((i) => i.id === id);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center overflow-y-scroll"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <style>{`
        div::-webkit-scrollbar { width: 10px; }
        div::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 9999px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.4);
        }
      `}</style>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

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
          {[
            { label: 'Home', path: '/' },
            { label: 'Explore', path: '/explore' },
            { label: 'Ai Chat', path: '/ai_chat_land' },
            { label: 'Collaborations', path: '/collab' },
            { label: 'Join Community', path: '/community' },
            { label: 'Connect', path: '/connect' },
          ].map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={label}
                to={path}
                className="relative group transition-colors hover:text-white text-white/80"
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
          <Link to="/cart">
            <ShoppingCart className="w-5 h-5 hover:text-white text-white/80" />
          </Link>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="relative z-20 pt-[120px] px-6 md:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-[40px] shadow-lg bg-black/90 backdrop-blur-2xl border border-white/10 flex flex-col overflow-hidden relative"
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

              <div className="p-6 text-white flex-grow">
                <Link to={artist.path} className="flex items-center gap-3 mb-4">
                  <h2 className="text-[24px] font-medium">{artist.name}</h2>
                  <CheckCircle className="text-blue-400 w-5 h-5" />
                </Link>
                <p className="text-[#929292] text-[16px] leading-[24px] font-thin">
                  {artist.desc}
                </p>
              </div>

              <div className="flex items-center justify-between px-6 pb-6">
                <div className="flex gap-5 text-white text-[16px] font-semibold">
                  <Users className="w-5 h-5 text-gray-300" /> 312
                  <ShoppingCart
                    className={`w-5 h-5 ${
                      inCart(artist.id) ? 'text-green-400' : 'text-gray-300'
                    }`}
                  />
                </div>
                <button
                  onClick={() => handleAdd(artist)}
                  className={`h-[48px] px-[20px] py-[10px] rounded-full flex items-center gap-2 shadow-inner transition ${
                    inCart(artist.id)
                      ? 'bg-green-600'
                      : 'bg-[#343434] hover:bg-[#444]'
                  }`}
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-medium">
                    {inCart(artist.id) ? 'Added' : 'Cart'}
                  </span>
                </button>
              </div>

              {/* Added popup */}
              {justAddedId === artist.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm z-50"
                >
                  Added to cart!
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
