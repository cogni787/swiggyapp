import React, { useState } from 'react';
import './TiffinettePage.css'; // Import the CSS file

function TiffinettePage() {
  const [cart, setCart] = useState({ items: 0, total: 0 });

  const addToCart = (price) => {
    setCart((prevCart) => ({
      items: prevCart.items + 1,
      total: prevCart.total + price,
    }));
  };

  return (<>
    <h1>Tiffinette</h1>
  
    <div className="tiffinette-container">
      
      <div className="product-card">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.8l_RsRJmI3s0jmag6hojNQHaE8?w=208&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.5&pid=1.7&rm=3"
          alt="Dosa"
          className="product-image"
        />
        <h3>Dosa - ₹60</h3>
        <button className="add-to-cart" onClick={() => addToCart(60)}>
          Add to Cart
        </button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Idly"
          className="product-image"
        />
        <h3>Idly - ₹60</h3>
        <button className="add-to-cart" onClick={() => addToCart(60)}>
          Add to Cart
        </button>
      </div>
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Poori"
          className="product-image"
        />
        <h3>Poori - ₹60</h3>
        <button className="add-to-cart" onClick={() => addToCart(60)}>
          Add to Cart
        </button>
      </div>
      <footer className="cart-footer">
        <p>Your Cart: {cart.items} items</p>
        <p>Total Bill: ₹{cart.total}</p>
      </footer>
    </div>
    </>
  );
}

export default TiffinettePage;
