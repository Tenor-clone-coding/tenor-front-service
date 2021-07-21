import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { Grid, Text, Image } from "../elements/index";

import Flex4 from "./Flex4";
import Flex3 from "./Flex3";
import Flex2 from "./Flex2";

const TrandingPage = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostAX());
      console.log(post_list);
    }
  }, []);

  return (
    <Grid margin="0 auto">
      <Grid margin="3rem auto" maxWidth="114rem">
        <Text width="30rem" size="2.5rem" bold="800" margin="0 2rem 3rem">
          Trending GIFs
        </Text>
          {/* props로 post 정보 넘겨주기 */}
          <Flex4 {...props} post_list={post_list}></Flex4>
          <Flex3 {...props} post_list={post_list}></Flex3>
          <Flex2 {...props} post_list={post_list}></Flex2>
      </Grid>
    </Grid>
  );
};


TrandingPage.defaultProps = {
  data: [
    {
      id: 1,
      src: "/image/aa7ea43b5742e8b429b37691b80cb965",
      title: "test 1",
    },
    {
      id: 2,
      src: "https://mblogthumb-phinf.pstatic.net/20141114_158/113outbreak_1415922989628Jiuzj_GIF/tumblr_n61al5U9oc1s8dr5oo1_500.gif?type=w420",
      title: "test 2",
    },
    {
      id: 3,
      src: "https://jjalbot.com/media/2018/12/X86C4DiT1/zzal.gif",
      title: "test 3",
    },
    {
      id: 4,
      src: "http://i1.wp.com/misfits.kr/wp-content/uploads/2016/10/media3.giphy_.com_media_rOEvmLAxxcE1i_giphy.gif?resize=400%2C288",
      title: "test 4",
    },
    {
      id: 5,
      src: "https://mblogthumb-phinf.pstatic.net/MjAxODEyMDVfMTgg/MDAxNTQ0MDA3NDgyNjM3._OVZI1LYTYdyEI2qKPC47MJLT9UhVUadypz6a8g6Xcsg.8pCkwEiQLtxYvCFRR-F4F5r3_fM0GUjn5B8zV3FMPhkg.GIF.nang723/IMG_0838.GIF?type=w800",
      title: "test 5",
    },
    {
      id: 6,
      src: "http://file3.instiz.net/data/cached_img/upload/2020/03/06/17/8519aa060d7f99df7f146ccddd360fb3.gif",
      title: "test 6",
    },
    {
      id: 7,
      src: "https://i.pinimg.com/originals/fa/17/e3/fa17e359fa32b40b706a26746e1e5633.gif",
      title: "test 7",
    },
    {
      id: 8,
      src: "https://i.pinimg.com/originals/99/90/b6/9990b678615d38d275f2e76b555da255.gif",
      title: "test 8",
    },
  ],
};

export default TrandingPage;
