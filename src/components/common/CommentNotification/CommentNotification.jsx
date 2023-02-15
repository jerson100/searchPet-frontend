import React, { forwardRef, useCallback } from "react";
import { useSnackbar, SnackbarContent } from "notistack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@mui/system";
import { Avatar, Grid, Link } from "@mui/material";

const CommentNotification = forwardRef((props, ref) => {
  const { closeSnackbar } = useSnackbar();

  const handleDismiss = useCallback(() => {
    closeSnackbar(props.id);
  }, [props.id, closeSnackbar]);

  const handleClick = () => {
    props.handleClickTo();
    handleDismiss();
  };

  return (
    <SnackbarContent
      ref={ref}
      //   sx={{
      //     "@media (min-width:600px)": {
      //       minWidth: "344px !important",
      //     },
      //   }}
    >
      <Card sx={{ backgroundColor: "#fddc6c", width: "100%" }}>
        <CardActions
          classes={{
            root: {
              padding: "8px 8px 8px 16px",
              justifyContent: "space-between",
            },
          }}
        >
          <Typography variant="body2" color={"#000"}>
            {props.message}
          </Typography>
          <Box marginLeft={"auto"}>
            <IconButton
              size="small"
              sx={{
                padding: "8px 8px",
                transform: "rotate(0deg)",
                color: "#000",
                transition: "all .2s",
              }}
              onClick={handleDismiss}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        </CardActions>
        <Box sx={{ pl: 1, pr: 1 }}>
          <CommentWrapper comment={props.comment} onClick={handleClick} />
        </Box>
      </Card>
    </SnackbarContent>
  );
});

const CommentWrapper = ({ comment, onClick }) => {
  return (
    <Paper
      variant="outlined"
      component={Box}
      //   variant={theme.palette.mode === "light" ? "outlined" : "elevation"}
      sx={{ mb: 1, backgroundColor: "rgb(243,239,239)", cursor: "pointer" }}
      onClick={onClick}
    >
      <Grid
        container
        flexWrap={"nowrap"}
        borderRadius="5px"
        p={1}
        sx={{ overflow: "hidden" }}
      >
        <Grid item pr={1}>
          <Link
          // component={LinkRouter} to={`/users/${comment.user._id}`}
          >
            <Avatar alt={comment.username} src={comment.urlImageProfile} />
          </Link>
        </Grid>
        <Grid
          item
          container
          flexDirection={"column"}
          sx={{ overflow: "hidden" }}
        >
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="body1" component="p">
                <Link
                  // component={LinkRouter}
                  // to={`/users/${comment.user._id}`}
                  underline="hover"
                  color="text.primary"
                >
                  {comment.username}
                </Link>
              </Typography>
              {/* <Typography component="span" variant="caption">
              {getTweetPublicationDate(new Date(createdAt))}
            </Typography> */}
            </Grid>
          </Grid>
          <Grid item sx={{ maxWidth: "100%" }}>
            <Typography variant="body2" sx={{ maxWidth: "350px" }}>
              {comment.description}
            </Typography>
          </Grid>
          {/* {comment.locations?.length > 0 && (
            <Grid item mt={2}>
              <ReferenceMap locations={comment.locations} />
            </Grid>
          )} */}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentNotification;
