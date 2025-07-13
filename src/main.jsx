import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// ✅ Wallet styles
import '@solana/wallet-adapter-react-ui/styles.css';

// ✅ App entry
import App from './App.jsx';

// ✅ Solana wallet provider
import SolanaProvider from './context/SolanaProvider.jsx';

// ✅ Cart provider for global cart state
import { CartProvider } from './context/CartContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <SolanaProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SolanaProvider>
    </StrictMode>
  </BrowserRouter>
);
