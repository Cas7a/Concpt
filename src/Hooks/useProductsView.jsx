import React from "react";
import Product from "../components/Home/Product";
import CustomLink from "../components/UI/Link";

const useProductsView = (productsData, maxProductsToShow, basePath, slash) => {
  if (!productsData) return null;

  const showProducts = productsData
    .slice(0, maxProductsToShow)
    .map((product) => (
      <CustomLink to={`${basePath}${slash}${product.name}`} key={product._id}>
        <Product
          key={product._id}
          image={product.image}
          price={product.price}
          name={product.name.replace(/-/g, " ")}
          color={product.color}
        />
      </CustomLink>
    ));
  return showProducts;
};

export default useProductsView;
