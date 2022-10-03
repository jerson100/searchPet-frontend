import styled from "@mui/system/styled";
import { Avatar, Box } from "@mui/material";

const ContainerStyle = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: solid 1px ${({ theme: { palette } }) => palette.divider};
  cursor: pointer;
`;

const AvatarStyle = styled(Avatar)`
  border: solid 1px ${({ theme: { palette } }) => palette.divider};
`;

export { ContainerStyle, AvatarStyle };
