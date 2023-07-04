import { useContext } from "react";
import { ProductsContext } from "../../../store/ProductContext";

const MinicartProduct = ({ name, amount, propPrice, productId, size }) => {
  const productsData = useContext(ProductsContext);
  if (!productsData) return null;

  const productFiltered = productsData.find(
    (product) => product._id == productId
  );

  const price = `$${propPrice.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center mb-10">
      <img src={productFiltered.image} className="w-[155px] lg:w-[230px]" />
      <div>
        <h2 className="text-[#323232] mb-1 text-[14px] font-medium lg:text-[17px]">
          {name}
        </h2>
        <span className="text-[14px] lg:text-[17px]">Size: {size}</span>
        <div className="flex flex-col text-[14px] mt-1 lg:text-[15px]">
          <span className="font-medium text-[#323232] mb-1">x{amount}</span>
          <span className="font-medium text-black text-[13px] lg:text-[14px]">
            {price}
          </span>
        </div>
      </div>
    </li>
  );
};

export default MinicartProduct;
