import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import { Grid, Text, Image } from "../elements";
import "../shared/Swipe.scss";

SwiperCore.use([Navigation]);

const ImageSwiper = (props) => {
  return (
    <Grid margin="3rem auto 0">
      <Grid maxWidth="114rem" margin="3rem auto 0">
        <Text width="auto" size="2.5rem" bold="800" margin="0 2rem 3rem">
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
              <Image shape='swiper' src={post.src}></Image>
              <Text width="5rem" size="1.6rem" bold="600">
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
      src: "https://mblogthumb-phinf.pstatic.net/20141114_255/113outbreak_1415922979686UJJn6_GIF/tumblr_m2f06khC4k1r1mr1po1_500.gif?type=w420",
      title: "spongeBob",
    },
    {
      id: 2,
      src: "https://mblogthumb-phinf.pstatic.net/20141114_158/113outbreak_1415922989628Jiuzj_GIF/tumblr_n61al5U9oc1s8dr5oo1_500.gif?type=w420",
      title: "Yeeep",
    },
    {
      id: 3,
      src: "https://jjalbot.com/media/2018/12/X86C4DiT1/zzal.gif",
      title: "FunFun",
    },
    {
      id: 4,
      src: "http://i1.wp.com/misfits.kr/wp-content/uploads/2016/10/media3.giphy_.com_media_rOEvmLAxxcE1i_giphy.gif?resize=400%2C288",
      title: "rainbow",
    },
    {
      id: 5,
      src: "https://mblogthumb-phinf.pstatic.net/MjAxODEyMDVfMTgg/MDAxNTQ0MDA3NDgyNjM3._OVZI1LYTYdyEI2qKPC47MJLT9UhVUadypz6a8g6Xcsg.8pCkwEiQLtxYvCFRR-F4F5r3_fM0GUjn5B8zV3FMPhkg.GIF.nang723/IMG_0838.GIF?type=w800",
      title: "chew",
    },
    {
      id: 6,
      src: "http://file3.instiz.net/data/cached_img/upload/2020/03/06/17/8519aa060d7f99df7f146ccddd360fb3.gif",
      title: "sliding",
    },
    {
      id: 7,
      src: "https://i.pinimg.com/originals/fa/17/e3/fa17e359fa32b40b706a26746e1e5633.gif",
      title: "cheer up",
    },
    {
      id: 8,
      src: "https://i.pinimg.com/originals/99/90/b6/9990b678615d38d275f2e76b555da255.gif",
      title: "sorry",
    },
  ],
};

export default ImageSwiper;
