import React, { useContext, useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { sendSol } from '../utils/sendTransaction';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import solanaLogo from '../assets/solana.png';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const navigate = useNavigate();

  const { items, removeFromCart, clearCart } = useContext(CartContext);
  const [paying, setPaying] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [purchasedProfiles, setPurchasedProfiles] = useState([]);
  const [showPurchasedPopup, setShowPurchasedPopup] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    const saved = localStorage.getItem('purchased');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setPurchasedProfiles(parsed);
      } catch (e) {
        console.error('Error parsing purchased data:', e);
      }
    }
  }, []);

  const mergePurchases = (newItems) => {
    const existing = [...purchasedProfiles];
    const newUnique = newItems.filter(
      (item) => !existing.some((p) => p.id === item.id)
    );
    const merged = [...existing, ...newUnique];
    localStorage.setItem('purchased', JSON.stringify(merged));
    setPurchasedProfiles(merged);
  };

  const handlePayment = async () => {
    if (total === 0) return alert('Cart is empty.');
    try {
      setPaying(true);
      const recipient = '8gysvf5dCqK95rXpEQjLMYZyisNfEc16pFD8PRWRwhAM';
      await sendSol(connection, wallet, recipient, total);

      mergePurchases(items);
      clearCart();
      setSuccess(true);
      setShowSuccessPopup(true);
    } catch (err) {
      console.error('Payment Error:', err);
      alert('Payment failed. Try again.');
    } finally {
      setPaying(false);
    }
  };

  const deletePurchased = (id) => {
    const updated = purchasedProfiles.filter((item) => item.id !== id);
    setPurchasedProfiles(updated);
    localStorage.setItem('purchased', JSON.stringify(updated));
  };

  const handleDisconnect = async () => {
    await wallet.disconnect();
    navigate('/wallet-connect');
  };

  if (!wallet.publicKey) return <Navigate to="/wallet-connect" replace />;

  return (
    <div className="min-h-screen overflow-hidden relative font-sans text-white bg-black px-6 py-12">
      {/* Glowing background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0.4, scale: 0.9 }}
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[800px] h-[800px] bg-white rounded-full blur-[150px] opacity-30"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-between items-center mb-10"
        >
          <h1 className="text-4xl font-bold">🎧 Your Cart</h1>
          <button
            onClick={handleDisconnect}
            className="text-sm px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 font-medium"
          >
            Disconnect
          </button>
        </motion.div>

        {items.length === 0 && !success ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center text-gray-400 text-lg mt-20"
          >
            Your cart is empty. Add artists from Matches.
          </motion.p>
        ) : (
          !success && (
            <>
              {/* Cart Items */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid md:grid-cols-3 gap-6 mt-8"
              >
                {items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + idx * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-green-400"
                    />
                    <h2 className="text-2xl font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-300">🎼 {item.genres}</p>
                    <p className="text-sm"><span className="text-white">Role:</span> {item.role}</p>
                    <p className="text-sm"><span className="text-white">Vibe:</span> {item.vibe}</p>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-2">
                        <img src={solanaLogo} alt="SOL" className="w-6 h-6" />
                        <span className="text-green-300 font-semibold text-md">{item.price} SOL</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-3 py-1 text-sm font-semibold rounded-md bg-red-600 hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Payment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-14 text-center"
              >
                <p className="text-xl font-semibold text-gray-300 mb-2">
                  Total:
                  <span className="ml-2 inline-flex items-center gap-2 text-green-300">
                    <img src={solanaLogo} alt="SOL" className="w-6 h-6" />
                    {total.toFixed(2)} SOL
                  </span>
                </p>
                <p className="text-sm text-gray-400 mb-5">
                  After payment, you'll get contact info & links instantly.
                </p>

                <motion.button
                  onClick={handlePayment}
                  disabled={paying}
                  whileHover={{ scale: total === 0 || paying ? 1 : 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-8 py-3 rounded-lg font-bold transition-all shadow-md text-black ${
                    total === 0 || paying ? 'bg-gray-400 cursor-not-allowed' : ''
                  }`}
                  style={{
                    backgroundImage:
                      total === 0 || paying
                        ? 'none'
                        : 'linear-gradient(to right, aquamarine, skyblue)',
                  }}
                >
                  {paying ? 'Processing...' : 'Confirm & Pay to Unlock'}
                </motion.button>
              </motion.div>
            </>
          )
        )}

        {/* My Purchase Button */}
        {purchasedProfiles.length > 0 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowPurchasedPopup(true)}
              className="px-6 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-200"
            >
              🎉 My Purchase
            </button>
          </div>
        )}

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccessPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white text-black p-8 rounded-xl text-center max-w-sm"
              >
                <h2 className="text-2xl font-bold mb-4">✅ Payment Successful!</h2>
                <p className="mb-4">You've unlocked your artists.</p>
                <button
                  onClick={() => {
                    setShowSuccessPopup(false);
                    setShowPurchasedPopup(true);
                  }}
                  className="px-6 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700"
                >
                  View My Purchase
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Purchased Popup */}
        <AnimatePresence>
          {showPurchasedPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-gray-900 p-8 rounded-xl max-w-3xl w-full text-white overflow-y-auto max-h-[90vh]"
              >
                <h2 className="text-2xl font-bold mb-4">Purchased Profiles</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {purchasedProfiles.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-800 p-4 rounded-lg border border-gray-700 relative"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full mb-2"
                      />
                      <Link to={`/catalog/${item.id}`}>
                        <h3 className="font-semibold text-blue-400 underline hover:text-blue-200">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-400">
                        {item.role} - {item.vibe}
                      </p>
                      <button
                        onClick={() => deletePurchased(item.id)}
                        className="mt-3 px-4 py-1 text-sm font-bold bg-red-600 hover:bg-red-700 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowPurchasedPopup(false)}
                  className="mt-6 px-5 py-2 bg-red-600 hover:bg-red-700 rounded-md font-bold"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
