import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import books from "./BooksData";
import "./Books.css";

function Books() {
  const [booksData, setBooksData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices");
  const [selectedRating, setSelectedRating] = useState(0);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const filterRef = useRef(null);
  const bookRefs = useRef({});
  const location = useLocation();

  const selectedBookId = location.state?.selectedBookId || null;

  /* ---------------- LOAD DATA ---------------- */
  useEffect(() => {
    setBooksData(books);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    setCartItems(storedCart);
    setWishlist(storedWishlist);
  }, []);

  /* ---------------- CATEGORY FROM NAVIGATION ---------------- */
  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  /* ---------------- CLOSE FILTER ON OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilterMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------- SCROLL TO SELECTED BOOK ---------------- */
  useEffect(() => {
    if (selectedBookId && bookRefs.current[selectedBookId]) {
      bookRefs.current[selectedBookId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedBookId]);

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = (book) => {
    if (cartItems.some((item) => item.id === book.id)) return;

    const updatedCart = [...cartItems, book];
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${book.title} added to cart`);
  };

  /* ---------------- WISHLIST TOGGLE ---------------- */
  const toggleWishlist = (book) => {
    let updatedWishlist;

    if (wishlist.some((item) => item.id === book.id)) {
      updatedWishlist = wishlist.filter((item) => item.id !== book.id);
      alert(`${book.title} removed from wishlist`);
    } else {
      updatedWishlist = [...wishlist, book];
      alert(`${book.title} added to wishlist`);
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  /* ---------------- FILTER DATA ---------------- */
  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Biographies & Autobiographies",
    "Self-Help",
    "Academic & Educational",
    "Children's Books",
    "Cookbooks",
  ];

  const languages = ["All", "English", "Malayalam"];
  const ratings = [5, 4, 3, 2, 1];

  const priceRanges = [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under ₹200", min: 0, max: 200 },
    { label: "₹200 - ₹300", min: 201, max: 300 },
    { label: "₹300 - ₹400", min: 301, max: 400 },
    { label: "₹400 - ₹500", min: 401, max: 500 },
    { label: "Above ₹500", min: 501, max: Infinity },
  ];

  const filteredBooks = booksData.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    const matchesLanguage =
      selectedLanguage === "All" || book.language === selectedLanguage;

    const priceRange =
      priceRanges.find((r) => r.label === selectedPriceRange) ||
      priceRanges[0];

    const matchesPrice =
      book.price >= priceRange.min && book.price <= priceRange.max;

    const matchesRating =
      selectedRating === 0 || book.rating >= selectedRating;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLanguage &&
      matchesPrice &&
      matchesRating
    );
  });

  /* ---------------- UI ---------------- */
  return (
    <div className="books-page">
      <h2 className="books-heading">Explore Our Bookstore</h2>

      {/* SEARCH + FILTER */}
      <div className="top-bar">
        <input
          type="text"
          className="search-bar"
          placeholder="Search books by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* FILTER MENU */}
        <div className="filter-container" ref={filterRef}>
          <button
            className="filter-icon"
            onClick={() => setShowFilterMenu(!showFilterMenu)}
          >
            ☰
          </button>

          {showFilterMenu && (
            <div className="filter-popup">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
              >
                {priceRanges.map((p) => (
                  <option key={p.label}>{p.label}</option>
                ))}
              </select>

              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(Number(e.target.value))}
              >
                <option value={0}>All Ratings</option>
                {ratings.map((r) => (
                  <option key={r} value={r}>
                    {r}★ & up
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* LANGUAGE TOGGLE */}
        <div className="language-toggle">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`toggle-btn ${
                selectedLanguage === lang ? "active" : ""
              }`}
              onClick={() => setSelectedLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* BOOK GRID */}
      <div className="books-grid">
        {filteredBooks.length ? (
          filteredBooks.map((book) => {
            const added = cartItems.some((i) => i.id === book.id);

            return (
              <div
                key={book.id}
                ref={(el) => (bookRefs.current[book.id] = el)}
                className={`book-card ${
                  selectedBookId === book.id ? "selected" : ""
                }`}
              >
                <div
                  className="wishlist-icon"
                  onClick={() => toggleWishlist(book)}
                >
                  {wishlist.some((i) => i.id === book.id) ? "❤️" : "🤍"}
                </div>

                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <p className="price">₹{book.price}</p>
                <p className="language">{book.language}</p>

                <div className="rating">
                  {"★".repeat(book.rating)}
                  {"☆".repeat(5 - book.rating)}
                </div>

                <button
                  className="edit-btn"
                  onClick={() => addToCart(book)}
                  disabled={added}
                >
                  {added ? "Added" : "Add to Cart"}
                </button>
              </div>
            );
          })
        ) : (
          <p className="no-results">No books found</p>
        )}
      </div>
    </div>
  );
}

export default Books;

