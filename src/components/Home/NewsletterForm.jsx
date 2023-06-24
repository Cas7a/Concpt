import React from "react";
import classes from "./NewsletterForm.module.css";

const handleForm = (e) => {
  e.preventDefault();
};

const NewsletterForm = () => {
  return (
    <div className={classes.newsletter}>
      <div className={classes["newsletter-container"]}>
        <h1 className={classes["form-title"]}>GET ACCESS TO EXCLUSIVE DROPS</h1>
        <form className={classes.form} action="submit">
          <div className={classes["content-form"]}>
            <input className={classes.input} type="email" placeholder="Email" />
            <button className={classes.button} onClick={handleForm}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
