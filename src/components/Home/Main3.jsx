import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Main3.css";

function Main3() {
  const [offerData, setOfferData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback static data (used if backend fails)
  const staticOffers = [
    {
      id: 1,
      title: "Atomic Habits",
      price: 450,
      discount: "20%",
      image: "/assets/Booksimages/AtomicHabits.jpg",
    },
    {
      id: 2,
      title: "Ikigai",
      price: 320,
      discount: "15%",
      image: "/assets/Booksimages/Ikigai.jpg",
    },
    {
      id: 3,
      title: "The Power of Habit",
      price: 420,
      discount: "10%",
      image: "/assets/Booksimages/the power of habit book.png",
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad",
      price: 350,
      discount: "25%",
      image: "/assets/Booksimages/Rich Dad Poor Dad.webp",
    },
  ];

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await axios.get("http://localhost:5001/offers");
        setOfferData(res.data);
      } catch (err) {
        console.error("Error fetching offers:", err);
        setError("Failed to load offers. Showing default offers.");
        setOfferData(staticOffers); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading offers...</h2>;
  }

  return (
    <div className="offers-section">
      <h2 className="offers-title">🔥 Special Book Offers</h2>

      {error && <p className="error-text">{error}</p>}

      <div className="offers-container">
        {offerData.map((offer) => (
          <div key={offer.id} className="offer-card">
            <div className="discount-badge">
              {offer.discount} OFF
            </div>

            <img
              src={offer.image}
              alt={offer.title}
              className="offer-image"
            />

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