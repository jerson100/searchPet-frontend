import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getTweetPublicationDate } from "../../../utils/date";
import { useAuthContext } from "../../../hooks/useAuthContext";

const Comment = ({ user, description, createdAt }) => {
  const { user: userAuth } = useAuthContext();
  return (
    <Grid
      border="solid 1px"
      borderColor="divider"
      container
      p={2}
      flexWrap={"nowrap"}
      mb={2}
      borderRadius="5px"
      sx={{ backgroundColor: "rgb(243, 242, 239)" }}
    >
      <Grid item pr={2}>
        <Avatar alt={user.username} src={user.urlImageProfile} />
      </Grid>
      <Grid item container flexDirection={"column"}>
        <Grid item mb={1} container justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="body1" component="p">
              {user.username}
            </Typography>
            <Typography variant="body2" component="p">
              {getTweetPublicationDate(new Date(createdAt))}
            </Typography>
          </Grid>
          {userAuth?.user._id === user._id && (
            <Grid item>
              <MoreVertIcon cursor="pointer" />
            </Grid>
          )}
        </Grid>
        <Grid item>
          <Typography variant="body2">{description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comment;
