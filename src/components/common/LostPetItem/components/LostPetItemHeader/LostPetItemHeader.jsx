import React, { useMemo } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Grid, Link, Typography } from "@mui/material";
import { AvatarStyle } from "../../lostPetItem.style";
import { getTweetPublicationDate } from "../../../../../utils/date";

const LostPetItemHeader = ({ user, createdAt }) => {
  const date = useMemo(() => {
    return getTweetPublicationDate(new Date(createdAt));
  }, [createdAt]);
  return (
    <Grid container spacing={2} alignItems="center" mb={2}>
      <Grid item>
        <Link component={LinkRouter} underline="none" to={`/users/${user._id}`}>
          <AvatarStyle src={user.urlImageProfile} alt={user.name} />
        </Link>
      </Grid>
      <Grid item flex="1 1 0" container direction="column">
        <Grid item>
          <Typography variant="body1" component="p">
            <Link
              component={LinkRouter}
              to={`/users/${user._id}`}
              underline="hover"
              color="inherit"
            >
              {user.username}
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="caption">
            {date}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LostPetItemHeader;
