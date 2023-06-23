import React, { createContext, useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { data, isLoading, error } = useFetch("/sneakers");
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    if (!isLoading && !error && data) {
      setProductsData(data);
    }
  }, [data, isLoading, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!productsData) {
    return null;
  }

  return (
    <ProductsContext.Provider value={productsData}>
      {children}
    </ProductsContext.Provider>
  );
};
