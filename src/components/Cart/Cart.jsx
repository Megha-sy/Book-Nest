import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5001/cart/");
        setCartItems(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/cart/${id}`);
      alert("Removed!");
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = async () => {
    try {
      await Promise.all(
        cartItems.map((item) => axios.delete(`http://localhost:5001/cart/${item.id}`))
      );
      alert("Removed!");
      setCartItems([]);
    } catch (error) {
      console.log(error);
    }
  };

  const increment = (id) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(item.quantity) + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, Number(item.quantity) - 1) } : item
      )
    );
  };

  // 👉 Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),0
  );

  const handleBuyNow = () => {
    alert(`🛒 Order placed successfully!\n\nTotal: ₹${totalPrice}`);
    setCartItems([]); // clear cart after purchase (optional)
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} className="cart-item-image" />

          <div className="cart-item-content">
            <h3>{item.title}</h3>
            <p>
              <strong>Author:</strong> {item.author}
            </p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Language:</strong> {item.language}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {item.rating}
            </p>
            <p>
              <strong>Price:</strong> ₹{item.price}
            </p>

            <div className="count">
              <button onClick={() => increment(item.id)} className="increment">
                +
              </button>
              <p>{item.quantity || 1}</p>
              <button onClick={() => decrement(item.id)} className="decrement">
                -
              </button>
            </div>

            <button onClick={() => removeFromCart(item.id)} className="remove-btn">
              Remove
            </button>
          </div>
        </div>
      ))}

<div className="cart-footer">
  <h3>Total: ₹{totalPrice}</h3>

  {cartItems.length > 0 ? (
    <div className="buttons">
      <button onClick={clearCart} className="clear-btn">
        Clear Cart
      </button>
      <button onClick={handleBuyNow} className="buy-btn">
        Buy Now
      </button>
    </div>
  ) : (
    <p>Your cart is empty</p>
  )}
</div>


    </div>
  );
}

export default Cart;
