import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import artist1 from '../assets/artist1.jpg';
import artist2 from '../assets/artist2.jpg';
import artist3 from '../assets/artist3.jpg';
import artist4 from '../assets/artist4.jpg';
import artist5 from '../assets/artist5.jpg';
import artist6 from '../assets/artist6.jpg';
import artist7 from '../assets/artist7.jpg';
import artist8 from '../assets/artist11.jpg';
import artist9 from '../assets/artist9.jpg';
import artist10 from '../assets/artist10.jpg';

const artists = [
  artist1, artist2, artist3, artist4, artist5,
  artist6, artist7, artist8, artist9, artist10,
];

export default function Launch3() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const imageWidth = 200;
  const imageGap = 32;
  const totalImageWidth = imageWidth + imageGap;
  const maxScroll = (artists.length - 1) * totalImageWidth;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dragDistance = e.clientX - dragStart;
    const newTranslate = Math.max(Math.min(currentTranslate + dragDistance, 0), -maxScroll);
    setScrollPosition(-newTranslate);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setCurrentTranslate(-scrollPosition);
    if (containerRef.current) containerRef.current.style.cursor = 'grab';
  };

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp();
  };

  const getImageStyle = (index) => {
    const imagePosition = (index * totalImageWidth) - scrollPosition + (imageWidth / 2);
    const leftSide = window.innerWidth * 0.25;
    const distanceFromLeft = imagePosition - leftSide;
    let scale;

    if (distanceFromLeft <= 0) {
      const normalized = Math.min(Math.abs(distanceFromLeft) / (window.innerWidth * 0.3), 1);
      scale = 1.0 + normalized * 0.6;
    } else {
      const normalized = Math.min(distanceFromLeft / (window.innerWidth * 0.8), 1);
      scale = 1.0 - normalized * 0.4;
    }

    const centerDistance = Math.abs(imagePosition - window.innerWidth / 2);
    const normalizedDistance = Math.min(centerDistance / (window.innerWidth / 2), 1);
    const opacity = 1 - (normalizedDistance * 0.3);

    return {
      transform: `scale(${Math.max(Math.min(scale, 1.6), 0.6)})`,
      opacity: Math.max(opacity, 0.7),
      transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    };
  };

  const isAtEnd = scrollPosition >= maxScroll - 50;

  // Double-click and drag up detection
  useEffect(() => {
    let lastClickTime = 0;
    let startY = null;
    let dragging = false;

    const handleMouseDown = (e) => {
      const now = Date.now();
      if (now - lastClickTime < 300) {
        startY = e.clientY;
        dragging = true;
      }
      lastClickTime = now;
    };

    const handleMouseUp = (e) => {
      if (dragging && startY !== null) {
        const endY = e.clientY;
        const diffY = startY - endY;
        if (diffY > 100) {
          navigate('/launch4');
        }
      }
      dragging = false;
      startY = null;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative w-full h-screen bg-black overflow-hidden text-white font-sans"
    >
      {/* Glossy Background Title */}
      <div className="absolute top-10 left-0 w-full flex justify-center items-center z-0 pointer-events-none">
        <h1 className="text-[145px] font-extrabold tracking-wider text-white/5 whitespace-nowrap relative overflow-hidden">
          TRENDING ARTISTS
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-gloss" />
        </h1>
      </div>

      {/* Logo */}
      <img src={logo} alt="Logo" className="absolute top-10 left-10 h-10 z-30" />

      {/* Main Heading */}
      <div className="relative text-center pt-[180px] z-10">
        <h2 className="text-white text-[56px] font-recoleta tracking-wide">Trending Artists</h2>
      </div>

      {/* Image Carousel */}
      <div
        ref={containerRef}
        className="relative flex justify-start items-center mt-12 h-[400px] z-10 overflow-hidden cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ paddingLeft: '20%' }}
      >
        <div
          className="flex gap-8 items-center"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          }}
        >
          {artists.map((artist, index) => (
            <div
              key={index}
              className="w-[200px] h-[310px] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0"
              style={getImageStyle(index)}
            >
              <img
                src={artist}
                alt={`artist-${index}`}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          ))}

          {/* Join Now Button */}
          <div className="flex justify-center items-center ml-8 w-[300px] flex-shrink-0">
            <motion.button
              onClick={() => navigate('/signup')}
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isAtEnd ? 1 : 0.3,
                scale: isAtEnd ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              Join Now
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {artists.map((_, index) => {
          const isActive = Math.abs(scrollPosition - (index * totalImageWidth)) < totalImageWidth / 2;
          return (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive ? 'bg-white' : 'bg-white/30'
              }`}
            />
          );
        })}
      </div>

      {/* Glossy Animation Style */}
      <style>{`
        .animate-gloss {
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.5) 50%,
            transparent 100%
          );
          animation: glossMove 2.5s linear infinite;
        }
        @keyframes glossMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Swipe hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm tracking-wider z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        swipe up to see more
      </motion.div>
    </motion.div>
  );
}
