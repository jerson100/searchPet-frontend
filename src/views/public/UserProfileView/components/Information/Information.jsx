import React from "react";
import JeSection from "../../../../../components/common/JeSection";

const Information = () => {
  return (
    <JeSection
      backgroundColor={"background.paper"}
      variantPaper="outlined"
      sx={{ padding: { xs: 2, md: 2 } }}
    >
      <JeSection.Title textAlign="left" variant="h5">
        Información
      </JeSection.Title>
      <JeSection.Content>
        <p>lorem</p>
        <p>lorem</p>
        <p>lorem</p>
      </JeSection.Content>
    </JeSection>
  );
};

export default Information;
