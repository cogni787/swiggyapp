import React, { useState } from 'react';
import './BeveragesPage.css'; // Import the CSS file

function BeveragesPage() {
  const [cart, setCart] = useState({ items: 0, total: 0 });

  const addToCart = (price) => {
    setCart((prevCart) => ({
      items: prevCart.items + 1,
      total: prevCart.total + price,
    }));
  };

  return (<><h1>Beverages</h1>
    <div className="beverages-container">
      
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Coffee"
          className="product-image"
        />
        <h3>Coffee - ₹50</h3>
        <button className="add-to-cart" onClick={() => addToCart(50)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Tea"
          className="product-image"
        />
        <h3>Tea - ₹30</h3>
        <button className="add-to-cart" onClick={() => addToCart(30)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Juice"
          className="product-image"
        />
        <h3>Juice - ₹60</h3>
        <button className="add-to-cart" onClick={() => addToCart(60)}>Add to Cart</button>
      </div>
      <footer className="cart-footer">
        <p>Your Cart: {cart.items} items</p>
        <p>Total Bill: ₹{cart.total}</p>
      </footer>
    </div>
    </>
  );
}

export default BeveragesPage;
