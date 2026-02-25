import React from 'react';
import './Aboutpage.css';
import { useNavigate } from 'react-router-dom';
import Bookspage from '../../Pages/Books/Bookspage';

function Aboutpage() {
  const navigate = useNavigate();

  const goToBooksPage = () => {
    navigate('/Bookspage'); 
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>Welcome to <span>BookNest</span></h1>
          <p>Your one-stop destination for every story, every genre, and every reader's dream.</p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="about-section">
        <h2>Why Choose BookNest</h2>
        <div className="about-grid">
          <div className="about-item">
            <i className="fa fa-book icon" aria-hidden="true"></i>
            <h3>Vast Collection</h3>
            <p>From bestsellers to rare finds, BookNest offers an extensive collection for every reader.</p>
          </div>

          <div className="about-item">
            <i className="fa fa-star icon" aria-hidden="true"></i>
            <h3>Curated Recommendations</h3>
            <p>Discover books you'll love with our personalized recommendations and top-rated picks.</p>
          </div>

          <div className="about-item">
            <i className="fa fa-truck icon" aria-hidden="true"></i>
            <h3>Fast Delivery</h3>
            <p>Get your favorite books delivered quickly and safely, right to your doorstep.</p>
          </div>

          <div className="about-item">
            <i className="fa fa-heart icon" aria-hidden="true"></i>
            <h3>Reader Community</h3>
            <p>Join our community of passionate readers, share reviews, and connect with fellow book lovers.</p>
          </div>
        </div>
      </div>

      {/* MISSION SECTION */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At BookNest, our mission is to ignite the love for reading by making books accessible,
          affordable, and enjoyable for everyone. We believe that every book holds the power to
          change a life.
        </p>
        <button className="explore-btn" onClick={goToBooksPage}>Explore Our Collection</button>
      </div>

      {/* TESTIMONIALS */}
      <div className="testimonials-section">
        <h2>What Our Readers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"BookNest has completely changed my reading habits. The collection is amazing!"</p>
            <h4>- Aisha K.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Fast delivery and excellent customer service. Highly recommend!"</p>
            <h4>- Rohan P.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The combo offers are a great deal for book lovers like me!"</p>
            <h4>- Neha S.</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
