import styled from "@mui/system/styled";

const PreviewItemStyle = styled("div")`
  border: solid 1px blue;
  height: 100px;
  width: 100px;
  position: relative;
  img {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { PreviewItemStyle };
