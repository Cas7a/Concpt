import React from "react";

const Product = ({ image, price, name, color, location }) => {
  return (
    <li
      className={
        location === "home" ? "flex flex-col" : "flex flex-col pb-6  lg:pb-14"
      }
    >
      <img
        className={location === "home" ? "w-[100%] pb-7" : "w-[100%] pb-7"}
        src={image}
        alt="Product Image"
      ></img>
      <div
        className={
          location === "home"
            ? "flex justify-around items-center mb-8"
            : "lg:flex justify-around items-center"
        }
      >
        <div>
          <h3
            className={
              location === "home"
                ? "text-[1.05rem] font-medium mb-[2px] sm:text-[1.2rem]"
                : "text-[0.9rem] leading-none font-medium mb-[1px] md:text-[1.05rem] md:font-normal"
            }
          >
            {name}
          </h3>
          <span
            className={
              location === "home"
                ? "text-[0.8rem] font-normal text-[#1e1e1e] sm:text-[1rem]"
                : "text-[0.75rem] font-normal text-[#1e1e1e] md:text-[0.9rem]"
            }
          >
            {color}
          </span>
        </div>
        <span
          className={
            location === "home"
              ? "text-[0.8rem] font-normal text-[#1e1e1e] sm:text-[1rem]"
              : "text-[0.75rem] font-medium text-[#1e1e1e] md:text-[0.93rem]"
          }
        >
          ${price}
        </span>
      </div>
    </li>
  );
};

export default Product;
