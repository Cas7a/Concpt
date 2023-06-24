import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  ApplePayLogo,
  VisaLogo,
  PaypalLogo,
  MastercardLogo,
  MaestroLogo,
  AmexLogo,
  TiktokLogo,
  WhatsappLogo,
  FacebookLogo,
  TwitterLogo,
  IgLogo,
} from "../Home/Logos";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-content-top"]}>
        <div className={classes["top-menu"]}>
          <h1 className={classes["top-menu-title"]}>Politics</h1>
          <ul>
            <li>Terms of service</li>
            <li>Shipping</li>
            <li>Privacy policy</li>
          </ul>
          <span>
            <Link to="https://www.instagram.com/concptbrand/" target="_blank">
              <IgLogo />
            </Link>
            <Link to="https://twitter.com/" target="_blank">
              <TwitterLogo />
            </Link>
            <Link to="https://www.facebook.com/" target="_blank">
              <FacebookLogo />
            </Link>
            <Link to="https://www.whatsapp.com/" target="_blank">
              <WhatsappLogo />
            </Link>
            <Link to="https://www.tiktok.com/" target="_blank">
              <TiktokLogo />
            </Link>
          </span>
        </div>
      </div>
      <div className={classes["footer-content-bottom"]}>
        <small className={classes.brand}>
          © 2023,
          <span onClick={() => window.location.reload()}> Concpt</span>
        </small>
        <span className={classes.payments}>
          <AmexLogo />
          <MaestroLogo />
          <MastercardLogo />
          <VisaLogo />
          <PaypalLogo />
          <ApplePayLogo />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
