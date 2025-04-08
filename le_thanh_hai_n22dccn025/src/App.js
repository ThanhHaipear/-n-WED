import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import từ thư mục con pages
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
