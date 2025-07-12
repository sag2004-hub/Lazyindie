import React, { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { sendSol } from '../utils/sendTransaction';
import { Navigate, useNavigate } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import artist1 from '../assets/artist1.jpg';
import artist2 from '../assets/artist3.jpg';

export default function Cart() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const navigate = useNavigate();

  const [paying, setPaying] = useState(false);
  const [success, setSuccess] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: 'Artist One',
      image: artist1,
      price: 0.1,
    },
    {
      id: 2,
      name: 'Artist Two',
      image: artist2,
      price: 0.2,
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = async () => {
    try {
      setPaying(true);
      const recipient = 'EZoB7F3ZnWkYZBVPA1RVUJ1KJ3v3vGGLddHoYuHHuzsY'; // 🔑 Replace with your devnet receiving wallet
      const signature = await sendSol(connection, wallet, recipient, total);
      console.log('Transaction Signature:', signature);
      setSuccess(true);
    } catch (err) {
      console.error('Payment Error:', err);
      alert('Payment failed. Please try again.');
    } finally {
      setPaying(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      await wallet.disconnect();
      navigate('/wallet-connect');
    } catch (error) {
      console.error("Failed to disconnect:", error);
    }
  };

  if (!wallet.publicKey) {
    return <Navigate to="/wallet-connect" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0C0F15] text-white px-6 py-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">🛒 Your Cart</h1>
          <button
            onClick={handleDisconnect}
            className="text-sm px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 font-medium"
          >
            Disconnect Wallet
          </button>
        </div>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-[#1C1F2A] p-4 rounded-xl shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">{item.price} SOL</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-right">
          <p className="text-lg font-medium mb-2">Total: {total} SOL</p>
          <button
            onClick={handlePayment}
            disabled={paying || success}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-all text-white font-bold rounded-lg"
          >
            {paying ? 'Processing...' : success ? 'Payment Successful ✅' : 'Pay with SOL'}
          </button>
        </div>
      </div>
    </div>
  );
}
