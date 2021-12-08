import React from "react";
import AboutUs from "../AboutUs/AboutUs";

import ArtistPart from "../ArtistPart/ArtistPart";
import MainLayout from "../layouts/MainLayout";
import NewsLetter from "../NewsLetter/NewsLetter";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";

const MainPage = () => {
  return (
    <MainLayout>
      <Slider />
      <ArtistPart />
      <Search />

      <AboutUs />
      <NewsLetter />
    </MainLayout>
  );
};

export default MainPage;
