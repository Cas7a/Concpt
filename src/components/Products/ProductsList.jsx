import React from "react";
import useProductsView from "../../Hooks/useProductsView";
import { ProductsContext } from "../../store/ProductContext";
import { useContext } from "react";

const ProductsList = () => {
  const productsData = useContext(ProductsContext);
  const showProducts = useProductsView(productsData, 6, "", "", "products");

  return (
    <div className="flex flex-col h-auto items-center p-4 pb-10">
      <h1 className="font-medium text-[30px] pb-6 pt-6">Products</h1>
      <div className="grid w-full max-w-[1300px] gap-3 grid-cols-2 text-sm lg:grid-cols-3">
        {showProducts}
      </div>
    </div>
  );
};

export default ProductsList;
