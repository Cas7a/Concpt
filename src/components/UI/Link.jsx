import React from "react";
import { Link } from "react-router-dom";

const styles = {
  textDecoration: "none",
  color: "inherit",
  display: "inline-block",
  fontFamily: "inherit",
};

const CustomLink = ({ to, children }) => {
  return (
    <Link to={to} style={styles}>
      {children}
    </Link>
  );
};

export default CustomLink;
