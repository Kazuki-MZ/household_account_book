import React from 'react';

import './App.css';
import Home from './pages/Home';
import Report from './pages/Report';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Nomatch from './pages/Nomatch';
import AppLayout from './components/layout/AppLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<Nomatch />} />
        </Route>
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </Router>
  );
}

export default App;
