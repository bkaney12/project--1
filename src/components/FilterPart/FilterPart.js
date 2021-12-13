import React, { useState, useEffect } from "react";
import CreateModal from "../../shared/CreateModal/CreateModal";
import { FaSearch } from "react-icons/fa";
import { fetchWorks } from "../../store/actions/artsActions";
import {
  fetchByParams,
  fetchSearchWorks,
} from "../../store/actions/artsActions";
import Search from "../Search/Search";
import "./FilterPart.css";
import { useDispatch, useSelector } from "react-redux";
import { setArts } from "../../store/reducers/artsReducers";
import { useLocation, useNavigate } from "react-router";
import { FormControl, InputGroup } from "react-bootstrap";
import { useQueryParams } from "../../hooks/useQueryParams";

const FilterPart = () => {
  const [modalShow, setModalShow] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  const onCloseModal = () => {
    setModalShow(false);
  };

  const handleSearch = (e) => {
    dispatch(fetchSearchWorks(e.target.value));
  };

  const [category, setCategory] = useState("");
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div class="col-12 -col-sm-12 col-md-3 ">
        <div className="well blosd mt-5">
          <div className="input-group">
            <form className="searchControl">
              <input
                type="text"
                className="form-control"
                onFocus={() => setSearchActive(true)}
                placeholder="search"
                onChange={handleSearch}
              />
            </form>

            {searchActive && (
              <div className="searchBox">
                <Search />
              </div>
            )}
          </div>
        </div>
        <nav>
          <form
            name="artworks_sidebar"
            role="form"
            className="form-horizontal"
            novalidate="true"
          >
            <br />
            <br />

            <div className="mb-3">
              <div className=" mb-3 text-uppercase">
                <span>Category</span>
                <i
                  style={{ fontSize: "1.5rem", color: "black" }}
                  className="align-self-center fal fa-angle-up"
                ></i>
              </div>
              <div>
                {" "}
                <InputGroup
                // value={category}
                // onChange={handleChangeCategory}
                // onClick={(e) => fetchByParams("type", e.target.value)}
                >
                  <div className="mt-1">
                    <div class="ps-4 mb-2 abc-radio abc-radio-dark">
                      <input
                        name="artworks_sidebar[categorySlug]"
                        value="painting"
                        type="radio"
                      />
                      <label className="m-1"></label>
                      Painting
                    </div>
                    <div class="ps-4 mb-2 abc-radio abc-radio-dark">
                      <input
                        id="desktop_artworks_sidebar_categorySlug_1"
                        name="artworks_sidebar[categorySlug]"
                        value="scupture"
                        type="radio"
                        // onChange={handleChangeCategory}
                        // onClick={(e) => fetchByParams("type", e.target.value)}
                      />
                      <label
                        className="m-1"
                        for="desktop_artworks_sidebar_categorySlug_1"
                      ></label>
                      Sculpture
                    </div>
                    <div className="ps-4 mb-2 abc-radio abc-radio-dark">
                      <input
                        name="artworks_sidebar[categorySlug]"
                        value="photography"
                        type="radio"
                        // onChange={handleChangeCategory}
                        // onClick={(e) => fetchByParams("type", e.target.value)}
                      />
                      <label
                        className="m-1"
                        for="desktop_artworks_sidebar_categorySlug_2"
                      ></label>
                      Photography
                    </div>
                    <div className="ps-4 mb-2 abc-radio abc-radio-dark">
                      <input
                        name="artworks_sidebar[categorySlug]"
                        value="drawing"
                        type="radio"
                        // onChange={handleChangeCategory}
                        // onClick={(e) => fetchByParams("type", e.target.value)}
                      />
                      <label
                        className="m-1"
                        for="desktop_artworks_sidebar_categorySlug_3"
                      ></label>
                      Drawing
                    </div>

                    <div className="ps-4 mb-2 abc-radio abc-radio-dark">
                      <input
                        name="artworks_sidebar[categorySlug]"
                        value="printmaking"
                        type="radio"
                        // onChange={handleChangeCategory}
                        // onClick={(e) => fetchByParams("type", e.target.value)}
                      />
                      <label
                        className="m-1"
                        for="desktop_artworks_sidebar_categorySlug_8"
                      ></label>
                      Printmaking
                    </div>
                  </div>
                </InputGroup>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="mb-3">
              <div id="desktop_prices" class=" mb-3 text-uppercase">
                <span>Price</span>
                <i
                  style={{ fontSize: "1.5rem" }}
                  class="align-self-center fal fa-angle-up"
                ></i>
              </div>

              <div id="desktop_collapse_prices" class="collapse show">
                <div id="desktop_artworks_sidebar_priceRange">
                  <div class="ps-4 mb-2 abc-checkbox abc-checkbox-dark">
                    <input
                      id="desktop_artworks_sidebar_priceRange_0"
                      name="artworks_sidebar[priceRange][]"
                      value="0-500"
                      type="checkbox"
                    />
                    <label
                      class="m-1"
                      for="desktop_artworks_sidebar_priceRange_0"
                    ></label>
                    Under 500 €
                  </div>
                  <div class="ps-4 mb-2 abc-checkbox abc-checkbox-dark">
                    <input
                      id="desktop_artworks_sidebar_priceRange_1"
                      name="artworks_sidebar[priceRange][]"
                      value="500-1000"
                      type="checkbox"
                    />
                    <label
                      class="m-1"
                      for="desktop_artworks_sidebar_priceRange_1"
                    ></label>
                    500 - 1000 €
                  </div>
                  <div class="ps-4 mb-2 abc-checkbox abc-checkbox-dark">
                    <input
                      id="desktop_artworks_sidebar_priceRange_2"
                      name="artworks_sidebar[priceRange][]"
                      value="1000-2000"
                      type="checkbox"
                    />
                    <label
                      class="m-1"
                      for="desktop_artworks_sidebar_priceRange_2"
                    ></label>
                    1000 - 2000 €
                  </div>
                  <div class="ps-4 mb-2 abc-checkbox abc-checkbox-dark">
                    <input
                      id="desktop_artworks_sidebar_priceRange_3"
                      name="artworks_sidebar[priceRange][]"
                      value="2000-5000"
                      type="checkbox"
                    />
                    <label
                      class="m-1"
                      for="desktop_artworks_sidebar_priceRange_3"
                    ></label>
                    2000 - 5000 €
                  </div>
                  <div class="ps-4 mb-2 abc-checkbox abc-checkbox-dark">
                    <input
                      id="desktop_artworks_sidebar_priceRange_4"
                      name="artworks_sidebar[priceRange][]"
                      value="5000-10000"
                      type="checkbox"
                    />
                    <label
                      class="m-1"
                      for="desktop_artworks_sidebar_priceRange_4"
                    ></label>
                    5000 - 10000 €
                  </div>
                  <div class="ps-4 mb-2 abc-checkbox abc-checkbox-dark">
                    <input
                      // checked="checked"
                      id="desktop_artworks_sidebar_priceRange_5"
                      name="artworks_sidebar[priceRange][]"
                      value="10000"
                      type="checkbox"
                    />
                    <label
                      class="m-1"
                      for="desktop_artworks_sidebar_priceRange_5"
                    ></label>
                    More than 10000 €
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-outline-dark  px-4 m-5"
              onClick={handleOpenModal}
            >
              Add a piece
            </button>
            <CreateModal show={modalShow} onHide={onCloseModal} />
          </form>
        </nav>
      </div>
    </>
  );
};

export default FilterPart;
