import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import CartIconButton from "../Cart/CartIconButton";

const styles = {
  textDecoration: "none",
  color: "inherit",
};

// const scrollToTop = () => {
//   window.scrollTo(0, 0);
// };

const Navbar = ({ onShownCart }) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-logo"]}>Concpt</div>
      <ul>
        <li>
          <Link to="/" style={styles}>
            Home
          </Link>
        </li>
        <li>
          <Link to="products" style={styles}>
            Products
          </Link>
        </li>
        <li>Search</li>
        <li onClick={onShownCart}>Bag</li>
      </ul>
    </nav>
  );
};

export default Navbar;
