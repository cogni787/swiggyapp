import React, { useState } from 'react';
import './DessertsPage.css'; // Import the CSS file

function DessertsPage() {
  const [cart, setCart] = useState({ items: 0, total: 0 });

  const addToCart = (price) => {
    setCart((prevCart) => ({
      items: prevCart.items + 1,
      total: prevCart.total + price,
    }));
  };

  return (<><h1>Desserts</h1>
    <div className="desserts-container">
      
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Cupcake"
          className="product-image"
        />
        <h3>Cupcake - ₹50</h3>
        <button className="add-to-cart" onClick={() => addToCart(50)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Donut"
          className="product-image"
        />
        <h3>Donut - ₹40</h3>
        <button className="add-to-cart" onClick={() => addToCart(40)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Macaron"
          className="product-image"
        />
        <h3>Macaron - ₹70</h3>
        <button className="add-to-cart" onClick={() => addToCart(70)}>Add to Cart</button>
      </div>
      <footer className="cart-footer">
        <p>Your Cart: {cart.items} items</p>
        <p>Total Bill: ₹{cart.total}</p>
      </footer>
    </div>
    </>
  );
}

export default DessertsPage;
