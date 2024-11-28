import React from 'react';

const Filter = ({ categories, onFilterChange }) => {
  return (
    <div className="filter-container">
      <h2 >Filter by Category</h2>
      <select onChange={(e) => onFilterChange(e.target.value)} >
        <option value="">All Products</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;