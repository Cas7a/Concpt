import Modal from "../../UI/Modal";
import classes from "./Minicart.module.css";
import { useContext, useState } from "react";
import CartContext from "../../../store/CartContext";
import MinicartProduct from "./MinicartProduct";
import CustomLink from "../../UI/Link";

const Minicart = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalPrice = `$${cartCtx.total.toFixed(2)}`;
  const hasItems = cartCtx.products.length > 0;

  //Add or remove 1 product in Cart "PAGE"
  // const cartProductAddHandler = (product) => {
  //   cartCtx.addProduct({ ...product, amount: 1 });
  // };
  // const cartProductRemoveHandler = (id) => {
  //   cartCtx.removeProduct(id);
  // };

  const cartProducts = (
    <ul className={classes["cart-items"]}>
      {cartCtx.products.map((product) => (
        <MinicartProduct
          key={product._id + product.size}
          productId={product._id}
          name={product.name}
          amount={product.amount}
          propPrice={product.price}
          size={product.size}
          // onRemove={cartProductRemoveHandler.bind(null, product._id)}
          // onAdd={cartProductAddHandler.bind(null, product)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes["mini-cart-empty"]}>
      <p>Your don't have any products in your cart</p>
      <button onClick={onClose}>Continue Shopping</button>
    </div>
  );

  const cartModalContent = (
    <>
      {hasItems && <div className={classes["mini-cart-header"]}>Added</div>}
      {hasItems && cartProducts}
      {hasItems && (
        <>
          <div className={classes.total}>
            <div className={classes["total-price"]}>
              <span>Total:</span>
              <span>{totalPrice}</span>
            </div>

            <div className={classes.actions}>
              {hasItems && (
                <button id={classes["bag-btn"]} onClick={onClose}>
                  <CustomLink to="/cart">View Bag</CustomLink>
                </button>
              )}
              {hasItems && (
                <button>
                  <CustomLink to={"/"}>Checkout</CustomLink>
                </button>
              )}
            </div>
          </div>
        </>
      )}
      {!hasItems && modalActions}
    </>
  );

  return <Modal onClose={onClose}>{cartModalContent}</Modal>;
};

export default Minicart;
