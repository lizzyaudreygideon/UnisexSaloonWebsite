// Products.js
import React, { useState } from 'react';
import Product from '../Components/Products/Product';
import Filter from '../Components/Products/ProductsFilter'; 
import sampleProducts from '../Components/Products/ProductData'; 
import Footer from '../Components/Footer';

const categories = [
  'Shampoos',
  'Conditioners',
  'Styling products',
  'Scarves, head wraps, combs brushes',
  'Hair ties bobby pins, clamps',
  'Edge control, small serums',
  'Handheld hair dryers, Soft Bonnet dryers, curling wands, flatirons',
];

const Products = ({ onAddToCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filtered = sampleProducts.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(sampleProducts);
    }
  };

  return (
    <>
    <div className="products-container">
      <h1 className='product-hearding'>Our Products</h1>
      <Filter categories={categories} onFilterChange={handleFilterChange} />
      {selectedCategory && <h2>Showing results for: {selectedCategory}</h2>} 
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>

     {/* footer */}
     <div className="fooot">
      <Footer/>
     </div>

    </>
  );
};

export default Products;