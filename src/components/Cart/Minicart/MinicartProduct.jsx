import classes from "./MinicartProduct.module.css";
import { useContext } from "react";
import { ProductsContext } from "../../../store/ProductContext";

const MinicartProduct = ({ name, amount, propPrice, productId, size }) => {
  const productsData = useContext(ProductsContext);
  console.log(productsData);

  if (!productsData) return null;

  const productFiltered = productsData.find(
    (product) => product._id == productId
  );

  const price = `$${propPrice.toFixed(2)}`;

  return (
    <li className={classes["mini-cart-product"]}>
      <img src={productFiltered.image} className={classes["mini-cart-image"]} />
      <div>
        <h2>{name}</h2>
        <h1>{size}</h1>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{amount}</span>
        </div>
      </div>
    </li>
  );
};

export default MinicartProduct;
