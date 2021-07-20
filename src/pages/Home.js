import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// components
import ImageSwiper from "../components/Swiper";
import TrandingPage from "../components/TrandingPage";
import SearchBar from "../components/SearchBar";

const Home = (props) => {
  // const code = new URL(window.location.href)
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  React.useEffect(() => {
    // dispatch(userActions.getUserAX());
  }, []);

  return (
    <React.Fragment>
      <SearchBar />
      <ImageSwiper></ImageSwiper>
      <TrandingPage></TrandingPage>
    </React.Fragment>
  );
};

export default Home;
