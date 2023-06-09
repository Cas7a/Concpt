import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import HomeProducts from "./components/Home/HomeProducts";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import { useState } from "react";
import { Route, Routes } from "react-router";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Navbar onShownCart={showCartHandler} />
            <Home />
            <HomeProducts />
          </>
        }
      />
      <Route path="products" element={<Products />} />
    </Routes>
  );
}

export default App;
