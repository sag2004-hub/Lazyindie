import React, { useState, useEffect } from 'react';
import { ArrowUp, ChevronUp, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import artist1 from '../assets/artist1.jpg';
import artist7 from '../assets/artist7.jpg';
import artist3 from '../assets/artist3.jpg';
import artist4 from '../assets/artist4.jpg';
import artist5 from '../assets/artist5.jpg';

const artistImages = [artist1, artist7, artist3, artist4, artist5];

const Launch5 = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [startY, setStartY] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  const navigate = useNavigate();

  const handleCardChange = (direction) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) =>
        direction === 'next' ? Math.min(prev + 1, artistImages.length - 1) : Math.max(prev - 1, 0)
      );
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowUp') {
        triggerNavigation();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const triggerNavigation = () => {
    setFadeOut(true);
    setTimeout(() => navigate('/launch6'), 500);
  };

  const handleStart = (y) => {
    setStartY(y);
    setDragging(true);
    const now = Date.now();
    if (now - lastTap < 300) {
      triggerNavigation(); // Double click detected
    }
    setLastTap(now);
  };

  const handleEnd = (y) => {
    if (!dragging || startY === null) return;

    const swipeDistance = startY - y;
    const isSwipeUp = swipeDistance > 80;

    if (isSwipeUp) {
      triggerNavigation();
    }

    setDragging(false);
    setStartY(null);
  };

  const handleMouseDown = (e) => handleStart(e.clientY);
  const handleMouseUp = (e) => handleEnd(e.clientY);
  const handleTouchStart = (e) => handleStart(e.touches[0].clientY);
  const handleTouchEnd = (e) => handleEnd(e.changedTouches[0].clientY);

  return (
    <div
      className={`w-full min-h-screen bg-black relative text-white overflow-hidden transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onDoubleClick={() => triggerNavigation()}
    >
      <style>{`
        .glossy-text {
          --stroke-opacity: 0.3;
          -webkit-text-stroke: 2px rgba(255, 255, 255, var(--stroke-opacity));
          color: transparent;
        }
        @keyframes floatBlob {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes riseUp {
          from { transform: translateY(80px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.1); opacity: 1; }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .cool-button {
          position: relative;
          background: linear-gradient(145deg, #1a1a1a, #2e2e2e);
          border: 2px solid #ffffff;
          color: #ffffff;
          font-weight: 600;
          border-radius: 12px;
          padding: 12px 32px;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 0 10px rgba(255,255,255,0.15);
          overflow: hidden;
        }

        .cool-button::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 60%);
          animation: shimmerMove 4s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 1;
        }

        .cool-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(255,255,255,0.3);
        }

        .cool-button:hover::before {
          opacity: 0.3;
        }

        .cool-button .sparkle {
          display: none;
        }

        @keyframes shimmerMove {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1); }
        }
      `}</style>

      {/* Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/15 top-[10%] left-[20%] rounded-full blur-[120px]" style={{ animation: 'floatBlob 5s ease-in-out infinite' }} />
        <div className="absolute w-[600px] h-[600px] bg-pink-500/15 bottom-[15%] right-[15%] rounded-full blur-[140px]" style={{ animation: 'floatBlob 4s ease-in-out infinite' }} />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/15 top-[50%] right-[30%] rounded-full blur-[100px]" style={{ animation: 'floatBlob 6s ease-in-out infinite' }} />
      </div>

      {/* Outline Text */}
      <div className="absolute top-[120px] left-[-40px] glossy-text z-0 pointer-events-none select-none hidden sm:block">
        <h1 className="text-[180px] md:text-[250px] lg:text-[320px] leading-none font-extrabold" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          RISING
        </h1>
        <h1 className="text-[180px] md:text-[250px] lg:text-[320px] leading-none font-extrabold mt-[-20px]" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
          ARTISTS
        </h1>
      </div>

      {/* Logo */}
      <div className="absolute top-[60px] left-6 md:left-14 z-10 animate-[scaleIn_1s_ease]">
        <img src={logo} alt="Logo" className="w-[120px] md:w-[150px] h-auto object-contain" />
      </div>

      {/* Header */}
      <div className="absolute top-[220px] left-6 md:left-14 z-10 max-w-[90%] md:max-w-[700px]" style={{ animation: 'scaleIn 1s ease' }}>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight font-serif">Rising Artists</h2>
        <p className="mt-4 text-base md:text-lg font-light tracking-wide">
          Join a global community where creativity knows no borders. Connect, collaborate,
          and co-create with musicians, designers, filmmakers, and more.
        </p>
      </div>

      {/* Card Stack */}
      <div className="absolute top-[30px] right-[60px] w-[520px] h-[680px] z-10 flex flex-col items-center gap-4">
        <button
          onClick={() => handleCardChange('prev')}
          disabled={index === 0 || animating}
          className="bg-white/10 text-white hover:bg-white/20 p-2 rounded-full disabled:opacity-30"
        >
          <ChevronUp className="w-6 h-6" />
        </button>

        <div
          key={index}
          className="w-full h-full rounded-xl overflow-hidden border border-white shadow-xl"
          style={{
            animation: !animating ? 'riseUp 0.6s ease' : '',
          }}
        >
          <img
            src={artistImages[index]}
            alt={`Artist ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={() => handleCardChange('next')}
          disabled={index === artistImages.length - 1 || animating}
          className="bg-white/10 text-white hover:bg-white/20 p-2 rounded-full disabled:opacity-30"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* CTA */}
      {index === artistImages.length - 1 && !animating && (
        <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-10 animate-[bounceIn_0.8s_ease]">
          <Link to="/signup">
            <button className="cool-button">
              <span className="relative z-10">Join For More</span>
            </button>
          </Link>
        </div>
      )}

      {/* Swipe / Double Tap Hint */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-white text-sm md:text-xl font-light z-10"
        style={{ animation: 'bounce 1.5s infinite', cursor: 'pointer' }}
      >
        <span>Swipe to See</span>
        <ArrowUp className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Launch5;
