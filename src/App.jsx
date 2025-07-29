import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Launch Screens
import Launch from './launch_pages/launch';


// Auth Pages
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';

// Main Pages
import Home from './components/home';
import Magazine from './components/magazine';
import Explore1 from './components/explore';
import Explore2 from './components/explore2';
import Explore3 from './components/explore3';
import Explore4 from './components/explore4';
import Explore5 from './components/explore5';

// AI/Match Flow
import Ai_land from './components/ai_land';
import Ai_pop_up from './components/ai_pop_up';
import Ai_final from './components/ai_final';
import Matches from './ai_section_dummy_matches/matches';

// Community Pages


// Wallet and Cart
import WalletConnectPage from './components/WalletConnectPage';
import Cart from './components/Cart';

// Catalogs
import ArijitSinghCatalog from './catalog/arijitsinghcatalog';
import ShreyaGhosalCatalog from './catalog/shreyaghoshal';
import SonuNigamCatalog from './catalog/sonunigamcatalog';
import NehaKakkarCatalog from './catalog/nehakakkarcatalog';
import MyPurchase from './components/my_purchase';

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-[#0C0F15] min-h-screen text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Launch Screens */}
          <Route path="/" element={<Launch />} />

          {/* Auth */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Main Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Magazine />} />
          <Route path="/explore1" element={<Explore1 />} />
          <Route path="/explore2" element={<Explore2 />} />
          <Route path="/explore3" element={<Explore3 />} />
          <Route path="/explore4" element={<Explore4 />} />
          <Route path="/explore5" element={<Explore5 />} />

          {/* AI & Matches */}
          <Route path="/ai_chat_land" element={<Ai_land />} />
          <Route path="/ai_pop_up" element={<Ai_pop_up />} />
          <Route path="/ai_final" element={<Ai_final />} />
          <Route path="/matches" element={<Matches />} />

          {/* Community */}
          

          {/* Wallet + Cart */}
          <Route path="/wallet-connect" element={<WalletConnectPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/my_purchase' element={<MyPurchase/>}/>

          {/* Catalog */}
          <Route path="/catalog/arijitsingh" element={<ArijitSinghCatalog />} />
          <Route path="/catalog/shreyaghosal" element={<ShreyaGhosalCatalog />} />
          <Route path="/catalog/sonunigam" element={<SonuNigamCatalog />} />
          <Route path="/catalog/nehakakkar" element={<NehaKakkarCatalog />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
