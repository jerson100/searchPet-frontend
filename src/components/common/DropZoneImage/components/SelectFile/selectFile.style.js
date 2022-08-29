import styled from "@mui/system/styled";

const SelectFileStyle = styled("div")`
  text-align: center;
  padding: 3rem 2rem;
  border: solid 1px rgba(0, 0, 0, 0.2);
  margin-bottom: ${({ theme: { spacing } }) => {
    return spacing(2);
  }};
`;

export { SelectFileStyle };
