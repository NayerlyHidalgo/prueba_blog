import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ProductosProvider } from './context/ProductosContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductosProvider>
      <App />
    </ProductosProvider>
  </React.StrictMode>
);