import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Music, Star, ShoppingBag, ArrowLeft } from 'lucide-react';
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
    }, 800);
  }, []);

  const deletePurchased = async (id) => {
    setDeletingItem(id);
    
    // Add a small delay for animation
    setTimeout(() => {
      const updated = purchased.filter((item) => item.id !== id);
      setPurchased(updated);
      localStorage.setItem('purchased', JSON.stringify(updated));
      setDeletingItem(null);
    }, 500);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3
      }
    }
  };

  const loadingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  if (loading) {
    return (
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center font-sans"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${bgImage})`,
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
            className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p 
            className="text-white text-xl font-light"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading your music collection...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-12 font-sans relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${bgImage})`,
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 relative z-10"
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ShoppingBag className="w-8 h-8 text-cyan-400" />
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            My Purchase
          </h1>
        </motion.div>
        
        <motion.p
          className="text-gray-300 text-lg font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Your purchased artists and collaborations
        </motion.p>

        {/* Back button */}
        <motion.div
          className="absolute left-0 top-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/home"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {purchased.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center py-20"
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 20px 40px rgba(0,255,255,0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Music className="w-16 h-16 text-gray-500" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-4">No Artists Yet</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Start building your music collection by purchasing collaborations with talented artists.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/home"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
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
                    className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl shadow-2xl transition-all duration-500 ease-out hover:border-cyan-400/50 overflow-hidden"
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 25px 50px rgba(0,255,255,0.15)"
                    }}
                    style={{
                      background: deletingItem === item.id 
                        ? 'linear-gradient(45deg, rgba(220,38,127,0.8), rgba(239,68,68,0.8))'
                        : undefined
                    }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Artist Image */}
                    <motion.div
                      className="relative z-10 flex justify-center mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-gradient-to-r from-cyan-400 to-purple-500 shadow-lg"
                        />
                        {/* Pulse ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-cyan-400"
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
                          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-pink-500 transition-all duration-300 cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.name}
                        </motion.h3>
                      </Link>
                      
                      <div className="flex justify-center items-center gap-2 text-gray-300">
                        <span className="text-sm font-medium">{item.role}</span>
                        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                        <span className="text-sm">{item.vibe}</span>
                      </div>

                      {/* Action Button */}
                      <motion.div
                        className="pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.button
                          onClick={() => deletePurchased(item.id)}
                          disabled={deletingItem === item.id}
                          className="group/btn inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-full shadow-lg hover:shadow-red-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={deletingItem === item.id ? { rotate: 360 } : {}}
                            transition={{ duration: 0.5, repeat: deletingItem === item.id ? Infinity : 0 }}
                          >
                            <Trash2 className="w-4 h-4 group-hover/btn:animate-pulse" />
                          </motion.div>
                          {deletingItem === item.id ? 'Removing...' : 'Remove'}
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
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
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{purchased.length}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Artists</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">∞</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Possibilities</div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}