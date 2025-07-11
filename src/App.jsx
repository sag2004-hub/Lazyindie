import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Launch from '../../Lazyindie/src/launch_pages/launch';
import Launch1 from '../../Lazyindie/src/launch_pages/launch1';
import Launch2 from '../../Lazyindie/src/launch_pages/launch2';
import Launch3 from '../../Lazyindie/src/launch_pages/launch3';
import Launch4 from '../../Lazyindie/src/launch_pages/launch4';
import Launch5 from '../../Lazyindie/src/launch_pages/launch5';
import Launch6 from '../../Lazyindie/src/launch_pages/launch6';
import Launch7 from '../../Lazyindie/src/launch_pages/launch7';
import Launch8 from '../../Lazyindie/src/launch_pages/launch8';
import SignUp from '../../Lazyindie/src/auth/SignUp';
import SignIn from '../../Lazyindie/src/auth/SignIn';
import Home from './components/home';
import Magazine from '../../Lazyindie/src/components/magazine';
import Explore1 from '../../Lazyindie/src/components/explore';
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
import Matches from '../../Lazyindie/src/ai_section_dummy_matches/matches';

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-[#0C0F15] min-h-screen text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Launch />} />
          <Route path="/launch1" element={<Launch1 />} />
          <Route path="/launch2" element={<Launch2 />} />
          <Route path="/launch3" element={<Launch3 />} />
          <Route path="/launch4" element={<Launch4 />} />
          <Route path="/launch5" element={<Launch5 />} />
          <Route path="/launch6" element={<Launch6 />} />
          <Route path="/launch7" element={<Launch7 />} />
          <Route path="/launch8" element={<Launch8 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Magazine />} />
          <Route path="/explore1" element={<Explore1 />} />
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
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
