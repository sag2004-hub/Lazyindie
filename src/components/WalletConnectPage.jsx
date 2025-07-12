// src/components/WalletConnectPage.jsx
import React, { useEffect, useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useNavigate } from 'react-router-dom';

export default function WalletConnectPage() {
  const { publicKey, connected } = useWallet();
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    console.log("🔑 Wallet publicKey:", publicKey?.toBase58());
    console.log("🔗 Wallet connected:", connected);

    if (connected && publicKey && !redirecting) {
      setRedirecting(true);
      setTimeout(() => {
        navigate('/cart');
      }, 1000);
    }
  }, [connected, publicKey, redirecting, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">Connect Your Wallet</h1>
        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          To continue and access your cart, please securely connect your Solana wallet.
        </p>

        <div className="flex justify-center mt-6">
          <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 !text-white !font-semibold !px-6 !py-3 !rounded-xl transition-all duration-300" />
        </div>

        {connected && publicKey && (
          <p className="text-green-400 text-sm mt-4">
            Wallet connected! Redirecting to cart...
          </p>
        )}
      </div>
    </div>
  );
}
