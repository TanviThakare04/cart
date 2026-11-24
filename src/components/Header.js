import React from 'react';

function Header({ cartCount }) {
  return (
    <header className="app-header">
      <h1>My Store</h1>
      <div className="cart-badge">
        🛒 Cart: <span>{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;