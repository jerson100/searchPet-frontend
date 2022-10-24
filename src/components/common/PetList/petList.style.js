import { Paper } from "@mui/material";
import styled from "@mui/system/styled";

const PetListContainerStyle = styled(Paper)`
  box-shadow: none;
  min-height: 200px;
  padding: ${({ theme }) => theme.spacing(2)};
  ${({ bordered, theme: { palette } }) =>
    bordered === "true" &&
    `
    border: solid 1px ${palette.divider};
  `}
`;

export { PetListContainerStyle };
