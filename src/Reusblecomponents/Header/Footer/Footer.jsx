import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BOOKNEST INFO */}
        <div className="footer-section footer-brand">
          <h2 className="footer-logo">BookNest</h2>
          <p>Your cozy corner for books. Discover stories, knowledge, and inspiration for every reader.</p>
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Bookspage">Books</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Cartpage">Cart</Link></li>
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="fa fa-map-marker"></i> 123 Book Street, Library City, IN 560001</p>
          <p><i className="fa fa-phone"></i> +91 98765 43210</p>
          <p><i className="fa fa-envelope"></i> support@booknest.com</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BookNest. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
