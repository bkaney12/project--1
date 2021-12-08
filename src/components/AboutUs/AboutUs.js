import React from "react";
import { Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <Container fluid="md">
        <Row>
          <h2 className=" fw-light">What is kArt?</h2>
          <p>
            With a mission to create an online marketplace that is simple,
            secure, and profitable for artists everywhere, It is the world's
            first global virtual art gallery with over 10 million visitors. kArt
            offers you exclusive prices on original artworks by emerging and
            established international artists, shipping worldwide in 24 to 48h
            to your doorstep for free. Enjoy our selection of original artworks
            and high-quality prints that will make perfect gifts or decorate
            your walls with style!
          </p>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
