import React from "react";

import CartContext from "../../store/CartContext";
import { useContext } from "react";
import CartProduct from "./CartProduct";
import CustomLink from "../UI/Link";
import {
  VisaLogo,
  PaypalLogo,
  MastercardLogo,
  MaestroLogo,
  AmexLogo,
} from "../Home/Logos";

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
    <div className="flex flex-col items-center text-base py-4 px-4 sm:px-8 2xl:w-[1300px] 2xl:mx-auto">
      <h3 className="font-medium text-[1.3rem] uppercase mb-4 2xl:text-[1.5rem]">
        Your Bag
      </h3>
      <div className="flex flex-col border-t border-solid border-black lg:flex-row">
        <div className="lg:w-4/6 lg:w- lg:pr-10">{cartProducts}</div>
        <div className="pb-12 lg:w-2/6">
          <aside className="border-t border-solid border-black pt-4 lg:border-t-0 lg:border-x lg:p-6">
            <h2 className="font-medium text-xl pb-2">Order Summary</h2>
            <dl>
              <div className="flex justify-between text-lg font-normal">
                <dt>Items:</dt>
                <dd className="text-[15px]">{totalProducts}</dd>
              </div>
              <div className="flex justify-between text-lg font-normal">
                <dt>Shipping:</dt>
                <dd className="text-[15px]">$15</dd>
              </div>
              <div className="flex justify-between text-lg font-medium">
                <dt>Total:</dt>
                <dd className="text-[15px]">$ {cartCtx.total}</dd>
              </div>
            </dl>
            <button className="btn-bag-checkout">
              <CustomLink to={"/"}>Checkout</CustomLink>
            </button>
          </aside>
          <div className="mt-4 text-justify lg:p-4 lg:mt-0 lg:text-left lg:border border-solid border-black">
            <h1 className="font-medium text-[17px]">SHIPPING & RETURNS</h1>
            <p className="text-[15px] leading-snug my-3">
              Thank you for shopping at Concpt. All orders from Concpt are
              subject to our shipping policy, outlined below.
            </p>
            <p className="text-[15px] leading-snug my-3">
              If you have any questions about our shipping practices, please
              contact our dedicated support team at concpt@gmail.com. Where We
              Ship Concpt is pleased to provide domestic and international
              shipping options.
            </p>
            <p className="text-[15px] leading-snug my-3">
              An estimate of the time it takes to deliver your order will be
              provided on our website. Please remember that the time it takes to
              process your order is a separate estimate from the time it takes
              to ship and deliver your order.
            </p>
            <MaestroLogo className="mr-2" />
            <MastercardLogo className="mr-2" />
            <VisaLogo className="mr-2" />
            <AmexLogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
