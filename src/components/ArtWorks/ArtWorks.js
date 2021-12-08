import React, { useEffect } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchWorks } from "../../store/actions/artsActions";
import ListOfWorks from "../ListOfWorks/ListOfWorks";

const ArtWorks = () => {
  const dispatch = useDispatch();
  const works = useSelector((state) => state.artsReducer.works);
  console.log(works);

  useEffect(() => {
    dispatch(fetchWorks());
  }, []);

  return (
    <>
      <div className="col-12 -col-sm-6 col-md-9 container-sm-home container-md-home">
        <p className="text-uppercase small fw-medium">Editor's pick</p>
        <h3 className="h2  fw-light">CURRENTLY ON kART</h3>
        <Form className="d-flex">
          <FormControl
            style={{ height: "40px", marginTop: "0px" }}
            type="search"
            placeholder="Search"
            className="me-1"
            aria-label="Search"
          />
        </Form>

        <ListOfWorks works={works} />
      </div>
    </>
  );
};

export default ArtWorks;
