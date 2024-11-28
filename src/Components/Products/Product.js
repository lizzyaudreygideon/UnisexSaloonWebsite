
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;