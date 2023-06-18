import React from "react";
import classes from "./HomeProducts.module.css";
import useProductsView from "../../Hooks/useProductsView";

const HomeProducts = () => {
  const showProducts = useProductsView(3, "products", "/");

  return (
    <section id="home-products">
      <h1 className={classes.title}>Featured Products</h1>
      <div className={classes.container}>
        <div className={classes.products}>{showProducts}</div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default HomeProducts;
