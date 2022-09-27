import React from "react";
import PropTypes from "prop-types";
import { Grid, Checkbox, Box } from "@mui/material";
import { ItemContainerStyle } from "./item.style";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Item = ({ selected, children, handleClick, value }) => {
  return (
    <ItemContainerStyle
      selected={selected}
      onClick={() => handleClick(value, selected)}
    >
      <Grid container alignItems="center">
        <Grid item flexGrow={1}>
          <Box>{children}</Box>
        </Grid>
        <Grid item>
          <Checkbox {...label} checked={selected} />
        </Grid>
      </Grid>
    </ItemContainerStyle>
  );
};

Item.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleClick: PropTypes.func,
};

export default Item;
