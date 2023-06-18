import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/UI/Navbar";
import { useState } from "react";
import Cart from "../components/Cart/Cart";
import Footer from "../components/UI/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top always after clicking a link
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Root = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <ScrollToTop />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navbar onShownCart={showCartHandler} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
