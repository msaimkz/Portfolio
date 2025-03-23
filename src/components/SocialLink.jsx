import React from "react";
import { Link } from "react-router-dom";

const SocialLink = ({ link, children }) => {
  return (
    <Link to={link} target="_blank">
      {children}
    </Link>
  );
};

export default SocialLink;
