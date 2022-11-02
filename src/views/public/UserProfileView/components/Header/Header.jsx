import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import MobileNavigation from "../MobileNavigation";
import DesktopNavigation from "../DesktopNavigation";
import Banner from "../Banner";

const Header = ({ loadingGetUser, name, urlImageProfile, typeUser }) => {
  const {
    breakpoints: { down },
  } = useTheme();
  const isMobile = useMediaQuery(down("sm"));
  return (
    <>
      <Banner loadingGetUser={loadingGetUser} />
      <Box
        bgcolor="background.paper"
        borderBottom={(theme) => `solid 1px ${theme.palette.divider}`}
        mb={3}
      >
        <Container>
          <Box
            sx={{
              height: { xs: "100px", md: "150px" },
              marginTop: { xs: "-50px", md: "-75px" },
            }}
          >
            <Grid container flexWrap="nowrap">
              <Grid item sx={{ position: "relative" }}>
                <ImageProfile
                  loadingGetUser={loadingGetUser}
                  name={name}
                  urlImageProfile={urlImageProfile}
                />
                {!loadingGetUser && typeUser === "administrator" && (
                  <SecurityIcon
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      fill: "white",
                    }}
                  />
                )}
              </Grid>
              <Grid item flexBasis={0} flexGrow={1} overflow="hidden">
                <Box
                  sx={{ height: { xs: "50px", md: "75px" } }}
                  pl={2}
                  pr={2}
                  display="flex"
                  alignItems="center"
                >
                  {loadingGetUser ? (
                    <>
                      <Skeleton height="30px" width="180px" />
                    </>
                  ) : (
                    <Typography
                      variant={"h5"}
                      component="h1"
                      color="white"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        zIndex: "1",
                      }}
                    >
                      {name}
                    </Typography>
                  )}
                </Box>
                {loadingGetUser ? (
                  <LoadingNavigation />
                ) : isMobile ? (
                  <MobileNavigation />
                ) : (
                  <DesktopNavigation />
                )}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

const LoadingNavigation = () => {
  return (
    <Stack
      marginLeft="1rem"
      direction={"row"}
      sx={{ height: { xs: "50px", md: "75px" } }}
      alignItems="center"
    >
      <Skeleton
        height="20px"
        width="20px"
        variant="circular"
        sx={{ flexShrink: 0 }}
      />
      <Skeleton height="30px" width="100px" sx={{ marginLeft: ".5rem" }} />
      <Skeleton
        height="20px"
        width="20px"
        variant="circular"
        sx={{ marginLeft: "1rem", flexShrink: 0 }}
      />
      <Skeleton height="30px" width="80px" sx={{ marginLeft: ".5rem" }} />
      <Skeleton
        height="20px"
        width="20px"
        variant="circular"
        sx={{ marginLeft: "1rem", flexShrink: 0 }}
      />
      <Skeleton height="30px" width="100px" sx={{ marginLeft: ".5rem" }} />
    </Stack>
  );
};

const ImageProfile = ({ loadingGetUser, name, urlImageProfile }) => {
  return (
    <>
      {loadingGetUser ? (
        <Skeleton
          variant="circular"
          sx={{
            width: { xs: "100px", md: "150px" },
            height: { xs: "100px", md: "150px" },
            boxSizing: "border-box",
            marginTop: "-16px",
          }}
        />
      ) : (
        <Avatar
          sx={{
            width: { xs: "100px", md: "150px" },
            height: { xs: "100px", md: "150px" },
            boxSizing: "border-box",
            marginTop: "-16px",
          }}
          src={urlImageProfile}
          alt={name}
        />
      )}
    </>
  );
};

export default Header;
