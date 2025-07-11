import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gifBackground from '../assets/gif7.gif';
import logo from '../assets/logo.png';

const words = [
  'North America',
  'Latin America',
  'Europe',
  'Asia',
  'Africa',
  'Australia/Oceania',
];

export default function Launch6() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const lastClickTime = useRef(0);
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Double click + drag up redirection to /launch7
  useEffect(() => {
    const handleMouseDown = (e) => {
      const now = Date.now();
      if (now - lastClickTime.current < 400) {
        dragging.current = true;
        dragStart.current = { x: e.clientX, y: e.clientY };
      }
      lastClickTime.current = now;
    };

    const handleMouseUp = (e) => {
      if (dragging.current) {
        const dy = dragStart.current.y - e.clientY;
        if (dy > 100) {
          navigate('/launch7');
        }
      }
      dragging.current = false;
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [navigate]);

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* 🌌 Floating Background GIF */}
      <img
        src={gifBackground}
        alt="Background"
        className="w-full h-full object-contain absolute top-0 left-0 z-0 animate-floatBg"
        style={{ transform: 'scale(1.5)' }}
      />

      {/* 💡 Blinking, Scaling Logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-6 left-6 w-[140px] md:w-[180px] h-auto animate-logoIntro z-10"
      />

      {/* ✨ Animated Text */}
      <motion.div
        className="absolute top-[42%] left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white text-4xl md:text-4xl font-[Recoleta] z-10 text-center animate-text-glow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 px-6 text-center">
          <span>connect with artists across</span>
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="px-4 py-1 border border-white rounded-lg min-w-[200px] text-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {words[index]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* 🚀 Swipe Prompt */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-white text-sm md:text-xl font-light z-10"
        style={{ animation: 'bounce 1.2s infinite', cursor: 'pointer' }}
      >
        <span>Swipe to</span>
        <span className="font-semibold animate-glowTrail">SEE</span>
      </div>

      {/* 🎨 Animations */}
      <style>{`
        @keyframes slowBlink {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 12px rgba(255,255,255,0.9));
          }
          50% {
            opacity: 0.6;
            filter: drop-shadow(0 0 28px rgba(255,255,255,1));
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes floatBg {
          0% { transform: scale(1.5) translateY(0px); }
          100% { transform: scale(1.5) translateY(-30px); }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 12px #fff; }
          50% { text-shadow: 0 0 30px #fff; }
        }

        @keyframes glowTrail {
          0% { text-shadow: 0 0 0 rgba(255,255,255,0); }
          50% { text-shadow: 0 0 12px rgba(255,255,255,0.8); }
          100% { text-shadow: 0 0 0 rgba(255,255,255,0); }
        }

        @keyframes logoIntro {
          0% { opacity: 0; transform: scale(0.8); }
          60% { opacity: 1; transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .animate-slow-blink {
          animation: slowBlink 3s ease-in-out infinite;
        }

        .animate-logoIntro {
          animation: logoIntro 2s ease-out forwards, slowBlink 3s ease-in-out infinite;
        }

        .animate-text-glow {
          animation: textGlow 2s ease-in-out infinite;
        }

        .animate-glowTrail {
          animation: glowTrail 1.5s ease-in-out infinite;
        }

        .animate-floatBg {
          animation: floatBg 20s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
