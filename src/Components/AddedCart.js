import React from 'react';

function AddedCart({ cartItems, removeFromCart }) {
  const handleRemove = (detail) => {
    removeFromCart(detail);
  };

  return (
    <div className="addedCart">
      {cartItems.map((cartItem, index) => (
        <div key={index} className="your-choice">
          <p className='content'>{cartItem.detail.title}</p>
          <p className='content pink'>{cartItem.flavors.length > 0 ? `Flavors: ${cartItem.flavors.join(', ')}` : 'No flavors selected'}</p>
          <button className="content remove-btn" onClick={() => handleRemove(cartItem.detail)}>Remove Cart</button>
        </div>
      ))}
    </div>
  );
}

export default AddedCart;
