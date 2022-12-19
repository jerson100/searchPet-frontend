import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import LocationModal from "../LocationModal/LocationModal";
import Location from "../../../../../components/common/Location";

const SelectLocation = ({ location, setlocation }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {isDesktop ? (
        <>
          <Grid item xs={12} md={8} lg={9}>
            <Location location={location} setlocation={setlocation} />
          </Grid>
        </>
      ) : (
        <LocationModal location={location} setlocation={setlocation} />
      )}
    </>
  );
};

export default SelectLocation;
