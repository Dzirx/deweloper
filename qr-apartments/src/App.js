import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddApartament from './components/AddApartment.js';
import QRGenerator from './components/GenerateQR.js';
import QRScanner from './components/ScanQR.js';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repair-form" element={<AddApartament />} />
          <Route path="/qr-generator" element={<QRGenerator />} />
          <Route path="/qr-scanner" element={<QRScanner />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      <h1>Strona główna</h1>
      <Link to="/repair-form">
        <button>Dodaj mieszkanie</button>
      </Link>
      <br/>
      <Link to="/qr-generator">
        <button>Generator kodów QR</button>
      </Link>
      <br/>
      <Link to="/qr-scanner">
        <button>Skaner kodów QR</button>
      </Link>
    </div>
  );
}

export default App;
