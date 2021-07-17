import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { Grid, Text } from "../elements";
import "../shared/Swipe.scss";

SwiperCore.use([Navigation]);

const ImageSwiper = (props) => {
  return (
    <Grid margin="3rem auto">
      <Grid maxWidth='100rem' margin="3rem auto">
        <Swiper
          className="banner"
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <Grid maxWidth="75rem" margin="0 auto" is_flex="t">
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid maxWidth="80rem" margin="0 auto" is_flex="t">
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid maxWidth="80rem" margin="0 auto" is_flex="t">
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid maxWidth="80rem" margin="0 auto" is_flex="t">
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
              <Grid
                width="3rem"
                backImg="https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319"
              ></Grid>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default ImageSwiper;
