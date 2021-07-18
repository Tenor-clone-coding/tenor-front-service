import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { Grid, Text } from "../elements";
import "../shared/Swipe.scss";

SwiperCore.use([Navigation]);

const ImageSwiper = (props) => {
  return (
    <Grid margin="3rem auto">
      <Grid maxWidth="114rem" margin="3rem auto">
        <Text width="auto" size="2.5rem" bold="t" margin="0 2rem 3rem">
          Trending Tenor Searches
        </Text>
        <Swiper
          style={{ padding: "0 3.5rem" }}
          className="swiper-container"
          spaceBetween={35}
          slidesPerView={5}
          slidesPerGroup={5}
          navigation
          breakpoints={{ 
            1200: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 35,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          {props.data.map((post) => (
            <SwiperSlide
              key={post.id}
              className="swiper-slide"
              style={{ width: "18rem" }}
            >
              <Grid margin="0" backImg={post.src}></Grid>
              <Text width="5rem" size="1.6rem" bold="t">
                {post.title}
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};

ImageSwiper.defaultProps = {
  data: [
    {
      id: 1,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 1",
    },
    {
      id: 2,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 2",
    },
    {
      id: 3,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 3",
    },
    {
      id: 4,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 4",
    },
    {
      id: 5,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 5",
    },
    {
      id: 6,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 6",
    },
    {
      id: 7,
      src: "https://t1.daumcdn.net/cfile/tistory/99AE233E5F8CDE7319",
      title: "test 7",
    },
  ],
};

export default ImageSwiper;
