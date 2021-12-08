import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CreateModal from "../../shared/CreateModal/CreateModal";
import ArtWorks from "../ArtWorks/ArtWorks";
import FilterPart from "../FilterPart/FilterPart";

const Search = () => {
  return (
    <>
      <Container fluid="md">
        <Row>
          <FilterPart />

          <ArtWorks />
        </Row>
      </Container>
    </>
  );
};

export default Search;
