import classes from "./CartProduct.module.css";
import useFetch from "../../Hooks/useFetch";

const CartProduct = ({ name, amount, propPrice, productId, size }) => {
  const { data } = useFetch("/sneakers");
  if (!data) return null;

  const productFiltered = data.find((product) => product._id == productId);

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

export default CartProduct;
