import React, { useEffect, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchWorks } from "../../store/actions/artsActions";
import ListOfWorks from "../ListOfWorks/ListOfWorks";
import { useLocation } from "react-router";
import "./ArtWork.css";
import ReactPaginate from "react-paginate";

const ArtWorks = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const works = useSelector((state) => state.artsReducer.works);
  const [page, setPage] = useState(0);

  const workPerPage = 6;

  const pageCount = Math.ceil(works.length / workPerPage);

  const pageVisited = page * workPerPage;

  const paginateWorks = works.slice(pageVisited, pageVisited + workPerPage);

  const changePage = ({ selected }) => {
    setPage(selected);
  };
  useEffect(() => {
    dispatch(fetchWorks());
  }, [window.location.search]);

  return (
    <>
      <div className="col-12 -col-sm-12 col-md-9 container-sm-home container-md-home mt-5">
        <p className="text-uppercase small fw-medium">Editor's pick</p>
        <h3 className="h2  fw-light">CURRENTLY ON kART</h3>

        <ListOfWorks works={paginateWorks} />
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination"
          previousLinkClassName="previousBtn"
          nextLinkClassName="nextBtn"
          activeClassName="activeBtn"
          disabledClassName="disabledBtn"
        />
      </div>
    </>
  );
};

export default ArtWorks;
