import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* <div className="main-footer">
        <div className="container">
          <Row xs={12}>
            <Col>
              <h4>kART MEMES INC</h4>
              <h5 className="list-unstyled">
                <li>342-420-6969</li>
                <li>Moscow, Russia</li>
                <li>123 Streeet South North</li>
              </h5>
            </Col>

            <Col>
              <h4>Stuff</h4>
              <ui className="list-unstyled">
                <li>DANK MEMES</li>
                <li>OTHER STUFF</li>
                <li>GUD STUFF</li>
              </ui>
            </Col>

            <Col>
              <h4>WELL ANOTHER COLUMN</h4>
              <ui className="list-unstyled">
                <li>DANK MEMES</li>
                <li>OTHER STUFF</li>
                <li>GUD STUFF</li>
              </ui>
            </Col>
          </Row>
          <hr className="line" />
          <Row>
            <Col xs={12}>
              &copy;{new Date().getFullYear()} ART MEMES | All rights reserved |
              Terms Of Service | Privacy
            </Col>
          </Row>
          <div className="row">
            <p className="col-sm ">
              &copy;{new Date().getFullYear()} ART MEMES | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div> */}
      <div className="footer">
        <div className="text">
          <h5>
            {" "}
            <h4>kART MEMES INC</h4>
            <li>342-420-6969</li>
            <li>Visial Code, Bishkek</li>
            <li>123 Streeet South North</li>
          </h5>

          <ui>
            <h4>Stuff</h4>
            <li>DANK MEMES</li>
            <li>OTHER STUFF</li>
            <li>GUD STUFF</li>
          </ui>

          <ui>
            {" "}
            <h4>WELL ANOTHER COLUMN</h4>
            <li>DANK MEMES</li>
            <li>OTHER STUFF</li>
            <li>GUD STUFF</li>
          </ui>
        </div>
        <hr />

        <div className="bottom">
          &copy;{new Date().getFullYear()} ART MEMES | All rights reserved |
          Terms Of Service | Privacy
        </div>
      </div>
    </>
  );
};

export default Footer;
