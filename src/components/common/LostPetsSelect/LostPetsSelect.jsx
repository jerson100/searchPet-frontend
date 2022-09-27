import { Avatar, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import JeGroupSelection from "../JeGroupSelection";

const LostPetsSelect = () => {
  const [pets, setpets] = useState([]);
  return (
    <JeGroupSelection
      multiple
      direction={"column"}
      value={pets}
      onChange={setpets}
    >
      <JeGroupSelection.Item value={1}>
        <LostPetItem name="jerson" urlImageProfile={""} />
      </JeGroupSelection.Item>
      <JeGroupSelection.Item value={2}>
        <LostPetItem name="jerson" urlImageProfile={""} />
      </JeGroupSelection.Item>
      <JeGroupSelection.Item value={3}>
        <LostPetItem name="jerson" urlImageProfile={""} />
      </JeGroupSelection.Item>
      <JeGroupSelection.Item value={4}>
        <LostPetItem name="jerson" urlImageProfile={""} />
      </JeGroupSelection.Item>
      <JeGroupSelection.Item value={5}>
        <LostPetItem name="jerson" urlImageProfile={""} />
      </JeGroupSelection.Item>
    </JeGroupSelection>
  );
};

const LostPetItem = React.memo(({ name, urlImageProfile }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Avatar src={urlImageProfile} title={name} />
      </Grid>
      <Grid item flexGrow={1}>
        Nombre de la mascota
      </Grid>
    </Grid>
  );
});

export default LostPetsSelect;
