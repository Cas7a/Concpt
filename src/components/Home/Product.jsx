import React from "react";
import classes from "./Product.module.css";

const Product = ({ image, price, name, color }) => {
  return (
    <li className={classes.product}>
      <img className={classes["product-image"]} src={image} alt="Jordan"></img>
      <h3>{name}</h3>
      <div className={classes.color}>{color}</div>
      <div className={classes.price}>${price}</div>
    </li>
  );
};

export default Product;