import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import TrendyKatta from './TrendyKatta';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<TrendyKatta />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;