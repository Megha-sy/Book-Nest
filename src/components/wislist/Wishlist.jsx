import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Wishlist.css";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  // Fetch wishlist books
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get("http://localhost:5001/wishlist");
        setWishlist(res.data);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
      }
    };
    fetchWishlist();
  }, []);

  // Remove from wishlist
  const removeFromWishlist = async (bookId) => {
    try {
      await axios.delete(`http://localhost:5001/wishlist/${bookId}`);
      setWishlist((prev) => prev.filter((book) => book.id !== bookId));
      alert("Removed from wishlist!");
    } catch (err) {
      console.error("Error removing from wishlist:", err);
    }
  };

  return (
    <div className="wishlist-page">
      <h2>❤️ My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty-msg">Your wishlist is empty</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((book) => (
            <div key={book.id} className="wishlist-card">
              {book.image ? (
                <img src={book.image} alt={book.title} />
              ) : (
                <div className="no-image">No Image</div>
              )}
              <h3>{book.title}</h3>
              <p className="author">by {book.author}</p>
              <p className="price">₹{book.price}</p>

              <button
                className="remove-btn1"
                onClick={() => removeFromWishlist(book.id)}
              >
                Remove ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
