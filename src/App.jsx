import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Launch from '../../Lazyindie/src/launch_pages/launch';
import SignUp from '../../Lazyindie/src/auth/SignUp';
import SignIn from '../../Lazyindie/src/auth/SignIn';
import Home from './components/home';
import Explore from '../../Lazyindie/src/components/explore';
import Explore2 from '../../Lazyindie/src/components/explore2';
import Explore3 from '../../Lazyindie/src/components/explore3';
import Explore4 from '../../Lazyindie/src/components/explore4';
import Explore5 from '../../Lazyindie/src/components/explore5';
import Ai_land from '../../Lazyindie/src/components/ai_land'
import Ai_pop_up from '../../Lazyindie/src/components/ai_pop_up';
import Ai_final from '../../Lazyindie/src/components/ai_final';
import Collab from '../../Lazyindie/src/components/collab';
import Community from '../../Lazyindie/src/components/community';
import Connect from '../../Lazyindie/src/components/connect';
import End from '../../Lazyindie/src/components/end';

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-[#0C0F15] min-h-screen text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Launch />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore2" element={<Explore2 />} />
          <Route path="/explore3" element={<Explore3 />} />
          <Route path="/explore4" element={<Explore4 />} />
          <Route path="/explore5" element={<Explore5 />} />
          <Route path="/ai_chat_land" element={<Ai_land />} />
          <Route path="/ai_pop_up" element={<Ai_pop_up />} />
          <Route path="/ai_final" element={<Ai_final />} />
          <Route path="/collaborations" element={<Collab />} />
          <Route path="/join-community" element={<Community />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
