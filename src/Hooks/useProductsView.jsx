import React from "react";
import Product from "../components/UI/Product";
import CustomLink from "../components/UI/Link";

const useProductsView = (
  productsData,
  maxProductsToShow,
  basePath,
  slash,
  location
) => {
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
          location={location}
        />
      </CustomLink>
    ));
  return showProducts;
};

export default useProductsView;
