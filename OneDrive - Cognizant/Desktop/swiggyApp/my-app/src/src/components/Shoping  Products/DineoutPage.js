import React, { useState } from 'react';
import './DineoutPage.css'; // Import the CSS file

function DineoutPage() {
  const [cart, setCart] = useState({ items: 0, total: 0 });

  const addToCart = (price) => {
    setCart((prevCart) => ({
      items: prevCart.items + 1,
      total: prevCart.total + price,
    }));
  };

  return (<> <h1>Dineout</h1>
    <div className="dineout-container">
     
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Pizza"
          className="product-image"
        />
        <h3>Pizza - ₹250</h3>
        <button className="add-to-cart" onClick={() => addToCart(250)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Burger"
          className="product-image"
        />
        <h3>Burger - ₹150</h3>
        <button className="add-to-cart" onClick={() => addToCart(150)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Pasta"
          className="product-image"
        />
        <h3>Pasta - ₹200</h3>
        <button className="add-to-cart" onClick={() => addToCart(200)}>Add to Cart</button>
      </div>
      <footer className="cart-footer">
        <p>Your Cart: {cart.items} items</p>
        <p>Total Bill: ₹{cart.total}</p>
      </footer>
    </div>
    </>
  );
}

export default DineoutPage;
