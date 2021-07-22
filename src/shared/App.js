import "./App.css";
import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { axiosInfo } from "./API";

import Header from "../components/Header";
import Search from "../pages/Search";
import { Home, Upload, KakaoRedirection } from "../pages";

function App() {

  const dispatch = useDispatch();
  const is_login = axiosInfo.token? true : false;

  React.useEffect(() => {
    if(is_login){
      dispatch(userActions.loginCheck());
    }
  }, [])

  return (
    <ConnectedRouter history={history}>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/upload" exact component={Upload} />
      <Route path="/user/kakao/callback" exact component={KakaoRedirection} />
      <Route path='/search/:id' exact component={Search}/>
      <AppDiv></AppDiv>
    </ConnectedRouter>
  );
}

// 스크롤+헤더 테스트 삼아 넣어 둔 거라 삭제해도 됩니다
const AppDiv = styled.div`
  height: 100vh;
`;

export default App;
