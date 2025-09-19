import React, { useState } from "react";
import "./Main2.css";
import books from "../Books/booksData";
import { useNavigate } from "react-router-dom";


function Main2() {
  const newArrivals = books.slice(0, 5); // Pick the first 5 books (or any new arrivals)
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();


  const nextBook = () => {
    setCurrentIndex((prev) => (prev + 1) % newArrivals.length);
  };

  const prevBook = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? newArrivals.length - 1 : prev - 1
    );
  };
  const handleBuyNow = () => {
    navigate("/Bookspage", { state: { selectedBookId: newArrivals[currentIndex].id } });
  };

  return (
    <div className="new-arrivals">

    <div className="new-arrivals-section">
      <h2 className="section-title">📚 New Arrivals</h2>

      <div className="carousel">
        <button className="nav-btn left" onClick={prevBook}>❮</button>

        <div className="book-display">
          <img
            src={newArrivals[currentIndex].image}
            alt={newArrivals[currentIndex].title}
            className="book-img"
          />
          <div className="book-details">
            <h3>{newArrivals[currentIndex].title}</h3>
            <p className="author">by {newArrivals[currentIndex].author}</p>
            <p className="price">Price: ₹{newArrivals[currentIndex].price}</p>
            <p className="category">Category: {newArrivals[currentIndex].category}</p>
            <p className="language">Language: {newArrivals[currentIndex].language}</p>
            <p className="rating">⭐ {newArrivals[currentIndex].rating} / 5</p>
            <button className="buy-btn1" onClick={handleBuyNow}>Buy Now</button>

          </div>
        </div>

        <button className="nav-btn right" onClick={nextBook}>❯</button>
      </div>
    </div>
    </div>
  );
}

export default Main2;
