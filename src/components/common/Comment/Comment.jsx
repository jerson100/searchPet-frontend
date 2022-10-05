import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Comment = () => {
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
        <Avatar
          alt="example"
          src="https://res.cloudinary.com/dgakkw9kj/image/upload/v1664890363/sPet/pets/vzuvv5ktatzldxdyennl.jpg"
        />
      </Grid>
      <Grid item container flexDirection={"column"}>
        <Grid item mb={1} container justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="body1" component="p">
              jerson100
            </Typography>
            <Typography variant="body2" component="p">
              13 h
            </Typography>
          </Grid>
          <Grid item>
            <MoreVertIcon cursor="pointer" />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            vero temporibus nam, fuga odit consectetur odio voluptas omnis quam,
            accusamus libero doloremque! Neque earum modi, tempora officia sit
            quibusdam quod.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comment;
