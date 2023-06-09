import React from "react";
import classes from "./HomeProducts.module.css";
import Product from "./Product";
import { Link } from "react-router-dom";

const styles = {
  textDecoration: "none",
  color: "inherit",
};

const DUMMY_PRODUCTS = [
  {
    id: "s1",
    price: 300,
    name: "Jordan 1 Retro High",
    color: "Court Purple White",
    image: "/src/assets/Products_Dummies/jordan_purple.png",
  },
  {
    id: "s2",
    price: 130,
    name: "Nike Dunk Low Retro",
    color: "White Black Panda",
    image: "/src/assets/Products_Dummies/panda.png",
  },

  {
    id: "s3",
    price: 380,
    name: "Jordan 1 Retro High OG",
    color: "Chicago Lost and Found",
    image: "/src/assets/Products_Dummies/chicago.webp",
  },

  {
    id: "s4",
    price: 306,
    name: "Adidas Yeezy Boost 350",
    color: "Black Red",
    image: "/src/assets/Products_Dummies/yeezy_black.png",
  },

  {
    id: "s5",
    price: 465,
    name: "Adidas Yeezy Boost 700",
    color: "Wave Runner",
    image: "/src/assets/Products_Dummies/yeezy_700.png",
  },

  {
    id: "s6",
    price: 379.99,
    name: "Adidas  Yeezy Foam RNNR",
    color: "Desert Sand",
    image: "/src/assets/Products_Dummies/foam_runner.webp",
  },
];

const ContainerProduct = ({ children }) => {
  return <div className={classes["products-container"]}>{children}</div>;
};

const HomeProducts = () => {
  return (
    <section id="home-products">
      <h1 className={classes.title}>Our products</h1>

      <div className={classes.container}>
        <div className={classes.products}>
          {DUMMY_PRODUCTS.map((product) => (
            <Link to="products" style={styles} key={product.id}>
              <ContainerProduct key={product.id}>
                <Product
                  key={product.id}
                  image={product.image}
                  price={product.price}
                  name={product.name}
                  color={product.color}
                />
              </ContainerProduct>
            </Link>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
    </section>
  );
};

export default HomeProducts;
