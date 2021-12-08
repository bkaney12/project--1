import React from "react";
import "./ArtistPart.css";

const ArtistPart = () => {
  return (
    <>
      <div class="container-fluid container-lg container-home mt-5">
        <h2 class="p text-uppercase small fw-medium">
          Trends: Our selection of original artworks
        </h2>
        <h3 class="h2 text-uppercase fw-light">Renowned Artists</h3>

        <div class="row mt-5">
          <figure class="col-12 col-md-8  col-sm-12 cover trend position-relative">
            <a href="/">
              <div class="overlay">
                <img
                  src="https://media.sciencephoto.com/image/c0377097/800wm"
                  className="leo"
                />
              </div>
            </a>
          </figure>
          <figure className="col-12 col-sm-6 col-md-4 cover trend position-relative">
            <a href="/">
              <div className="overlay">
                <img
                  className=" van"
                  src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/05/11/sei26139543-1-0.jpg?width=968"
                  alt="Van Gogh"
                />
              </div>
            </a>
          </figure>
          <figure className="col-12 col-sm-6 col-md-4 cover trend position-relative">
            <a href="/">
              <div className="overlay">
                <img
                  src="https://www.arte.go.it/wordpress/wp-content/uploads/2020/05/pablo-picasso-il-genio-del-secolo_00.jpg"
                  alt="picasso"
                  className="art-second-row"
                />
              </div>
            </a>
          </figure>
          <figure className="col-12 col-sm-6 col-md-4 cover trend position-relative">
            <a href="/">
              <div className="overlay">
                <img
                  src="https://www.bu.edu/files/2015/06/h_butoday_01.-Under-the-Wave-off-Kanagawa_0.jpg"
                  alt=""
                  className="art-second-row"
                />
              </div>
            </a>
          </figure>
          <figure className="col-12 col-sm-6 col-md-4 cover trend position-relative">
            <a href="/">
              <div class="overlay">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOPe4zQM2ntQqBowoXkiIUaAH2GibBmmYUg&usqp=CAU"
                  alt="frida"
                  className="art-second-row"
                />
              </div>
            </a>
          </figure>
        </div>
      </div>
    </>
  );
};

export default ArtistPart;
