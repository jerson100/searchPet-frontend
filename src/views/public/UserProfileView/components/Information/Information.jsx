import { Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useMemo } from "react";
import JeSection from "../../../../../components/common/JeSection";

const Information = ({
  loadingGetUser,
  birthday,
  createdAt,
  email,
  maternalSurname,
  name,
  paternalSurname,
  typeUser,
  updatedAt,
  username,
}) => {
  const formatedDate = useMemo(() => {
    if (!createdAt) return;
    const [, month, day, year] = new Date(createdAt)
      .toDateString()
      .match(/[a-z]+ ([a-z]+) (\d{1,2}) (\d+)/i);
    return `${day} de ${month} del ${year}`;
  }, [createdAt]);

  return (
    <JeSection
      backgroundColor={"background.paper"}
      variantPaper="outlined"
      sx={{ padding: { xs: 2, md: 2 } }}
    >
      {loadingGetUser ? (
        <>
          <Skeleton width="150px" height="30px" sx={{ mb: 1 }} />
          <GridAnimation width="150px" />
          <GridAnimation />
          <GridAnimation width="40px" />
          <GridAnimation width="120px" />
          <GridAnimation />
        </>
      ) : (
        <>
          <JeSection.Title textAlign="left" variant="h5">
            Información
          </JeSection.Title>
          <JeSection.Content>
            <InformationRow description="Username:" value={username} />
            <InformationRow description="Desde:" value={formatedDate} />
          </JeSection.Content>
        </>
      )}
    </JeSection>
  );
};

const InformationRow = ({ description, value }) => {
  return (
    <Grid container mb={1}>
      <Grid item xs={4}>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography paragraph mb={0}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};

const GridAnimation = ({ width = "100px" }) => {
  return (
    <Box display="flex" columnGap={1} mb={1} alignItems="center">
      <Skeleton width="20px" height="20px" variant="circular" />
      <Skeleton width={width} height="20px" />
    </Box>
  );
};

export default Information;
