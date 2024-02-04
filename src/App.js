// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DigitalSpacePage from './components/DigitalSpacePage';
import DynamicQRPage from './components/DynamicQRPage';
import GeofencedPaymentPage from './components/GeofencedPaymentPage';
import ShortPaymentLinkPage from './components/ShortPaymentLinkPage';
import QRScannerPage from './components/QRScannerPage';
import PaymentPage from './components/PaymentPage';
import ProfilePage from './components/profilePage';
import PageCreation from './components/createPage';
import PaymentReceive from './components/PaymentReceive';
import HomePage from './Home.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="sidebar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/digital-space" className="nav-link">Digital Space</Link>
          <Link to="/dynamic-qr" className="nav-link">Dynamic QR</Link>
          <Link to="/geofenced-payment" className="nav-link">Geofenced Payment</Link>
          <Link to="/short-payment-link" className="nav-link">Short Payment Link</Link>
          <Link to="/scanner-qr" className="nav-link">QR Scanner</Link>
          <Link to="/payment-page" className="nav-link">Payment Page</Link>
          <Link to="/profile-page" className="nav-link">Profile Page</Link>
          <Link to="/PaymentReceive" className="nav-link">PaymentReceive</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/digital-space" element={<DigitalSpacePage />} />
            <Route path="/dynamic-qr" element={<DynamicQRPage />} />
            <Route path="/geofenced-payment" element={<GeofencedPaymentPage />} />
            <Route path="/short-payment-link" element={<ShortPaymentLinkPage />} />
            <Route path="/scanner-qr" element={<QRScannerPage />} />
            <Route path="/payment-page" element={<PaymentPage />} />
            <Route path="/profile-page" element={<ProfilePage />} />
            <Route path="/PageCreation-page" element={<PageCreation />} />
            <Route path="/PaymentReceive" element={<PaymentReceive />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
