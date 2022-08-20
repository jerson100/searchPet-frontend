import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { SocialListStyle } from "./socialList.style";

const SocialList = ({ children }) => {
  return <SocialListStyle>{children}</SocialListStyle>;
};

const Item = ({ icon, to }) => {
  return (
    <li>
      <IconButton size="large" LinkComponent={Link} to={to}>
        {icon}
      </IconButton>
    </li>
  );
};

SocialList.Item = Item;

export default SocialList;
