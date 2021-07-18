import React from "react";

// elements
import { Grid } from "../elements";

// components
import ImageSwiper from "../components/Swiper";
import TrandingPage from "../components/TrandingPage";

const Home = (props) => {
  return (
    <React.Fragment>
      <ImageSwiper></ImageSwiper>
      <TrandingPage></TrandingPage>
    </React.Fragment>
  );
};

export default Home;
