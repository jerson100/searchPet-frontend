import { Paper } from "@mui/material";
import styled from "@mui/system/styled";

const PetListContainerStyle = styled(Paper)`
  box-shadow: none;
  padding: 2;
  min-height: 200px;
  padding: ${({ theme }) => theme.spacing(2)};
  border: solid 1px ${({ theme: { palette } }) => palette.divider};
`;

export { PetListContainerStyle };
