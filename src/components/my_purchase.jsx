import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Music, Star, ShoppingBag, ArrowLeft, ArrowUpRight } from 'lucide-react';
import bgImage from '../assets/my_purchase.jpg';

export default function MyPurchase() {
  const [purchased, setPurchased] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingItem, setDeletingItem] = useState(null);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const saved = localStorage.getItem('purchased');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) setPurchased(parsed);
        } catch (e) {
          console.error('Error parsing purchased data:', e);
        }
      }
      setLoading(false);
    }, 1200);
  }, []);

  const deletePurchased = async (id) => {
    setDeletingItem(id);
    
    // Add a small delay for animation
    setTimeout(() => {
      const updated = purchased.filter((item) => item.id !== id);
      setPurchased(updated);
      localStorage.setItem('purchased', JSON.stringify(updated));
      setDeletingItem(null);
    }, 600);
  };

  const getCatalogRoute = (name) => {
    const map = {
      'Arijit Singh': '/catalog/arijitsingh',
      'Shreya Ghoshal': '/catalog/shreyaghosal',
      'Michel Clark': '/catalog/michelclrek',
      'Sonu Nigam': '/catalog/sonunigam',
      'Neha Kakkar': '/catalog/nehakakkar',
    };
    return map[name] || '/catalog/unknown';
  };

  // --- New Animation Variants ---
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      filter: "blur(5px)",
      transition: {
        duration: 0.4
      }
    }
  };

  const loadingVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (loading) {
    return (
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center font-sans"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,15,0.9), rgba(15,15,25,0.95)), url(${bgImage})`,
        }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={loadingVariants}
            animate="animate"
            className="w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p
            className="text-white text-xl font-light"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Accessing your musical ledger...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12 font-sans relative overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10,10,15,0.85), rgba(15,15,25,0.95)), url(${bgImage})`,
      }}
    >
      {/* Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-12 relative z-10"
      >
        <div className="absolute left-0 top-0">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-white hover:bg-slate-700/70 hover:border-teal-400/30 border border-slate-700/50 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
        </div>

        <motion.div
          className="inline-flex items-center gap-4 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <ShoppingBag className="w-9 h-9 text-teal-400" />
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
          >
            My Purchase
          </motion.h1>
        </motion.div>
        
        <motion.p
          className="text-slate-300 text-lg font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Your curated collection of artistic collaborations.
        </motion.p>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {purchased.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center py-20"
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-slate-900 to-black flex items-center justify-center border border-slate-700"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 40px rgba(76, 189, 172, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Music className="w-16 h-16 text-slate-500" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-4">No Artists in Your Collection</h3>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Explore the market and acquire collaborations to build your unique sound library.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/home"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
              >
                <Star className="w-5 h-5" />
                Discover Artists
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {purchased.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  layout
                  className="group relative"
                >
                  <motion.div
                    className="relative bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl shadow-2xl transition-all duration-500 ease-out hover:border-teal-400/50 overflow-hidden"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 25px 50px rgba(76, 189, 172, 0.15)"
                    }}
                    style={{
                      background: deletingItem === item.id
                        ? 'linear-gradient(45deg, rgba(30, 41, 59, 0.8), rgba(17, 24, 39, 0.8))'
                        : undefined
                    }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Artist Image */}
                    <motion.div
                      className="relative z-10 flex justify-center mb-6"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-28 h-28 rounded-full object-cover border-4 border-teal-400 shadow-lg"
                        />
                        {/* Pulse ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-teal-400"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 0, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Artist Info */}
                    <div className="relative z-10 text-center space-y-3">
                      <Link to={getCatalogRoute(item.name)}>
                        <motion.h3
                          className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-white bg-clip-text text-transparent hover:from-white hover:to-teal-400 transition-all duration-300 cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.name}
                        </motion.h3>
                      </Link>
                      
                      <div className="flex justify-center items-center gap-2 text-slate-300">
                        <span className="text-sm font-medium">{item.role}</span>
                        <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                        <span className="text-sm">{item.vibe}</span>
                      </div>

                      {/* Action Button */}
                      <motion.div
                        className="pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <motion.button
                          onClick={() => deletePurchased(item.id)}
                          disabled={deletingItem === item.id}
                          className="group/btn inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-semibold rounded-full shadow-lg hover:shadow-slate-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-600 hover:border-teal-400/30"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={deletingItem === item.id ? { rotate: [0, 360] } : {}}
                            transition={{ duration: 0.8, ease: "linear", repeat: Infinity }}
                          >
                            <Trash2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          </motion.div>
                          {deletingItem === item.id ? 'Removing...' : 'Remove'}
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 text-teal-400 opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Stats Footer */}
      {purchased.length > 0 && (
        <motion.div
          className="mt-16 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: purchased.length * 0.1 + 0.5, type: "spring", stiffness: 80, damping: 14 }}
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-slate-800/30 backdrop-blur-sm rounded-full border border-slate-700/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">{purchased.length}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">Artists</div>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">Possibilities</div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}