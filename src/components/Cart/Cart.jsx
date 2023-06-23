import React from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import CartProduct from "./CartProduct";
import CustomLink from "../UI/Link";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartProducts = (
    <>
      {cartCtx.products.map((product) => (
        <CartProduct
          key={product._id + product.size}
          name={product.name}
          amount={product.amount}
          propPrice={product.price}
          size={product.size}
          image={product.image}
          color={product.color}
          // onRemove={cartProductRemoveHandler.bind(null, product._id)}
          // onAdd={cartProductAddHandler.bind(null, product)}
        />
      ))}
    </>
  );

  const totalProducts = cartCtx.products.reduce(
    (total, product) => total + product.amount,
    0
  );

  return (
    <div className={classes["cart-container"]}>
      <h3 className={classes.title}>Your Bag</h3>
      <div className={classes["cart-bag"]}>
        <div className={classes["cart-list"]}>{cartProducts}</div>
        <div className={classes["cart-summary"]}>
          <aside className={classes["cart-order-total"]}>
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: "500",

                marginBottom: "20px",
              }}
            >
              Order Summary
            </h2>
            <dl>
              <div className={classes["summary-dl-div"]}>
                <dt>Items:</dt>
                <dd>{totalProducts}</dd>
              </div>
              <div className={classes["summary-dl-div"]}>
                <dt>Shipping:</dt>
                <dd>$15</dd>
              </div>
              <div
                style={{ fontWeight: "500" }}
                className={classes["summary-dl-div"]}
              >
                <dt>Total:</dt>
                <dd>$ {cartCtx.total}</dd>
              </div>
            </dl>
            <button className={classes.button}>
              <CustomLink to={"/"}>Checkout</CustomLink>
            </button>
          </aside>
          <div className={classes["shipping-info"]}>
            <p>
              SHIPPING & RETURNS
              <br />
              Italy: approximately 1-2 working days (excluding the Italian
              Islands which may take 2-3 working days). More info
              <br />
              European Union: approximately 2-3 working days. More info Rest of
              the world: approximately 4-5 working days. More info
              <br />
              Delivery duties are included in the item price when shipping to
              all EU countries, New Europe, Switzerland, Japan, South Korea,
              Hong Kong SAR, Canada, China Mainland, Singapore, Australia,
              Taiwan Region, Thailand, United Arab Emirates and the United
              States. All import duties are included in your order the price you
              see is the price you pay.
              <br />
              For any reason, customers can return the order for free, entirely
              or partially. concpt.com refunds within 14 days from the receipt
              of the merchandise. More info
              <br />
              Need more information? Read our Shipping & Delivery conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
