import React, { useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../assets/logo.png';
import phantomIcon from '../assets/phantom.png';
import solflareIcon from '../assets/solflare.png';

export default function WalletConnectPage() {
  const { publicKey, connected, disconnect } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (connected && publicKey) {
      const timeout = setTimeout(() => navigate('/cart'), 1500);
      return () => clearTimeout(timeout);
    }
  }, [connected, publicKey, navigate]);

  const shorten = (key) =>
    key?.toBase58().slice(0, 6) + '...' + key.toBase58().slice(-4);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans overflow-hidden">
      {/* Background blobs */}
      <div className="absolute w-[400px] h-[400px] left-[10%] top-[10%] bg-[#04151D] blur-[150px] rounded-full opacity-30" />
      <div className="absolute w-[500px] h-[500px] right-[15%] top-[25%] bg-[#354769] blur-[150px] rounded-full opacity-30" />
      <div className="absolute w-[450px] h-[450px] left-[25%] bottom-[10%] bg-[#061A15] blur-[150px] rounded-full opacity-30" />

      {/* Header */}
      <div className="flex justify-between items-center px-6 md:px-16 py-6 relative z-10">
        <motion.img
          src={logo}
          alt="LazyIndie Logo"
          className="w-28 md:w-32 animate-pulse drop-shadow-[0_0_35px_rgba(0,174,255,0.9)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.button
          onClick={() => navigate('/home')}
          className="text-white/70 hover:text-white text-sm md:text-lg transition"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ⬅ Back to Dashboard
        </motion.button>
      </div>

      {/* Wallet Card */}
      <motion.div
        className="relative z-10 mx-auto mt-10 max-w-[90%] md:max-w-[700px] bg-white/5 p-6 md:p-10 rounded-[24px] shadow-xl backdrop-blur-md border border-white/10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-6">
          <motion.img
            src={phantomIcon}
            alt="Wallet Icon"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-purple-500 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          />
        </div>

        <h1 className="text-center text-3xl md:text-4xl font-bold mb-2 font-[Recoleta,serif]">
          Connect Your Solana Wallet
        </h1>
        <p className="text-center text-gray-300 mb-6 md:mb-8 text-base md:text-lg">
          Secure your unlocks and payments with a verified Solana wallet.
        </p>

        <div className="flex justify-center mb-6">
          <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm md:text-base" />
        </div>

        {connected && (
          <>
            <p className="text-center text-green-400 text-sm md:text-md">
              ✅ Connected: <span className="text-cyan-300">{shorten(publicKey)}</span>
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={disconnect}
                className="border border-white px-6 py-2 rounded-lg text-white hover:bg-white/10 transition"
              >
                Disconnect
              </button>
            </div>
          </>
        )}
      </motion.div>

      {/* Footer Text */}
      <motion.div
        className="relative z-10 mt-10 text-center text-gray-300 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        Your wallet secures all transactions on NetGenome.
      </motion.div>

      {/* Wallet logos and names */}
      <motion.div
        className="relative z-10 mt-4 mb-8 flex justify-center items-center gap-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="flex flex-col items-center">
          <img src={phantomIcon} alt="Phantom" className="w-10 h-10 rounded-full shadow-md mb-1" />
          <span className="text-xs text-gray-400">Phantom</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={solflareIcon} alt="Solflare" className="w-10 h-10 rounded-full shadow-md mb-1" />
          <span className="text-xs text-gray-400">Solflare</span>
        </div>
      </motion.div>

      {/* Wallet install links */}
      <motion.div
        className="relative z-10 text-center text-gray-400 text-xs md:text-sm mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        Need a wallet? Install from{' '}
        <a
          href="https://phantom.app"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Phantom
        </a>{' '}
        or{' '}
        <a
          href="https://solflare.com"
          target="_blank"
          rel="noreferrer"
          className="text-orange-400 underline hover:text-orange-300"
        >
          Solflare
        </a>
      </motion.div>
    </div>
  );
}
