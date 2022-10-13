import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PetsIcon from "@mui/icons-material/Pets";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import JeSection from "../../../components/common/JeSection/JeSection";

const UserProfileView = () => {
  const {
    breakpoints: { down },
  } = useTheme();
  const isMobile = useMediaQuery(down("sm"));
  return (
    <>
      <Box
        sx={{
          height: {
            xs: "200px",
            md: "400px",
            position: "relative",
            filter: "brightness(0.6)",
          },
        }}
      >
        <Box
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
          }}
          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F07%2F20%2Fboy-adopted-dog-618635408-2000.jpg"
          alt="my background"
        />
      </Box>
      <Box bgcolor="background.paper" sx={{ zIndex: "1" }} mb={2}>
        <Container>
          <Box
            sx={{
              height: {
                xs: "100px",
                md: "150px",
              },
              marginTop: {
                xs: "-50px",
                md: "-75px",
              },
            }}
          >
            <Grid container flexWrap="nowrap">
              <Grid item>
                <Avatar
                  sx={{
                    width: {
                      xs: "100px",
                      md: "150px",
                    },
                    height: {
                      xs: "100px",
                      md: "150px",
                    },
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
                {isMobile ? (
                  <TooogleMobileMenu />
                ) : (
                  <Stack
                    direction="row"
                    divider={
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginLeft: "0 !important" }}
                      />
                    }
                    spacing={2}
                    sx={{ height: { xs: "50px", md: "75px" } }}
                  >
                    <MenuItem sx={{ marginLeft: "0 !important" }}>
                      <ListItemIcon>
                        <AutoGraphIcon fontSize="small" />
                      </ListItemIcon>
                      Actividad
                    </MenuItem>
                    <MenuItem sx={{ marginLeft: "0 !important" }}>
                      <ListItemIcon>
                        <PetsIcon fontSize="small" />
                      </ListItemIcon>{" "}
                      Mascotas
                    </MenuItem>
                    <MenuItem sx={{ marginLeft: "0 !important" }}>
                      <ListItemIcon>
                        <ManageSearchIcon fontSize="small" />
                      </ListItemIcon>{" "}
                      Mascotas Perdidas
                    </MenuItem>
                  </Stack>
                )}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container mb={2}>
          <Grid item xs={12} md={4}>
            <JeSection
              backgroundColor={"background.paper"}
              variantPaper="outlined"
              sx={{ padding: { xs: 2, md: 2 } }}
            >
              <JeSection.Title textAlign="left" variant="h5">
                Información
              </JeSection.Title>
              <JeSection.Content>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
              </JeSection.Content>
            </JeSection>
          </Grid>
          <Grid item xs={12} md={8}></Grid>
        </Grid>
      </Container>
    </>
  );
};

const TooogleMobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          textAlign: "center",
          height: { xs: "50px", md: "75px" },
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <AutoGraphIcon fontSize="small" />
          </ListItemIcon>
          Actividad
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PetsIcon fontSize="small" />
          </ListItemIcon>{" "}
          Mascotas
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ManageSearchIcon fontSize="small" />
          </ListItemIcon>{" "}
          Mascotas Perdidas
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserProfileView;
