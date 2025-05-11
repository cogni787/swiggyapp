import React, { useState } from 'react';
import './FastFoodPage.css'; // Import the CSS file

function FastFoodPage() {
  const [cart, setCart] = useState({ items: 0, total: 0 });

  const addToCart = (price) => {
    setCart((prevCart) => ({
      items: prevCart.items + 1,
      total: prevCart.total + price,
    }));
  };

  return (
    <div className="fastfood-container">
      <h1>Fast Food</h1>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Fries"
          className="product-image"
        />
        <h3>Fries - ₹80</h3>
        <button className="add-to-cart" onClick={() => addToCart(80)}>Add to Cart</button>
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
          alt="Pizza"
          className="product-image"
        />
        <h3>Pizza - ₹250</h3>
        <button className="add-to-cart" onClick={() => addToCart(250)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Hot Dog"
          className="product-image"
        />
        <h3>Hot Dog - ₹100</h3>
        <button className="add-to-cart" onClick={() => addToCart(100)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Sandwich"
          className="product-image"
        />
        <h3>Sandwich - ₹120</h3>
        <button className="add-to-cart" onClick={() => addToCart(120)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Taco"
          className="product-image"
        />
        <h3>Taco - ₹90</h3>
        <button className="add-to-cart" onClick={() => addToCart(90)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Nuggets"
          className="product-image"
        />
        <h3>Nuggets - ₹110</h3>
        <button className="add-to-cart" onClick={() => addToCart(110)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Salad"
          className="product-image"
        />
        <h3>Salad - ₹70</h3>
        <button className="add-to-cart" onClick={() => addToCart(70)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Wrap"
          className="product-image"
        />
        <h3>Wrap - ₹130</h3>
        <button className="add-to-cart" onClick={() => addToCart(130)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Soda"
          className="product-image"
        />
        <h3>Soda - ₹50</h3>
        <button className="add-to-cart" onClick={() => addToCart(50)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Ice Cream"
          className="product-image"
        />
        <h3>Ice Cream - ₹60</h3>
        <button className="add-to-cart" onClick={() => addToCart(60)}>Add to Cart</button>
      </div>
      <footer className="cart-footer">
        <p>Your Cart: {cart.items} items</p>
        <p>Total Bill: ₹{cart.total}</p>
      </footer>
    </div>
  );
}

export default FastFoodPage;