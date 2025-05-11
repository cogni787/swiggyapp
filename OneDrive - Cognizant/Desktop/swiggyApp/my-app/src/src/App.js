import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Login from './components/Login';
import Home from './components/Home';
import TiffinettePage from './components/Shoping  Products/TiffinettePage';
import DineoutPage from './components/Shoping  Products/DineoutPage';
import CraveryPage from './components/Shoping  Products/CraveryPage';
import DessertsPage from './components/Shoping  Products/DessertsPage';
import BeveragesPage from './components/Shoping  Products/BeveragesPage';
import FastFoodPage from './components/Shoping  Products/FastFoodPage';
import GroceriesPage from './components/Shoping  Products/GroceriesPage';
// ...import other pages...

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add Navbar */}
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tiffinette" element={<TiffinettePage />} />
          <Route path="/dineout" element={<DineoutPage />} />
          <Route path="/cravery" element={<CraveryPage />} />
          <Route path="/desserts" element={<DessertsPage />} />
          <Route path="/beverages" element={<BeveragesPage />} />
          <Route path="/fastfood" element={<FastFoodPage />} />
          <Route path="/groceries" element={<GroceriesPage />} />
          {/* Add routes for other pages */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
