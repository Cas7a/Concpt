import React from "react";
import classes from "./Navbar.module.css";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

const Navbar = ({ onShownCart }) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-logo"]}>Concpt</div>
      <ul>
        <li>
          <LinkScroll
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            activeClass="active"
            to="home-products"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Products
          </LinkScroll>
        </li>
        <li>Search</li>
        <li onClick={onShownCart}>Bag</li>
      </ul>
    </nav>
  );
};

export default Navbar;
