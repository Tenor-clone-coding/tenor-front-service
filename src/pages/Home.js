import React from "react";

// elements
import { Grid } from "../elements";

// components
import ImageSwiper from "../components/Swiper";
import TrandingPage from "../components/TrandingPage";
import SearchBar from "../components/SearchBar";

const Home = (props) => {
  return (
    <React.Fragment>
      <SearchBar />
      <ImageSwiper></ImageSwiper>
      <TrandingPage></TrandingPage>
    </React.Fragment>
  );
};

export default Home;
