import React from "react";
import classes from "./ProductsList.module.css";
import useProductsView from "../../Hooks/useProductsView";
import { ProductsContext } from "../../store/ProductContext";
import { useContext } from "react";

const ProductsList = () => {
  const productsData = useContext(ProductsContext);
  const showProducts = useProductsView(productsData, 6, "", "");

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Products</h1>
      <div className={classes["products-container"]}>{showProducts}</div>
    </div>
  );
};

export default ProductsList;
