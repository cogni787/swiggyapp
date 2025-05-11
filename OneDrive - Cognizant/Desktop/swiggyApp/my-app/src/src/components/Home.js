import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1>Pick your favourite!</h1>
        <p>Order food & beverages you love. Swiggy it!</p>
        <input
          type="text"
          placeholder="Search for cuisines, beverages or more"
          className="search-bar"
        />
      </header>

      {/* Restaurant Categories Section */}
      <section className="restaurant-section">
        <div
          className="restaurant-card"
          onClick={() => navigate('/dineout')}
        >
          <h2>DINEOUT</h2>
          <p>Your favourite restaurants</p>
          <p className="highlight">Get exciting combo offers</p>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.6IqE7lj0qGw7H67yn-cohwHaE8?cb=iwp2&rs=1&pid=ImgDetMain"
            alt="Dineout"
            className="restaurant-image"
          />
        </div>
        <div
          className="restaurant-card"
          onClick={() => navigate('/tiffinette')}
        >
          <h2>TIFFINETTE</h2>
          <p>Anything and everything you want</p>
          <p className="highlight">Exciting offers</p>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.gHLVGAS7z_IrayXq-ysclAHaFB?cb=iwp2&rs=1&pid=ImgDetMain"
            alt="Tiffinette"
            className="restaurant-image"
          />
        </div>
        <div
          className="restaurant-card"
          onClick={() => navigate('/cravery')}
        >
          <h2>CRAVERY</h2>
          <p>Anything and everything you want</p>
          <p className="highlight">Exciting offers</p>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.67oDO3NQw3GMdiCicKREvAHaD4?w=296&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.5&pid=1.7&rm=3"
            alt="Cravery"
            className="restaurant-image"
          />
        </div>
        <div
          className="restaurant-card"
          onClick={() => navigate('/desserts')}
        >
          <h2>DESSERTS</h2>
          <p>Sweet treats for every occasion</p>
          <p className="highlight">Special discounts</p>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.KX2zA3DeomN-JXts-mRWrgHaE7?w=252&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.5&pid=1.7&rm=3"
            alt="Desserts"
            className="restaurant-image"
          />
        </div>
        <div
          className="restaurant-card"
          onClick={() => navigate('/fastfood')}
        >
          <h2>FAST FOOD</h2>
          <p>Quick bites for your cravings</p>
          <p className="highlight">Limited time offers</p>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.VZJITydk6qRPEbdMHWWt0wHaHa?w=184&h=184&c=7&r=0&o=7&cb=iwp2&dpr=1.5&pid=1.7&rm=3"
            alt="Fast Food"
            className="restaurant-image"
          />
        </div>
        <div
          className="restaurant-card"
          onClick={() => navigate('/groceries')}
        >
          <h2>GROCERIES</h2>
          <p>Fresh and quality groceries delivered</p>
          <p className="highlight">Shop now</p>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.i60xXhRrmfEVCs9EN7mrKwHaFj?w=207&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.5&pid=1.7&rm=3"
            alt="Groceries"
            className="restaurant-image"
          />
        </div>
        <div
          className="restaurant-card"
          onClick={() => navigate('/beverages')}
        >
          <h2>BEVERAGES</h2>
          <p>Refreshing drinks for every mood</p>
          <p className="highlight">Order now</p>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.UbS0SY-3w9Qd4MPuzFxB_gHaGf?w=201&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.5&pid=1.7&rm=3"
            alt="Beverages"
            className="restaurant-image"
          />
        </div>
      </section>


      {/* Featured Restaurants Section */}
      <section className="featured-restaurants-section">
        <h2>Featured Restaurants</h2>
        <div className="featured-restaurants">
          <div className="featured-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Restaurant 1"
              className="featured-image"
            />
            <h3>Restaurant 1</h3>
            <p>Experience the best dining in town.</p>
          </div>
          <div className="featured-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Restaurant 2"
              className="featured-image"
            />
            <h3>Restaurant 2</h3>
            <p>Delicious meals and great ambiance.</p>
          </div>
          <div className="featured-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Restaurant 3"
              className="featured-image"
            />
            <h3>Restaurant 3</h3>
            <p>Perfect place for family and friends.</p>
          </div>
        </div>
      </section>

      {/* Previous Bookings Section */}
      <section className="previous-bookings-section">
        <h2>Your Previous Bookings</h2>
        <div className="booking-card">
          <h3>So The Sky Kitchen</h3>
          <p>Date: 2023-10-01</p>
          <p>Time: 7:00 PM</p>
          <p>Guests: 4</p>
        </div>
        <div className="booking-card">
          <h3>Hoy Punjab, Hyderabad</h3>
          <p>Date: 2023-09-25</p>
          <p>Time: 8:00 PM</p>
          <p>Guests: 2</p>
        </div>
        <div className="booking-card">
          <h3>Aish - The Park</h3>
          <p>Date: 2023-09-15</p>
          <p>Time: 6:30 PM</p>
          <p>Guests: 3</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="home-footer">
        <p>© 2025 Restaurant Table Booking. All Rights Reserved.</p>
        <p>
          Designed with ❤️ for food lovers | <a href="#privacy">Privacy Policy</a> |{' '}
          <a href="#terms">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
