import React from "react";
import Product from "../components/Home/Product";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const styles = {
  textDecoration: "none",
  color: "inherit",
};

const useProductsView = (maxProductsToShow, basePath, slash) => {
  const { data, isLoading, error } = useFetch("/sneakers");

  if (isLoading) return <h1>LOADING...</h1>;
  if (error) return console.log(error);
  if (!data) return null;

  const showProducts = data.slice(0, maxProductsToShow).map((product) => (
    <Link
      to={`${basePath}${slash}${product.name}`}
      style={styles}
      key={product._id}
    >
      <Product
        key={product._id}
        image={product.image}
        price={product.price}
        name={product.name.replace(/-/g, " ")}
        color={product.color}
      />
    </Link>
  ));
  return showProducts;
};

export default useProductsView;
