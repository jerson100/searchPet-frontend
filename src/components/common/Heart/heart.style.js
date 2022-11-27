import styled from "@mui/system/styled";

const HeartStyle = styled("div")`
  width: 16px;
  height: 16px;
  background: #d32f2f;
  transform: rotate(45deg);
  position: fixed;
  bottom: 1rem;
  left: 2rem;
  animation: latido 1.4s linear infinite;
  span {
    display: inline-block;
    text-align: center;
    transform: rotate(-45deg) scale(0.4) translateY(-40px);
    color: white;
    font-weight: bold;
    z-index: 3;
    position: relative;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #d32f2f;
    transform: translatey(-50%);
    border-radius: 50%;
    z-index: 2;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #d32f2f;
    transform: translatex(-50%);
    border-radius: 50%;
    z-index: 1;
  }
  @keyframes latido {
    0% {
      transform: translate(-50%, -50%) rotate(45deg) scale(1);
    }
    25% {
      transform: translate(-50%, -50%) rotate(45deg) scale(1.4);
    }
    50% {
      transform: translate(-50%, -50%) rotate(45deg) scale(1.2);
    }
    75% {
      transform: translate(-50%, -50%) rotate(45deg) scale(1.4);
    }
    100% {
      transform: translate(-50%, -50%) rotate(45deg) scale(1);
    }
  }
`;

export { HeartStyle };
