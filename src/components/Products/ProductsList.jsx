import React from "react";
import classes from "./ProductsList.module.css";
import useProductsView from "../../Hooks/useProductsView";

const ProductsList = () => {
  const showProducts = useProductsView(6, "", "");

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>Products</h1>
        <div className={classes["products-container"]}>{showProducts}</div>
      </div>
    </>
  );
};

export default ProductsList;
