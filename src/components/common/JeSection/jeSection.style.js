import { Typography } from "@mui/material";
import styled from "@mui/system/styled";

const TitleStyle = styled(Typography)`
  margin-bottom: 1rem,
    ${({ theme }) => {
      return {
        ...theme.typography.h5,
        marginBottom: "1rem",
        [theme.breakpoints.up("lg")]: {
          ...theme.typography.h4,
        },
      };
    }};
`;

export { TitleStyle };
