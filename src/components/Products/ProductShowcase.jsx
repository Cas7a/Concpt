import React, { useState, useContext } from "react";
import classes from "./ProductShowcase.module.css";
import { useParams } from "react-router-dom";
import CartContext from "../../store/CartContext";
import { ProductsContext } from "../../store/ProductContext";

const SIZES = ["XS", "S", "M", "L", "XL"];

// Logic for changing size button style when active
const SizesButton = ({ size, activeSize, setActiveSize }) => {
  const handleClick = () => {
    setActiveSize(size);
  };

  const buttonIsActive =
    activeSize === size
      ? `${"rounded-[5px] border border-solid border-black"}`
      : `${"rounded-[5px] border border-solid border-gray-300"}`;

  return (
    <div className={buttonIsActive} onClick={handleClick}>
      <span className="cursor-pointer flex justify-center w-11 pt-3 pb-3 lg:w-12">
        {size}
      </span>
    </div>
  );
};

const ProductShowcase = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [showSizeError, setShowSizeError] = useState(false);

  const productsData = useContext(ProductsContext);

  const cartCtx = useContext(CartContext);
  const { productId } = useParams();

  const addToCartHandler = () => {
    if (activeSize) {
      setShowSizeError(false);
      cartCtx.addProduct({
        _id: productFiltered._id,
        name: formattedName,
        price: productFiltered.price,
        color: productFiltered.color,
        description: productFiltered.description,
        amount: 1,
        size: activeSize,
        image: productFiltered.image,
      });
    } else {
      setShowSizeError(true);
    }
  };
  if (!productsData) return null;

  const productFiltered = productsData.find(
    (product) => product.name == productId
  );

  const formattedName = productFiltered.name.replace(/-/g, " ");

  return (
    <>
      <div className="flex flex-col items-center mt-10 pl-6 pr-6 lg:flex-row lg:ml-10 lg:mr-20 lg:p-0 xl:justify-center xl:mt-28">
        <div className=" xl:w-[40%]">
          <img
            src={productFiltered.image}
            alt="Product"
            className="w-full h-auto "
          />
        </div>
        <div className="flex flex-col w-full lg:ml-10 lg:w-[70%] xl:w-[40%] xl:ml-12 2xl:w-[30%]">
          <h1 className="text-[1.3rem] leading-8 font-medium">
            {formattedName}
          </h1>
          <span className="text-[#5f5f5f] text-[16px] font-medium pb-2">
            {productFiltered.color}
          </span>
          <div className="font-medium text-[17px]  border-b border-solid border-[#E8E8E8] pb-10">
            ${productFiltered.price}
          </div>

          <fieldset className="">
            <legend className="font-normal text-[18px] pb-4 pt-4">Size</legend>
            <div className="flex text-[15px] justify-start gap-3">
              {SIZES.map((size) => (
                <SizesButton
                  key={size}
                  size={size}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
              ))}
            </div>
          </fieldset>
          {showSizeError && (
            <p className="text-red-600">Please, select a size</p>
          )}
          <button
            className="cursor-pointer w-full p-4 bg-[#323232] border-none transition duration-500 hover:bg-[#5f5f5f] active:bg-[#5f5f5f] mt-10"
            onClick={addToCartHandler}
          >
            <span className="text-white font-normal text-[17px]">
              Add to cart
            </span>
          </button>
          <p className="text-[16px] leading-6 font-light mt-6 text-justify">
            {productFiltered.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;
