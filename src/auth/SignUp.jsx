import React, { useState } from 'react';
import { motion } from 'framer-motion';
import gifImage from '../assets/gif1.gif';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#000000] text-white font-sans overflow-hidden px-1 py-6 lg:px-4 lg:py-0 gap-y-10 lg:gap-x-32"
    >
      {/* GIF Panel on Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden lg:flex w-full lg:w-1/2 h-full items-center justify-center p-6"
      >
        <img
          src={gifImage}
          alt="Animated Graphic"
          className="rounded-2xl w-full h-[90vh] object-cover shadow-2xl"
        />
      </motion.div>

      {/* Form Section on Right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 max-w-md p-10 space-y-8 z-10"
      >
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center font-serif"
          >
            Start your journey.👋
          </motion.h1>

          <p className="text-gray-300 text-center text-sm">
            Today is a new day. It's your day. You shape it.
            <br />
            Sign Up to start managing your projects.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md bg-white text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full px-4 py-2 pr-12 rounded-md bg-white text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-.847.105-1.668.3-2.45M3.67 6.58A9.956 9.956 0 0012 3c5.523 0 10 4.477 10 10 0 1.306-.25 2.552-.7 3.7M4 4l16 16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </div>
            </div>

            <div className="text-right text-sm text-blue-400 hover:underline cursor-pointer">
              Forgot Password?
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full"
            >
              <Link
                to="/home"
                className="block text-center bg-transparent border border-blue-600 text-blue-400 py-2 rounded-md text-base transition duration-300 hover:bg-blue-600/10 shadow-[0_0_20px_0_rgba(0,191,255,0.3)]"
              >
                Sign Up
              </Link>
            </motion.div>
          </form>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 px-4 py-2 rounded-md bg-transparent border border-white/20 text-white cursor-pointer hover:bg-white/5 transition shadow-[0_0_30px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.2)]"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
            <span>Sign in with Google</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-3 px-4 py-2 rounded-md bg-transparent border border-white/20 text-white cursor-pointer hover:bg-white/5 transition shadow-[0_0_30px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.2)]"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="Facebook" className="w-6 h-6" />
            <span>Sign in with Facebook</span>
          </motion.div>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-500 hover:underline">Sign in</Link>
          </p>

          <p className="text-center text-xs text-gray-600">© 2025 All rights reserved</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
