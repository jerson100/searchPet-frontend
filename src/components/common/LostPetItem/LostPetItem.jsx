import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import {
  Box,
  Grid,
  Link,
  Paper,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import PetsList from "./components/PetsList";
import LostPetItemHeader from "./components/LostPetItemHeader";
import { ContainerStyle } from "./lostPetItem.style";
import ImageGrid from "../ImageGrid";

const LostPetItem = ({
  createdAt,
  description,
  images,
  pets,
  located,
  user,
  _id,
  loading,
  isToPublication = true,
  location,
}) => {
  const theme = useTheme();
  if (loading) return <LostPetItemLoading />;
  return (
    <Paper
      variant={theme.palette.mode === "light" ? "outlined" : "elevation"}
      component={Box}
      id={
        location &&
        `${location.coordinates[1]},${location.coordinates[0]}`.replace(
          /[,\.+-]/gi,
          ""
        )
      }
    >
      <Box p={2}>
        <LostPetItemHeader user={user} createdAt={createdAt} />
        <Typography paragraph>{description}</Typography>
        <PetsList pets={pets} />
      </Box>

      {images?.length ? (
        <Box
          sx={{
            marginLeft: { /*xs: "-1px",*/ sm: "0" },
            marginRight: { /*xs: "-1px", */ sm: "0" },
            height: { xs: "300px", sm: "400px" },
          }}
        >
          <ImageGrid images={images} />{" "}
        </Box>
      ) : null}
      {isToPublication && (
        <Grid container p={2} justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Link
              variant="link"
              underline="hover"
              component={LinkRouter}
              color="text.secondary"
              to={`/pets/lost/${_id}`}
            >
              Ir a la publicación
            </Link>
          </Grid>
          {/* <Grid item>
          <Link
            underline="hover"
            component={LinkRouter}
            to={`/pets/lost/${_id}#comments`}
            color="text.secondary"
          >
            698 comentarios
          </Link>
        </Grid> */}
        </Grid>
      )}
    </Paper>
  );
};

const LostPetItemLoading = () => {
  return (
    <>
      <ContainerStyle>
        <Box p={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Skeleton variant="circular" width="40px" height="40px" />
            </Grid>
            <Grid item flex="1 1 0" container direction="column">
              <Grid item>
                <Skeleton variant="text" width="80px" height="20px" />
              </Grid>
              <Grid item>
                <Skeleton variant="text" width="40px" height="20px" />
              </Grid>
            </Grid>
          </Grid>
          <Skeleton variant="text" width="100%" height="60px" />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Skeleton variant="rectangular" width="50px" height="20px" />
            <Skeleton variant="rectangular" width="50px" height="20px" />
          </Box>
        </Box>
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{ height: { xs: "300px", md: "400px" } }}
        />
        <Grid container p={2} justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Skeleton variant="text" width="80px" height="20px" />
          </Grid>
        </Grid>
      </ContainerStyle>
    </>
  );
};

export default React.memo(LostPetItem);
