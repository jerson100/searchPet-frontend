import { Paper } from "@mui/material";
import styled from "@mui/system/styled";

const ChatItemContainerStyle = styled(Paper)`
  cursor: pointer;
  padding: 0.5rem 1rem;
  box-shadow: none;
  background-color: ${(props) => {
    return !props.isSeen ? "#1565c033" : null;
  }};

  &:hover {
    background-color: ${(props) => {
      return !props.isSeen ? "#1565c047" : "#0000001c";
    }};
  }
`;

export { ChatItemContainerStyle };
