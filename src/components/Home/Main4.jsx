import React from "react";
import { Link } from "react-router-dom";
import "./Main4.css";

function Main4() {
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Biographies & Autobiographies",
    "Self-Help",
    "Academic & Educational",
    "Children's Books",
    "Cookbooks"
  ];

  return (
    <div className="book-section">
      <h2>📚 Book Categories</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link key={index} to="/Bookspage"
            state={{ selectedCategory: category }}   
            className="category-card"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Main4;
