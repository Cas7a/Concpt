import React from "react";
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
    <footer className="bg-[#1e1e1e] text-white mt-[-120px] sticky pt-10 pb-10">
      <div className="pb-10">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-medium mb-6">Politics</h1>
          <ul className="flex text-gray-300 mb-8 ">
            <li className="hover:text-white cursor-pointer mr-5">
              Terms of service
            </li>
            <li className="hover:text-white cursor-pointer  mr-5">Shipping</li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
          </ul>
          <span>
            <Link
              className="transition duration-500 mr-3 hover:fill-white"
              to="https://www.instagram.com/concptbrand/"
              target="_blank"
            >
              <IgLogo />
            </Link>
            <Link
              className="transition duration-500 mr-3 hover:fill-white"
              to="https://twitter.com/"
              target="_blank"
            >
              <TwitterLogo />
            </Link>
            <Link
              className="transition duration-500 mr-3 hover:fill-white"
              to="https://www.facebook.com/"
              target="_blank"
            >
              <FacebookLogo />
            </Link>
            <Link
              className="transition duration-500 mr-3 hover:fill-white"
              to="https://www.whatsapp.com/"
              target="_blank"
            >
              <WhatsappLogo />
            </Link>
            <Link
              className="transition duration-500 hover:fill-white"
              to="https://www.tiktok.com/"
              target="_blank"
            >
              <TiktokLogo />
            </Link>
          </span>
        </div>
      </div>
      <div className="flex flex-col-reverse border-t border-solid border-[#2e2e2e] text-center pt-10 md:block">
        <small className="text-[14px] text-[#8e8e8e] mt-9 md:pr-28">
          © 2023,
          <span
            className="transition duration-300 hover:text-white cursor-pointer"
            onClick={() => window.location.reload()}
          >
            {" "}
            Concpt
          </span>
        </small>
        <span className="align-middle">
          <AmexLogo className="mr-1" />
          <MaestroLogo className="mr-1" />
          <MastercardLogo className="mr-1" />
          <VisaLogo className="mr-1" />
          <PaypalLogo className="mr-1" />
          <ApplePayLogo />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
