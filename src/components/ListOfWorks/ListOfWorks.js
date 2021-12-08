import React from "react";
import { Row, Col } from "react-bootstrap";
import "./ListOfWorks.css";

const ListOfWorks = ({ works }) => {
  return (
    <>
      {works.map((work) => (
        <div className="mt-4 ">
          <div className="row">
            <div className="col-12 col-md-7  cover position-relative">
              <img className="img-current" src={work.image} alt="" />
              <div className="bottom-center">{work.author}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListOfWorks;
