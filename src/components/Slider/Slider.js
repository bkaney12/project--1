import React from "react";

// import { Carousel } from "react-carousel-minimal";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

const Slider = () => {
  // const data = [
  //   {
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
  //   },
  //   {
  //     image:
  //       "https://www.coolpicking.com/wp-content/uploads/2015/01/7-best-types-of-people-to-travel-with.jpg",
  //   },
  //   {
  //     image:
  //       "https://cdn.premiumtravel.net/wp-content/uploads/2017/09/why-traveling-1070x620.png",
  //   },
  //   {
  //     image:
  //       "https://cdn.cnn.com/cnnnext/dam/assets/190708110954-black-travel-movement---travel-noire-image5-full-169.jpg",
  //   },
  //   {
  //     image:
  //       "https://i0.wp.com/travellingbuzz.com/wp-content/uploads/2016/02/travel-looking.jpg?resize=890%2C580&ssl=1",
  //   },
  //   {
  //     image:
  //       "https://www.superhitideas.com/wp-content/uploads/2020/10/Travelling.jpg",
  //   },
  //   {
  //     image:
  //       "https://scaleflex.ultrafast.io/https://cdn2.photostockeditor.com/h/3012/person-man-standing-looking-bridge-human-human-image.jpg",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1572933434859-6f595b10124a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&w=1000&q=80",
  //   },
  // ];

  const data = [
    {
      image:
        "https://media.istockphoto.com/photos/the-painter-hands-picture-id1190200652?k=20&m=1190200652&s=612x612&w=0&h=XeXAJt5Q-ieQSM1B8l4EB2qKFPrkgI-ceP9wfFspZUc=",
    },
    {
      image: "https://m.media-amazon.com/images/I/61Z4Z5AkOmL._AC_.jpg",
    },
    {
      image: "https://www.conncoll.edu/media/major-images/Art.jpg",
    },
    {
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/4LWiya3xkR7xzZc1EesXjg/18dca4c8cae923409a5aa69cbd7fd737/04-the-arts_1455770237.jpg?fit=fill&w=480&h=270",
    },
    {
      image:
        "https://www.moma.org/d/assets/W1siZiIsIjIwMjEvMDUvMDcvOTh1cWowMXZjaF9Zb2FrdW1faGVyby5qcGciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgOTAgLXJlc2l6ZSAxMzAweDQwMF4gLWdyYXZpdHkgTm9ydGggLWNyb3AgMTMwMHg0MDArMCs0OCJdXQ/Yoakum-hero.jpg?sha=f1f92304a1f73d84",
    },
    {
      image:
        "https://ego-alterego.com/wp-content/uploads/2017/03/Digital-art-by-Shimhaq1.jpg",
    },
    {
      image:
        "https://moderneartfair.com/wp-content/uploads/2021/07/Vue_5_GRIS.jpg",
    },
    {
      image:
        "https://www.bocadolobo.com/blog/wp-content/uploads/2018/12/Some-of-The-Most-Famous-Artists-Of-All-Time-ft.jpg",
    },
  ];

  // const captionStyle = {
  //   fontSize: "2em",
  //   fontWeight: "bold",
  // };
  // const slideNumberStyle = {
  //   fontSize: "20px",
  //   fontWeight: "bold",
  // };
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="car"
            // className="d-block w-100 h-25"
            src="https://s31531.pcdn.co/wp-content/uploads/2017/08/Creation-of-Adam_Michaelangelo_ArtistDaily.jpg.optimal.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="car"
            // className="d-block w-100 h-25"
            src="https://media.istockphoto.com/photos/the-painter-hands-picture-id1190200652?k=20&m=1190200652&s=612x612&w=0&h=XeXAJt5Q-ieQSM1B8l4EB2qKFPrkgI-ceP9wfFspZUc="
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="car"
            // className="d-block w-100 h-25"
            src="https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="car"
            // className="d-block w-100 h-25"
            src="https://m.media-amazon.com/images/I/61Z4Z5AkOmL._AC_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="car"
            // className="d-block w-100 h-25"

            src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F2zWeVrwKOsnJCGyhM2r3ZQ%252FEDIT_Aout%2BGallery%2B2.jpg&width=1200&quality=80"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* <div className="App">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "0 0px",
            }}
          >
            <Carousel
              data={data}
              time={2000}
              width="100%"
              height="500px"
              //   captionStyle={captionStyle}
              radius="10px"
              //   slideNumber={true}
              // slideNumberStyle={slideNumberStyle}
              //   captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              //   thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "100%",
                maxHeight: "300px",
                margin: "0px auto",
              }}
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Slider;
