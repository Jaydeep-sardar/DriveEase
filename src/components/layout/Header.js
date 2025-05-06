import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>DriveEase</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">🏠 Home</a></li>
          <li><a href="/about">ℹ️ About Us</a></li>
          <li><a href="/cars">🚗 Cars</a></li>
          <li><a href="/book">📅 Book Now</a></li>
          <li><a href="/search">🔍 Search</a></li>
          <li className="auth-buttons">
            <a href="/signin" className="btn-signin">
              <span className="btn-icon">👤</span>
              Sign In
            </a>
            <a href="/signup" className="btn-signup">
              <span className="btn-icon">✨</span>
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;