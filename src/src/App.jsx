// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Results from './pages/Results';
import Reports from './pages/Reports';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './index.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/results" element={<Results />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;