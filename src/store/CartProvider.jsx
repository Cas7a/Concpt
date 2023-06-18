import React from "react";
import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  products: [],
  total: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotal =
      state.total + action.product.price * action.product.amount;
    const productSize = action.product.size;
    const existingCartProductIndex = state.products.findIndex(
      (product) =>
        product._id === action.product._id && product.size === productSize
    );

    const existingCartProduct = state.products[existingCartProductIndex];

    let updatedProducts;

    if (existingCartProduct) {
      const updatedProduct = {
        ...existingCartProduct,
        amount: action.product.amount + existingCartProduct.amount,
        size: productSize,
      };
      updatedProducts = [...state.products];
      updatedProducts[existingCartProductIndex] = updatedProduct;
    } else {
      updatedProducts = state.products.concat(action.product);
    }

    return {
      products: updatedProducts,
      total: updatedTotal,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartProductIndex = state.product.findIndex(
      (product) => product._id === action.product._id
    );

    const existingCartProduct = state.products[existingCartProductIndex];
    const updatedTotal = state.total - existingCartProduct.price;
    let updatedProducts;

    if (existingCartProduct.amount === 1) {
      updatedProducts = state.products.filter(
        (product) => product._id !== action._id
      );
    } else {
      const updatedProduct = {
        ...existingCartProduct,
        amount: existingCartProduct.amount - 1,
      };

      updatedProducts = [...state.products];
      updatedProducts[existingCartProductIndex] = updatedProduct;
    }

    return {
      products: updatedProducts,
      total: updatedTotal,
    };
  }

  //   if (action.type === "CLEAR") {
  //     return defaultCartState;
  //   }

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addProductToCartHandler = (product) => {
    dispatchCartAction({ type: "ADD", product });
  };

  const removeProductFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  //   const clearCartHandler = () => {
  //     dispatchCartAction({ type: "CLEAR" });
  //   };

  const cartContext = {
    products: cartState.products,
    total: cartState.total,
    addProduct: addProductToCartHandler,
    removeProduct: removeProductFromCartHandler,
    // clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
