import React from "react";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.container}>
      <div className={classes["about-us"]}>
        <img
          className={classes["about-us-image"]}
          src="https://cdn.shopify.com/s/files/1/0496/4325/8009/articles/virgil-abloh-et-les-sneakers-une-histoire-damour-et-de-succes-153708.jpg?v=1674752371"
          alt="About Us image"
        />
        <div className={classes.info}>
          <h1 className={classes["info-title"]}>"Concpt"</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi eu
            et maecenas quis luctus, turpis libero tempor orci pulvinar
            habitasse. Faucibus eros at et viverra massa tellus mi nulla eget
            tempus nibh, quis euismod curae ut arcu vivamus cursus mauris id
            parturient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
