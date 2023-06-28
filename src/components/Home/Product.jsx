import React from "react";

const Product = ({ image, price, name, color }) => {
  return (
    <li className="flex flex-col">
      <img className="w-[100%] pb-7" src={image} alt="Product Image"></img>
      <div className="flex justify-around items-center mb-8">
        <div>
          <h3 className="text-[1.05rem] font-medium mb-[2px] sm:text-[1.2rem]">
            {name}
          </h3>
          <span className="text-[0.8rem] font-normal text-[#1e1e1e] sm:text-[1rem]">
            {color}
          </span>
        </div>
        <span className="text-[0.9rem] font-medium sm:text-[1rem]">
          ${price}
        </span>
      </div>
    </li>
  );
};

export default Product;
