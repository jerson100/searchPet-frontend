import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MobileNavigation from "../MobileNavigation";
import DesktopNavigation from "../DesktopNavigation";
import Banner from "../Banner";

const Header = () => {
  const {
    breakpoints: { down },
  } = useTheme();
  const isMobile = useMediaQuery(down("sm"));
  return (
    <>
      <Banner />
      <Box bgcolor="background.paper" sx={{ zIndex: "1" }} mb={2}>
        <Container>
          <Box
            sx={{
              height: { xs: "100px", md: "150px" },
              marginTop: { xs: "-50px", md: "-75px" },
            }}
          >
            <Grid container flexWrap="nowrap">
              <Grid item>
                <Avatar
                  sx={{
                    width: { xs: "100px", md: "150px" },
                    height: { xs: "100px", md: "150px" },
                    boxSizing: "border-box",
                    marginTop: "-16px",
                  }}
                  src="https://res.cloudinary.com/dgakkw9kj/image/upload/v1665058102/sPet/users/profiles/develop_02_xp5fpx.jpg"
                  alt="user"
                />
              </Grid>
              <Grid item flexBasis={0} flexGrow={1} overflow="hidden">
                <Typography
                  variant={"h5"}
                  component="h1"
                  color="white"
                  pl={2}
                  pr={2}
                  sx={{
                    lineHeight: { xs: "50px", md: "75px" },
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Jerson Omar Ramírez Ortiz
                </Typography>
                {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
