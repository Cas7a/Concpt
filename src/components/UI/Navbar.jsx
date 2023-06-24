import React from "react";
import classes from "./Navbar.module.css";
import CartIconButton from "../Cart/CartIconButton";
import CustomLink from "./Link";

// const scrollToTop = () => {
//   window.scrollTo(0, 0);
// };

const Navbar = ({ onShownCart }) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes["header-inner"]}>
        <div className={classes["navbar-logo"]}>Concpt</div>
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="products">Products</CustomLink>
          </li>
          <li>Search</li>
          <li onClick={onShownCart}>Bag</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
