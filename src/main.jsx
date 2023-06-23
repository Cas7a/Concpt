import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "/reset.css";
import CartProvider from "./store/CartProvider.jsx";
import { ProductsProvider } from "./store/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </CartProvider>
);
