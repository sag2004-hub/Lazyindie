import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// ✅ Required styles for wallet UI
import '@solana/wallet-adapter-react-ui/styles.css';

// ✅ Your app entry
import App from './App.jsx';

// ✅ Solana wallet context (ConnectionProvider + WalletProvider + WalletModalProvider)
import SolanaProvider from './context/SolanaProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <SolanaProvider>
        <App />
      </SolanaProvider>
    </StrictMode>
  </BrowserRouter>
);
