import React, { useState } from 'react';
import './GroceriesPage.css'; // Import the CSS file

function GroceriesPage() {
  const [cart, setCart] = useState({ items: 0, total: 0 });

  const addToCart = (price) => {
    setCart((prevCart) => ({
      items: prevCart.items + 1,
      total: prevCart.total + price,
    }));
  };

  return (<><h1>Groceries</h1>
    <div className="groceries-container">
      
      <div className="product-card">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.kPuKch-NcMZPmst4_lTxEAHaE8?w=301&h=201&c=7&r=0&o=7&cb=iwp2&dpr=1.5&pid=1.7&rm=3"
          alt="Rice"
          className="product-image"
        />
        <h3>Rice - ₹500</h3>
        <button className="add-to-cart" onClick={() => addToCart(500)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Wheat"
          className="product-image"
        />
        <h3>Wheat - ₹400</h3>
        <button className="add-to-cart" onClick={() => addToCart(400)}>Add to Cart</button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Vegetables"
          className="product-image"
        />
        <h3>Vegetables - ₹300</h3>
        <button className="add-to-cart" onClick={() => addToCart(300)}>Add to Cart</button>
      </div>
      <footer className="cart-footer">
        <p>Your Cart: {cart.items} items</p>
        <p>Total Bill: ₹{cart.total}</p>
      </footer>
    </div>
    </>
  );
}

export default GroceriesPage;
