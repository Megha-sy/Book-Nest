import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Books.css';

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
  const location2 = useLocation();

  const selectedBookId = location.state?.selectedBookId || null;

  useEffect(() => {
    if (location2.state?.selectedCategory) {
      setSelectedCategory(location2.state.selectedCategory);
    }
  }, [location2.state]);
  // 📚 Fetch books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5001/books");
        setBooksData(res.data);

        const cartRes=await axios.get("http://localhost:5001/cart");
        setCartItems(cartRes.data);

        const wishRes=await axios.get("http://localhost:5001/wishlist");
        setWishlist(wishRes.data);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    fetchBooks();
  }, []);



  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Biographies & Autobiographies",
    "Self-Help",
    "Academic & Educational",
    "Children's Books",
    "Cookbooks"
  ];

  const languages = ["All", "English", "Malayalam"];
  const ratings = [5, 4, 3, 2, 1];

  const priceRanges = [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under ₹200", min: 0, max: 200 },
    { label: "₹200 - ₹300", min: 201, max: 300 },
    { label: "₹300 - ₹400", min: 301, max: 400 },
    { label: "₹400 - ₹500", min: 401, max: 500 },
    { label: "Above ₹500", min: 501, max: Infinity }
  ];

  // 🛒 Add to cart
  const addToCart = async (book) => {
    if (cartItems.some((item) => item.id === book.id)) {
      return; // already added
    }

    try {
      const newCart = [...cartItems, book];
      setCartItems(newCart);
      const res = await axios.post("http://localhost:5001/cart", book);
      alert(`${book.title} added to cart!`);
    } catch (err) {
      console.log("Error adding to cart:", err);
    }
  };

  // wishlist
  const Wishlist = async (book) => {
    try {
      setWishlist((prev) => {
        const exists = prev.some((item) => item.id === book.id);
  
        // Show correct alert before returning new state
        if (exists) {
          alert(`${book.title} removed from wishlist!`);
          return prev.filter((item) => item.id !== book.id);
        } else {
          alert(`${book.title} added to wishlist!`);
          return [...prev, book];
        }
      });
  
      // Always sync with backend (optional: you might want DELETE for remove)
      await axios.post("http://localhost:5001/wishlist", book);
    } catch (err) {
      console.log("Error updating wishlist:", err);
    }
  };
  
  

  // const Wishlist = (bookId) => {
  //   setWishlist((item) =>item.includes(bookId)
  //       ? item.filter((id) => id !== bookId): [...item, bookId]);
  // };

  //  Close filter menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {   //filterRef.current =>menubar is exist as open
        setShowFilterMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }; //clean up fun when unmount th element
  },
   [] );

  // 📌 Scroll to selected book
  useEffect(() => {
    if (selectedBookId && bookRefs.current[selectedBookId]) {
      bookRefs.current[selectedBookId].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [selectedBookId]);

  // 🔍 Filtering
  const filteredBooks = booksData.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());//title filter
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    const matchesLanguage = selectedLanguage === "All" || book.language === selectedLanguage;
    const priceRange = priceRanges.find((range) => range.label === selectedPriceRange) || priceRanges[0];
    const matchesPrice = book.price >= priceRange.min && book.price <= priceRange.max;
    const matchesRating = selectedRating === 0 || book.rating >= selectedRating;

    return matchesSearch && matchesCategory && matchesLanguage && matchesPrice && matchesRating;
  });

  return (
    <div className="books-page">
      <h2 className="books-heading">Explore Our Bookstore</h2>

      {/*  SEARCH + FILTERS */}
      <div className="top-bar">
        <input type="text" placeholder="Search books by title..." className="search-bar"value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>

        {/* FILTER MENU */}
        <div className="filter-container" ref={filterRef}>
          <button className="filter-icon" onClick={() => setShowFilterMenu(!showFilterMenu)}>
            ☰
          </button>
          {showFilterMenu && (
            <div className="filter-popup">
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>))}
              </select>

              <select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}>
                {priceRanges.map((range, index) => (<option key={index} value={range.label}>{range.label}</option>))}
              </select>

              <select value={selectedRating} onChange={(e) => setSelectedRating(Number(e.target.value))}>
                <option value={0}>All Ratings</option>{ratings.map((rate) => (
                  <option key={rate} value={rate}>{rate}★ & up</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/*  LANGUAGE TOGGLE */}
        <div className="language-toggle">
          {languages.map((lang) => (
            <button key={lang} className={`toggle-btn ${selectedLanguage === lang ? "active" : ""}`}
              onClick={() => setSelectedLanguage(lang)} >{lang} </button>
          ))}
        </div>
      </div>

      {/* BOOKS GRID */}
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => {
            const alreadyAdded = cartItems.some((item) => item.id === book.id);
            return (
              <div key={book.id}
                ref={(el) => (bookRefs.current[book.id] = el)}
                className={`book-card ${selectedBookId === book.id ? "selected" : ""}`}>
                <div className="wishlist-icon" onClick={() => Wishlist(book)}>
                {wishlist.some((item) => item.id === book.id) ? "❤️" : "🤍"}
                </div>
                {book.image ? (<img src={book.image} alt={book.title} />) : (<div className="no-image">No Image</div>)}
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <p className="price">₹{book.price}</p>
                <p className="language">{book.language}</p>
                <div className="rating">
                  {"★".repeat(book.rating)}{"☆".repeat(5 - book.rating)}
                </div>
                <button className="edit-btn" onClick={() => addToCart(book)} disabled={alreadyAdded}>{/* without disabled={alreadyAdded}-user can click multiple times,so it send duplicate api*/}
                  {alreadyAdded ? "Added" : "Add to Cart"}
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
