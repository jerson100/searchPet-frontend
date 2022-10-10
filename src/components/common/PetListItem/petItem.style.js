import styled from "@mui/system/styled";

const ImageProfileContainerStyle = styled("div")`
  height: 170px;
  position: relative;
  p {
    font-size: 20px;
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const PetItemStyle = styled("div")(({ theme }) => ({
  border: `solid 1px ${theme.palette.divider}`,
  backgroundColor: "rgb(243, 242, 239)",
  //   cursor: "pointer",
  position: "relative",
  //   [theme.breakpoints.up("sm")]: {
  //     transition: "transform 0.2s ease",
  //     "&:hover": {
  //       transform: "scale(0.9)",
  //     },
  //   },
}));

const ImgProfileStyle = styled("img")`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ notfound }) => !notfound && `filter: brightness(0.5) blur(2px);`}
`;

export { ImageProfileContainerStyle, PetItemStyle, ImgProfileStyle };
