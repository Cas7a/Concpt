import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="pt-3 pb-3 w-full no-underline text-current inline-block futura"
    >
      {children}
    </Link>
  );
};

export default CustomLink;
