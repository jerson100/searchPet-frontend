import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import JeSection from "../../../components/common/JeSection/JeSection";
import Information from "./components/Information";
import Header from "./components/Header/Header";

const UserProfileView = () => {
  return (
    <>
      <Header />
      <Container>
        <Grid container mb={2} spacing={2}>
          <Grid item xs={12} md={4}>
            <Information />
          </Grid>
          <Grid item xs={12} md={8}>
            <JeSection
              backgroundColor={"background.paper"}
              variantPaper="outlined"
              sx={{
                minHeight: { xs: "200px", md: "250px" },
                padding: { xs: 2, md: 2 },
              }}
            >
              <Outlet />
            </JeSection>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default UserProfileView;
