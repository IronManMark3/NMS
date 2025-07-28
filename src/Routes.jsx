import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page components
import HomePage from './pages/Home';
import NMSWSPage from './pages/nmsws';
import BoardingPage from './pages/BoardingPage';
import CounselingPage from './pages/Counseling';
import AboutUsPage from './pages/AboutUsPage';
import Admission from './pages/admission';

import ScrollToTop from './components/common/ScrollToTop';

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nmsws" element={<NMSWSPage />} />
        <Route path="/boardingpage" element={<BoardingPage />} />
        <Route path="/counseling" element={<CounselingPage />} /> 
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
