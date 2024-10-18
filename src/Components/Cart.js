import React, { useState } from 'react';

function Cart({ detail, addToCart }) {
  const [selectedFlavors, setSelectedFlavors] = useState([]);

  const handleCheckboxChange = (flavor) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor));
    } else if (selectedFlavors.length < 2) { 
      setSelectedFlavors([...selectedFlavors, flavor]);
    }
  };

  const handleClick = () => {
    addToCart(detail, selectedFlavors);
    setSelectedFlavors([]);
  };

  return (
    <div className="cart">
      <h2 className="ice-cream-name">{detail.title}</h2>
      <img src={detail.image} alt={detail.title} />

      <div className="choice">
        <p>{detail.description}</p>
        <p className="para">Choose Flavors (Up to 2):</p>
        <div>
          <input
            type="checkbox"
            id="Chocolate"
            value="Chocolate"
            onChange={() => handleCheckboxChange('Chocolate')}
            checked={selectedFlavors.includes('Chocolate')}
          />
          <label htmlFor="Chocolate">Chocolate</label>
          <input
            type="checkbox"
            id="Vanilla"
            value="Vanilla"
            onChange={() => handleCheckboxChange('Vanilla')}
            checked={selectedFlavors.includes('Vanilla')}
          />
          <label htmlFor="Vanilla">Vanilla</label>
          <input
            type="checkbox"
            id="Strawberry"
            value="Strawberry"
            onChange={() => handleCheckboxChange('Strawberry')}
            checked={selectedFlavors.includes('Strawberry')}
          />
          <label htmlFor="Strawberry">Strawberry</label>
        </div>
      </div>
      <button onClick={handleClick}>Add To Cart</button>
    </div>
  );
}

export default Cart;
