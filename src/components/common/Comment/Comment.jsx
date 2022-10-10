import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getTweetPublicationDate } from "../../../utils/date";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transformOrigin: "center top",
    transition: {
      duration: 0.4,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Comment = ({
  user,
  _id,
  description,
  createdAt,
  animate,
  handleDelete,
}) => {
  const [laodingDeleteComment, setlaodingDeleteComment] = useState(false);

  const _handleDelete = async () => {
    if (!laodingDeleteComment) {
      setlaodingDeleteComment(true);
      await handleDelete(_id);
      setlaodingDeleteComment(false);
    }
  };

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
      component={motion.div}
      initial={"hidden"}
      animate={"show"}
      variants={animate && variants}
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
            <Typography component="span" variant="caption">
              {getTweetPublicationDate(new Date(createdAt))}
            </Typography>
          </Grid>
          {userAuth?.user._id === user._id && (
            <Grid item>
              <MoreVertIcon cursor="pointer" onClick={() => _handleDelete()} />
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

export default React.memo(Comment);
