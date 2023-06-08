import Navbar from "./components/Nav/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navbar onShownCart={showCartHandler} />
      <Home />
    </>
  );
}

export default App;
