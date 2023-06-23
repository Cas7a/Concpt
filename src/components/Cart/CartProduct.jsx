import React from "react";
import classes from "./CartProduct.module.css";

const CartProduct = ({ name, amount, propPrice, size, image, color }) => {
  const price = `$ ${propPrice.toFixed(2)}`;

  return (
    <div className={classes["cart-product"]}>
      <div className={classes["img-container"]}>
        <img src={image} className={classes["cart-product-image"]} />
      </div>
      <div className={classes["product-info"]}>
        <p
          style={{ marginBottom: "20px", fontSize: "19px", fontWeight: "500" }}
        >
          {name}
        </p>
        <dl className={classes["product-dl"]}>
          <div className={classes["product-dl-div"]}>
            <dt className={classes["product-dt"]}>Color:</dt>
            <dd>
              <span>{color}</span>
            </dd>
          </div>
          <div className={classes["product-dl-div"]}>
            <dt className={classes["product-dt"]}>Size:</dt>
            <dd>
              <span>{size}</span>
            </dd>
          </div>
          <div className={classes["product-dl-div"]}>
            <dt className={classes["product-dt"]}>Quantity:</dt>
            <dd>
              <span>{amount}</span>
            </dd>
          </div>
        </dl>
      </div>
      <div className={classes["product-price"]}>
        <span className={classes.price}>{price}</span>
      </div>
    </div>
  );
};

export default CartProduct;
