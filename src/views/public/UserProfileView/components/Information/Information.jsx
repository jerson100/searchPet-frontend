import React, { useMemo } from "react";
import { Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import JeSection from "../../../../../components/common/JeSection";
import LocationInformation from "../LocationInformation";
import InformationRow from "../InformationRow";
import SocialNetworkInformation from "../SocialNetworkInformation";

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
  socialNetWorks,
  location,
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
            <InformationRow description="Username:">
              <Typography
                paragraph
                mb={0}
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {username}
              </Typography>
            </InformationRow>
            <InformationRow description="Desde:">
              <Typography
                paragraph
                mb={0}
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {formatedDate}
              </Typography>
            </InformationRow>
            <InformationRow description="Social:">
              <SocialNetworkInformation socialNetWorks={socialNetWorks} />
            </InformationRow>
            <LocationInformation location={location} />
          </JeSection.Content>
        </>
      )}
    </JeSection>
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
