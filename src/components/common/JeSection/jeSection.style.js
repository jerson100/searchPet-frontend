import { Typography } from "@mui/material";
import styled from "@mui/system/styled";

const TitleStyle = styled(Typography)`
  text-align: center;
  ${({ theme }) => {
    return {
      ...theme.typography.h5,
      marginBottom: "3rem",
      [theme.breakpoints.up("md")]: {
        ...theme.typography.h4,
        marginBottom: "4rem",
      },
      [theme.breakpoints.up("lg")]: {
        ...theme.typography.h3,
        marginBottom: "5rem",
      },
    };
  }};
`;

export { TitleStyle };
