import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Main3.css';

function Main3() {
  const [offerdata,setoffer]=useState([]);
  // const offers = [
  //   { id: 1, title: "Atomic Habits", price: 450, discount: "20%", image: "assets/Booksimages/AtomicHabits.jpg" },
  //   { id: 2, title: "Ikigai", price: 320, discount: "15%", image: "assets/Booksimages/Ikigai.jpg" },
  //   { id: 3, title: "The Power of Habit", price: 420, discount: "10%", image: "assets/Booksimages/the power of habit book.png" },
  //   { id: 4, title: "Rich Dad Poor Dad", price: 350, discount: "25%", image: "assets/Booksimages/Rich Dad Poor Dad.webp" }
  // ];
  useEffect(() => {
    const fetchoffer = async () => {
      try {
        const res = await axios.get("http://localhost:5001/offers");
        setoffer(res.data);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    fetchoffer();
  }, []);

  return (
    <div className="offers-section">
      <h2 className="offers-title">🔥 Special Book Offers</h2>
      <div className="offers-container">
        {offerdata.map((offer) => (
          <div key={offer.id} className="offer-card">
            <div className="discount-badge">{offer.discount} OFF</div>
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <h3>{offer.title}</h3>
            <p className="price">₹{offer.price}</p>
            <button className="buy-btn2">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main3;
