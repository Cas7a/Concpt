import React, { useContext } from "react";
import classes from "./HomeProducts.module.css";
import useProductsView from "../../Hooks/useProductsView";
import { ProductsContext } from "../../store/ProductContext";

const HomeProducts = () => {
  const productsData = useContext(ProductsContext);
  const showProducts = useProductsView(productsData, 3, "products", "/");

  return (
    <section className={classes["featured-products"]}>
      <h1 className={classes.title}>Featured Products</h1>
      <div className={classes.container}>{showProducts}</div>
    </section>
  );
};

export default HomeProducts;
