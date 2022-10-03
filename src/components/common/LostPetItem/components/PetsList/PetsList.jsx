import React from "react";
import { Link } from "react-router-dom";
import { Avatar, ButtonBase, Chip, Stack } from "@mui/material";

const PetsList = ({ pets }) => {
  return (
    <Stack direction="row" spacing={1}>
      {pets?.map((p) => {
        return (
          <ButtonBase
            key={p._id}
            LinkComponent={Link}
            to="/"
            sx={{ padding: 0 }}
          >
            <Chip
              label={p.name}
              variant="outlined"
              color="primary"
              size="medium"
              sx={{ cursor: "pointer", marginRight: ".5rem" }}
              avatar={<Avatar alt={p.name} src={p.urlImageProfile} />}
            />
          </ButtonBase>
        );
      })}
    </Stack>
  );
};

export default PetsList;
