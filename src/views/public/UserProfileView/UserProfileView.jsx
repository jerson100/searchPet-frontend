import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Container, Grid, Skeleton } from "@mui/material";
import JeSection from "../../../components/common/JeSection";
import Information from "./components/Information";
import Header from "./components/Header/Header";
import useAxios from "axios-hooks";
import ErrorPage from "../../../components/common/ErrorPage";

const UserProfileView = () => {
  const { idUser } = useParams();
  const [{ loading: loadingGetUser, data: us, error }] = useAxios({
    url: `users/${idUser}`,
  });
  if (error?.status === 400 || error?.status === 404)
    return (
      <ErrorPage
        msg="!Ups, el usuario no existe!"
        status={404}
        to="/"
        buttonText="Ir al inicio"
      />
    );

  if (error?.status >= 500) {
    return (
      <ErrorPage
        msg="Ocurrió un error inesperado, vuelva a intentarlo más tarde o póngase en contacto con algún administrador"
        status={500}
        to="/"
        buttonText="Ir al inicio"
      />
    );
  }

  return (
    <>
      <Header
        loadingGetUser={loadingGetUser}
        urlImageProfile={us?.urlImageProfile}
        name={`${us?.name} ${us?.paternalSurname} ${us?.maternalSurname}`}
      />
      <Container>
        <Grid container mb={2} spacing={2}>
          <Grid item xs={12} md={4}>
            <Information
              loadingGetUser={loadingGetUser}
              birthday={us?.birthday}
              createdAt={us?.createdAt}
              email={us?.email}
              maternalSurname={us?.maternalSurname}
              name={us?.name}
              paternalSurname={us?.paternalSurname}
              typeUser={us?.typeUser}
              updatedAt={us?.updatedAt}
              urlImageProfile={us?.urlImageProfile}
              username={us?.username}
            />
          </Grid>
          {!loadingGetUser && (
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
          )}
        </Grid>
      </Container>
    </>
  );
};

export default UserProfileView;
