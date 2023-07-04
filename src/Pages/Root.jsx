import React from "react";
import { useEffect, useContext } from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Minicart from "../components/Cart/Minicart/Minicart";
import Footer from "../components/UI/Footer";
import { MinicartContext } from "../store/MinicartContext";

// Scroll to top always after clicking a link
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Root = () => {
  const minicartCtx = useContext(MinicartContext);

  return (
    <>
      <ScrollToTop />
      <Minicart onClose={minicartCtx.hideMinicart} />
      <Navbar onShownCart={minicartCtx.showMinicart} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
