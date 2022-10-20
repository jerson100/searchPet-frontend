import React from "react";
import { Grid, Typography } from "@mui/material";

const InformationRow = ({ description, children }) => {
  return (
    <Grid container mb={1}>
      <Grid item xs={4}>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        {children}
      </Grid>
    </Grid>
  );
};

export default InformationRow;
