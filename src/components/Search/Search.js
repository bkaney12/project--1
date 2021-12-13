import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
  const searchResults = useSelector((state) => state.artsReducer.searchResults);
  console.log(searchResults);

  return (
    <>
      <div className="">
        {searchResults.map((item) => (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/details/${item.id}`}
          >
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Search;
