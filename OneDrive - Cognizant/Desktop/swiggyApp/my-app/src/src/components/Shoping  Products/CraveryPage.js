import React, { useState } from 'react';
import './CraveryPage.css';

function CraveryPage() {
  const [cart, setCart] = useState({ items: 0, total: 0 });

  const addToCart = (price) => {
    setCart((prevCart) => ({
      items: prevCart.items + 1,
      total: prevCart.total + price,
    }));
  };

  return (<><h1>Cravery</h1>
    <div className="cravery-container">
      
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Cake"
          className="product-image"
        />
        <h3>Cake - ₹500</h3>
        <button className="add-to-cart" onClick={() => addToCart(500)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Brownie"
          className="product-image"
        />
        <h3>Brownie - ₹120</h3>
        <button className="add-to-cart" onClick={() => addToCart(120)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Ice Cream"
          className="product-image"
        />
        <h3>Ice Cream - ₹80</h3>
        <button className="add-to-cart" onClick={() => addToCart(80)}>Add to Cart</button>
      </div>
      <footer className="cart-footer">
        <p>Your Cart: {cart.items} items</p>
        <p>Total Bill: ₹{cart.total}</p>
      </footer>
    </div>
    </>
  );
}

export default CraveryPage;
