import React, { useState } from "react";
import CreateModal from "../../shared/CreateModal/CreateModal";

const FilterPart = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  const onCloseModal = () => {
    setModalShow(false);
  };
  return (
    <>
      <div class="col-12 -col-sm-6 col-md-3 ">
        <nav>
          <form
            name="artworks_sidebar"
            method="post"
            role="form"
            id="desktop_artwork_search_sidebar"
            class="form-horizontal"
            novalidate="true"
          >
            <br />
            <br />

            <div class="mb-3">
              <div class=" mb-3 text-uppercase">
                <span>Category</span>
                <i
                  style={{ fontSize: "1.5rem", color: "black" }}
                  class="align-self-center fal fa-angle-up"
                ></i>
              </div>
              <div id="desktop_collapse_categories" class="collapse show">
                <div id="desktop_artworks_sidebar_categorySlug" class="mt-1">
                  <div class="ps-4 mb-2 abc-radio abc-radio-dark">
                    <input
                      data-id="pei"
                      id="desktop_artworks_sidebar_categorySlug_0"
                      name="artworks_sidebar[categorySlug]"
                      value="115"
                      type="radio"
                    />
                    <label class="m-1"></label>
                    Painting
                  </div>
                  <div class="ps-4 mb-2 abc-radio abc-radio-dark">
                    <input
                      data-id="scu"
                      id="desktop_artworks_sidebar_categorySlug_1"
                      name="artworks_sidebar[categorySlug]"
                      value="120"
                      type="radio"
                    />
                    <label
                      class="m-1"
                      for="desktop_artworks_sidebar_categorySlug_1"
                    ></label>
                    Sculpture
                  </div>
                  <div class="ps-4 mb-2 abc-radio abc-radio-dark">
                    <input
                      data-id="pho"
                      id="desktop_artworks_sidebar_categorySlug_2"
                      name="artworks_sidebar[categorySlug]"
                      value="123"
                      type="radio"
                    />
                    <label
                      class="m-1"
                      for="desktop_artworks_sidebar_categorySlug_2"
                    ></label>
                    Photography
                  </div>
                  <div class="ps-4 mb-2 abc-radio abc-radio-dark">
                    <input
                      data-id="dra"
                      id="desktop_artworks_sidebar_categorySlug_3"
                      name="artworks_sidebar[categorySlug]"
                      value="125"
                      type="radio"
                    />
                    <label
                      class="m-1"
                      for="desktop_artworks_sidebar_categorySlug_3"
                    ></label>
                    Drawing
                  </div>

                  <div class="ps-4 mb-2 abc-radio abc-radio-dark">
                    <input
                      data-id="des"
                      id="desktop_artworks_sidebar_categorySlug_8"
                      name="artworks_sidebar[categorySlug]"
                      value="921"
                      type="radio"
                    />
                    <label
                      class="m-1"
                      for="desktop_artworks_sidebar_categorySlug_8"
                    ></label>
                    Design
                  </div>
                </div>
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
              className="btn btn-outline-dark  px-4 mt-4 "
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
