import { IconButton, Link } from "@mui/material";
import React from "react";
import { SocialListStyle } from "./socialList.style";

const SocialList = ({ children }) => {
  return <SocialListStyle>{children}</SocialListStyle>;
};

const Item = ({ icon, href }) => {
  return (
    <li>
      <IconButton size="large" target="_blank" LinkComponent={Link} href={href}>
        {icon}
      </IconButton>
    </li>
  );
};

SocialList.Item = Item;

export default SocialList;
