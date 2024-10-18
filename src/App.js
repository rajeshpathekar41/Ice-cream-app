import React, { useState } from 'react';
import Cart from './Components/Cart';
import Data from './Data';
import AddedCart from './Components/AddedCart';
import "./index.css";
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (detail, selectedFlavors) => {
    const isProductInCart = cartItems.find(item => item.detail.id === detail.id);
    if (!isProductInCart) {
      setCartItems(prevCartItems => [
        ...prevCartItems,
        { detail, flavors: selectedFlavors }
      ]);
    }
  };

  const handleRemoveFromCart = (detail) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.detail.id !== detail.id));
  };

  return (
    <div className='app'>
      <div className="App">
        <h1>Bhopal Ice-Cream</h1>
        <div className='all-cart'>
          {Data.map((detail) => (
            <Cart
              key={detail.id}
              detail={detail}
              addToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className='show'>
        <h3 className='heading'>Cart</h3>
        <div><AddedCart cartItems={cartItems} removeFromCart={handleRemoveFromCart} /></div>
        <select>
          <option selected>Location</option>
          <option>Indore</option>
          <option>Bhopal</option>
          <option>Vidisha</option>
          <option>Rewa</option>
        </select>
      </div>
    </div>
  );
}

export default App;
