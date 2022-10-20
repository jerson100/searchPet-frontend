import React from "react";
import { IconButton, Link, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SocialNeworkInformation = ({ socialNetWorks }) => {
  return (
    <Stack direction={"row"}>
      {socialNetWorks?.facebook && (
        <IconButton LinkComponent={Link} href={socialNetWorks.facebook}>
          <FacebookIcon />
        </IconButton>
      )}
      {socialNetWorks?.twitter && (
        <IconButton LinkComponent={Link} href={socialNetWorks.twitter}>
          <TwitterIcon />
        </IconButton>
      )}
      {socialNetWorks?.instagram && (
        <IconButton LinkComponent={Link} href={socialNetWorks.instagram}>
          <InstagramIcon />
        </IconButton>
      )}
      {socialNetWorks?.whatsapp && (
        <IconButton LinkComponent={Link} href={socialNetWorks.whatsapp}>
          <WhatsAppIcon />
        </IconButton>
      )}
    </Stack>
  );
};

export default SocialNeworkInformation;
