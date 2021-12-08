import React from "react";
import { Container, Row } from "react-bootstrap";
import NewsLetter from "../NewsLetter/NewsLetter";

const Cart = () => {
  return (
    <>
      <Container fluid="md">
        <Row>
          <h1
            style={{
              minHeight: "300px",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            Your cart is empty
          </h1>
        </Row>
      </Container>
      <NewsLetter />
    </>
  );
};

export default Cart;
