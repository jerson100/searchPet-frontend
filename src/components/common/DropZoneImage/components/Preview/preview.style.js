import styled from "@mui/system/styled";

const PreviewStyle = styled("div")``;
const PreviewContentStyle = styled("div")`
  border: solid 1px
    ${({
      theme: {
        palette: { divider },
      },
    }) => divider};
  background-color: ${({ theme }) => {
    return theme.palette.background.paper;
  }};
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  min-height: 100px;
  gap: 16px;
`;

export { PreviewStyle, PreviewContentStyle };
