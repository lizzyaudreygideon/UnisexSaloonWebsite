import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, onRemoveFromCart }) => {
  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Go shopping!</Link></p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => onRemoveFromCart(index)} className="remove-button">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalCost.toFixed(2)}</h2>
          <Link to="/products" className="continue-shopping-button">Continue Shopping</Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
