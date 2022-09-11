import { Paper } from "@mui/material";
import styled from "@mui/system/styled";

const FilterContainerStyle = styled(Paper)`
  box-shadow: none;
  position: sticky;
  top: 81px;
  padding: ${({ theme }) => theme.spacing(2)};
  border: solid 1px ${({ theme }) => theme.palette.divider};
`;

export { FilterContainerStyle };
