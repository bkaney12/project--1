import React from "react";
import { Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./ListOfWorks.css";

const ListOfWorks = ({ works }) => {
  return (
    <>
      <div className="mt-3 ">
        <div className="row">
          {works
            ? works.map((work) => (
                <div className="col-12 col-md-4 mt-4 cover position-relative">
                  <Link to={`/details/${work.id}`}>
                    <img className="img-current" src={work.image} alt="" />

                    <div className="bottom-center ">{work.author}</div>
                  </Link>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default ListOfWorks;
