import React from 'react';
import CartProvider from './providers/CartProvider.jsx';

import Routes from './routes.js';
function App() {
  return (
    <CartProvider>
      <Routes></Routes>
    </CartProvider>
  );
}

export default App;
