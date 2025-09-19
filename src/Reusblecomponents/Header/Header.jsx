import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">📚 BookNest</Link>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/Bookspage" onClick={() => setMenuOpen(false)}>Books</Link>
        <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>

        {/* Cart */}
        <Link to="/Cartpage" onClick={() => setMenuOpen(false)} className="icon-link">
          🛒
        </Link>

        {/* Wishlist (❤️ icon, no dropdown) */}
        <Link to="/Wishlistpage" onClick={() => setMenuOpen(false)} className="icon-link">
        🤍
        </Link>

        {/* Account */}
        <div
          className="account-menu"
          onMouseEnter={() => setAccountOpen(true)}
          onMouseLeave={() => setAccountOpen(false)}
        >
          <span className="icon-link" style={{ fontSize: "30px" }}>👤</span>
          {accountOpen && (
            <div className="dropdown">
              <Link to="/Loginpage" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/Signuppage" onClick={() => setMenuOpen(false)}>Signup</Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(true)}>
        ☰
      </div>
    </div>
  );
}

export default Header;
