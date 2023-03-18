import { Paper } from "@mui/material";
import styled from "@mui/system/styled";
import { amber } from "@mui/material/colors";

const ChatItemContainerStyle = styled(Paper)`
  cursor: pointer;
  padding: 0.5rem 1rem;
  box-shadow: none;
  transition: background-color 0.3s ease;
  background-color: ${(props) => {
    // console.log(props);
    return props.isselected === "true"
      ? amber[300]
      : !props.isSeen
      ? "#1565c033"
      : null;
  }};

  &:hover {
    background-color: ${(props) => {
      return props.isselected === "true"
        ? amber[500]
        : !props.isSeen
        ? "#1565c047"
        : "#0000001c";
    }};
  }
`;

export { ChatItemContainerStyle };
