import React from "react";
import classes from "./Navbar.module.css";

const Navbar = ({ onShownCart }) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-logo"]}>Concpt</div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>Search</li>
        <li onClick={onShownCart}>Bag</li>
      </ul>
    </nav>
  );
};

export default Navbar;
