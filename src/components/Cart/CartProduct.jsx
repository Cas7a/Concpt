import React from "react";

const CartProduct = ({ name, amount, propPrice, size, image, color }) => {
  const price = `$${propPrice.toFixed(2)}`;

  return (
    <div className="flex my-6 flex-col items-end sm:flex-row sm:items-center">
      <div className="w-full flex-1 flex sm:items-center">
        <img src={image} className="w-[45%] object-contain nl:w-[30%]" />
        <div className="">
          <p className="font-medium text-[15px] sm:text-[16px]">{name}</p>
          <dl className="flex flex-col">
            <div className="flex text-[14px] sm:text-[15px]">
              <dd>
                <span>{color}</span>
              </dd>
            </div>
            <div className="flex text-[14px]  sm:text-[15px]">
              <dt className="mr-1">Size:</dt>
              <dd>
                <span>{size}</span>
              </dd>
            </div>
            <div className="flex text-[14px]  sm:text-[15px]">
              <dt className="mr-1">Quantity:</dt>
              <dd>
                <span>{amount}</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="font-medium pt-3 text-[15px] pr-4 sm:p-0  sm:text-[16px]">
        <span>{price}</span>
      </div>
    </div>
  );
};

export default CartProduct;
