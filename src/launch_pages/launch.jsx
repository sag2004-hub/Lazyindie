import React, { useState, useEffect } from 'react';
import bg from '../assets/i1.png';
import { motion } from 'framer-motion';

function Launch() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-black text-white' : 'bg-white text-black';
  }, [darkMode]);

  const textColor = darkMode ? 'text-white' : 'text-black';
  const borderColor = darkMode ? 'border-white' : 'border-black';
  const bgOverlay = darkMode ? 'bg-black/60' : 'bg-white/70';
  const stripeWhite = darkMode ? 'bg-white' : 'bg-black';
  const buttonBg = darkMode ? 'bg-[#2A0E3C]' : 'bg-[#E5DBF2]';

  return (
    <div
      className={`relative h-screen w-full overflow-hidden font-sans transition-colors duration-700 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Dim overlay */}
      <div className={`absolute inset-0 ${bgOverlay} z-0 transition-all duration-700`} />

      {/* Cookie Banner */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 group">
        <div className="relative px-6 py-3 opacity-30 group-hover:opacity-100 bg-white/10 hover:bg-white/5 transition-all duration-300 backdrop-blur-md border border-white/30 rounded-lg text-white text-sm md:text-base flex gap-2 items-center cursor-pointer overflow-hidden hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <span className="font-light">This website uses cookies.</span>
          <span className="font-semibold relative">
            Accept
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-right" />
          </span>
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-8 transition-colors duration-700">
        <motion.h1
          className={`text-7xl md:text-9xl font-bold ${textColor}`}
          style={{ fontFamily: '"Qurova DEMO", sans-serif' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          NetGenome
        </motion.h1>

        <motion.p
          className={`text-xl md:text-2xl font-light ${textColor}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          where musicians find their creative match
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[{ text: 'Sign in', href: '/signin' }, { text: 'Sign up', href: '/signup' }].map(
            (btn, i) => (
              <div className="w-[200px] h-[50px]" key={btn.text}>
                <a
                  href={btn.href}
                  className={`relative w-full h-full rounded-md ${borderColor} border overflow-hidden group block transition-colors duration-700 ${
                    i === 1 ? buttonBg : ''
                  }`}
                >
                  <span
                    className={`absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[17px] ${textColor}`}
                  >
                    {btn.text}
                  </span>
                  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className={`stripe ${stripeWhite}`} />
                    <div
                      className="stripe"
                      style={{ background: '#A020F0', width: '15px' }}
                    />
                  </div>
                </a>
              </div>
            )
          )}
        </motion.div>
      </div>

      {/* Dark/Light Toggle Button */}
      <div className="absolute bottom-6 left-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-5 py-2 text-sm rounded-full border ${borderColor} ${textColor} bg-transparent backdrop-blur-md overflow-hidden group relative transition-all duration-500`}
        >
          <span className="relative z-10">
            Switch to {darkMode ? 'Light' : 'Dark'} Mode
          </span>
          <span className="absolute inset-0 z-0 bg-white opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 rounded-full blur-2xl"></span>
        </button>
      </div>

      {/* Keyframe animations for stripes */}
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
      `}</style>
    </div>
  );
}

export default Launch;
