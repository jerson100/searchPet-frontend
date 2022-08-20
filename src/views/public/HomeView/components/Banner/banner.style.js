import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const BannerSvgPetsStyle = styled("svg")`
  width: 260px;
  height: 260px;
  ${({
    theme: {
      breakpoints: { up },
    },
  }) => ({
    [up("lg")]: {
      width: "400px",
      height: "400px",
    },
  })}
  .clr {
    fill: ${({ theme: { palette } }) => {
      return palette.primary.main;
    }};
  }
`;

const BannerLogoTittleStyle = styled("span")`
  color: ${({ theme: { palette } }) => {
    return palette.primary.main;
  }};
`;

const BannerTittleStyle = styled(Typography)`
  margin-bottom: 1rem;
  ${({ theme }) => {
    const {
      breakpoints,
      typography: { h2, h3, h4 },
    } = theme;
    return {
      fontSize: `${h4.fontSize}`,
      fontWeight: "bold",
      [breakpoints.up("md")]: {
        fontSize: `${h3.fontSize}`,
      },
      [breakpoints.up("lg")]: {
        fontSize: `${h2.fontSize}`,
      },
    };
  }}
`;

const BannerTextStyle = styled(Typography)`
  margin-bottom: 1em;
`;

const BannerContainerStyle = styled(Box)`
  min-height: calc(100vh - 57px);
  display: flex;
  align-items: center;
  background-color: ${({
    theme: {
      palette: {
        background: { paper },
      },
    },
  }) => {
    return paper;
  }};
  ${({
    theme: {
      breakpoints: { up },
    },
  }) => ({
    [up("sm")]: {
      minHeight: "initial",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
    [up("md")]: {
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
  })}
`;

export {
  BannerTittleStyle,
  BannerTextStyle,
  BannerSvgPetsStyle,
  BannerContainerStyle,
  BannerLogoTittleStyle,
};
