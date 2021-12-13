import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setItemToFavorite } from "../../store/reducers/favoriteReducer";
import NewsLetter from "../NewsLetter/NewsLetter";
import Slider from "../Slider/Slider";
import ListOfWorks from "../ListOfWorks/ListOfWorks";
import { checkItem } from "../../utils/checkItem";

const Favorites = () => {
  const storeData = useSelector((state) => state.favoriteReducer);
  console.log(storeData);
  const [item, setItem] = useState([]);

  //   const arr = Object.entries(storeData);

  useEffect(() => {
    const arr = Object.entries(storeData);
    console.log(arr);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });

      setItem(res);
    }
  }, []);
  return (
    <>
      <Container fluid="md">
        <Row>
          <h1
            style={{
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            Favorites
          </h1>

          <div className="row">
            {item.length ? (
              item.map((item) => (
                <div className="col-12 col-md-3 mt-4 cover position-relative">
                  <Link to={`/details/${item.id}`}>
                    <img className="img-current" src={item.img} alt="" />

                    <div className="bottom-center ">{item.name}</div>
                  </Link>
                </div>
              ))
            ) : (
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "30px",
                }}
              >
                You haven't got any favorites yet
              </h2>
            )}
          </div>
        </Row>
      </Container>
      <NewsLetter />
    </>
  );
};

export default Favorites;
