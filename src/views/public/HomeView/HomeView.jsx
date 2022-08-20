import React from "react";
import Container from "@mui/material/Container";
import Banner from "./components/Banner";

const HomeView = () => {
  return (
    <>
      <Banner />
      <Container>
        <p style={{ padding: "6rem 0" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
          ratione corporis, explicabo, officiis quasi veniam quibusdam eos
          laboriosam similique in molestias laudantium laborum praesentium enim
          dolore ducimus deleniti facere illo.
        </p>
      </Container>
    </>
  );
};

export default HomeView;
