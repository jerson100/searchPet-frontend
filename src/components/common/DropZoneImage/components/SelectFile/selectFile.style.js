import styled from "@mui/system/styled";

const SelectFileStyle = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 2rem;
  height: 100px;
  border: dashed 1px
    ${({
      theme: {
        palette: { divider },
      },
    }) => divider};
  cursor: pointer;
  background-color: ${({ theme }) => {
    return theme.palette.background.paper;
  }};
  margin-bottom: ${({ theme: { spacing } }) => {
    return spacing(2);
  }};
  &:hover {
    border-color: ${({ theme }) => {
      return theme.palette.primary.main;
    }};
  }
  &:focus {
    outline: dashed 1px
      ${({ theme }) => {
        return theme.palette.primary.main;
      }};
  }
`;

export { SelectFileStyle };
