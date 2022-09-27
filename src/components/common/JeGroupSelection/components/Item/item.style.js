import { palette } from "@mui/system";
import styled from "@mui/system/styled";

const ItemContainerStyle = styled("div")`
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 5px;
  border: solid 1px
    ${({ selected, theme }) => (selected ? "blue" : theme.palette.divider)};
  margin-bottom: ${({ theme: { spacing } }) => spacing(2)};
  cursor: pointer;
  background-color: ${({ theme: { palette } }) => palette.background.paper};
`;

export { ItemContainerStyle };
