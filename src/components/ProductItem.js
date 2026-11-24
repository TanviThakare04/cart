import React from 'react';

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;