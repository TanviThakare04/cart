import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';

const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', price: 59.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 89.99 },
  { id: 3, name: 'USB-C Hub', price: 29.99 },
  { id: 4, name: 'Laptop Stand', price: 39.99 },
];

function App() {
  // Step 3: Track items added to cart using useState
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="App">
      {/* Step 4: Pass cart length to Header */}
      <Header cartCount={cart.length} />
      <main>
        <ProductList 
          products={SAMPLE_PRODUCTS} 
          onAddToCart={handleAddToCart} 
        />
      </main>
    </div>
  );
}

export default App;
