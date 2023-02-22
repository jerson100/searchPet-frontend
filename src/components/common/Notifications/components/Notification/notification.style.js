import { Box } from "@mui/system";
import styled from "@mui/system/styled";

const NotificationContainerStyle = styled(Box)`
  cursor: pointer;
  position: relative;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  transition: background-color 0.2s ease;
  background-color: ${(props) => {
    return !props.isSeen ? "#1565c033" : null;
  }};

  &:hover {
    background-color: ${(props) => {
      return !props.isSeen ? "#1565c047" : "#0000001c";
    }};
  }
`;

export { NotificationContainerStyle };
