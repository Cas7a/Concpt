import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Minicart from "../components/Cart/Minicart/Minicart";
import Footer from "../components/UI/Footer";

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
      {cartIsShown && <Minicart onClose={hideCartHandler} />}
      <Navbar onShownCart={showCartHandler} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
