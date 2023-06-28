import CartModal from "../../UI/CartModal";
import classes from "./Minicart.module.css";
import { useContext, useState } from "react";
import CartContext from "../../../store/CartContext";
import MinicartProduct from "./MinicartProduct";
import CustomLink from "../../UI/Link";

const Minicart = ({ onClose, cartIsShown }) => {
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
    <ul className="flex flex-1 flex-col no-scrollbar items-start overflow-auto border-b border-solid border-[#1e1e1e]">
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

  const cartIsEmpty = (
    <div className={classes["mini-cart-empty"]}>
      <p>Your don't have any products in your cart</p>
      <button onClick={onClose}>Continue Shopping</button>
    </div>
  );

  const cartModalContent = (
    <>
      {hasItems && (
        <div className="text-[22px] font-medium uppercase h-[60px] pt-8">
          Added
        </div>
      )}
      {hasItems && cartProducts}
      {hasItems && (
        <>
          <div className="flex flex-col text-[1.3rem] mt-[1rem] mb-[1rem] gap-5">
            <div className="flex justify-between items-center">
              <span className="text-[1.1rem] lg:text-[20px]">Total:</span>
              <span className="text-[14px] lg:text-[17px]">{totalPrice}</span>
            </div>

            <div className="flex justify-between">
              {hasItems && (
                <button className="btn-bag" onClick={onClose}>
                  <CustomLink to="/cart">View Bag</CustomLink>
                </button>
              )}
              {hasItems && (
                <button className="btn-checkout">
                  <CustomLink to={"/"} pt={"10"}>
                    Checkout
                  </CustomLink>
                </button>
              )}
            </div>
          </div>
        </>
      )}
      {!hasItems && cartIsEmpty}
    </>
  );

  return (
    <CartModal onClose={onClose} cartIsShown={cartIsShown}>
      {cartModalContent}
    </CartModal>
  );
};

export default Minicart;
