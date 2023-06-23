import React, { useState, useContext } from "react";
import classes from "./ProductShowcase.module.css";
import { useParams } from "react-router-dom";
import CartContext from "../../store/CartContext";
import ErrorPage from "../../Pages/ErrorPage";
import { ProductsContext } from "../../store/ProductContext";

const SIZES = ["XS", "S", "M", "L", "XL"];

// Logic for changing size button style when active
const SizesButton = ({ size, activeSize, setActiveSize }) => {
  const handleClick = () => {
    setActiveSize(size);
  };

  const buttonIsActive =
    activeSize === size
      ? `${classes.swatch} ${classes.clicked}`
      : `${classes.swatch}`;

  return (
    <div className={buttonIsActive} onClick={handleClick}>
      <span>{size}</span>
    </div>
  );
};

const ProductShowcase = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [showSizeError, setShowSizeError] = useState(false);

  const productsData = useContext(ProductsContext);

  const cartCtx = useContext(CartContext);
  const { productId } = useParams();

  const addToCartHandler = () => {
    if (activeSize) {
      setShowSizeError(false);
      cartCtx.addProduct({
        _id: productFiltered._id,
        name: formattedName,
        price: productFiltered.price,
        color: productFiltered.color,
        description: productFiltered.description,
        amount: 1,
        size: activeSize,
        image: productFiltered.image,
      });
    } else {
      setShowSizeError(true);
    }
  };
  if (!productsData) return null;

  const productFiltered = productsData.find(
    (product) => product.name == productId
  );

  const formattedName = productFiltered.name.replace(/-/g, " ");

  return (
    <>
      <div className={classes["product-container"]}>
        <div className={classes["product-left"]}>
          <img
            src={productFiltered.image}
            alt="Product"
            className={classes["product-img"]}
          />
        </div>
        <div className={classes["product-right"]}>
          <h1 className={classes.title}>{formattedName}</h1>
          <span className={classes.color}>{productFiltered.color}</span>
          <div className={classes.price}>${productFiltered.price}</div>

          <fieldset className={classes.form}>
            <legend>Size</legend>
            <div className={classes.sizes}>
              {SIZES.map((size) => (
                <SizesButton
                  key={size}
                  size={size}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
              ))}
            </div>
          </fieldset>
          {showSizeError && (
            <p style={{ color: "red" }}>Please, select a size</p>
          )}
          <button className={classes.button} onClick={addToCartHandler}>
            <span>Add to cart</span>
          </button>
          <p className={classes.description}>{productFiltered.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;
