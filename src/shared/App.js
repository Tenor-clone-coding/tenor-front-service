import "./App.css";
import React from "react";
import { Home, Upload, KakaoRedirection } from "../pages";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Header from "../components/Header";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/upload" exact component={Upload} />
      <Route path="/user/kakao/callback" exact component={KakaoRedirection} />
      <AppDiv></AppDiv>
    </ConnectedRouter>
  );
}

// 스크롤+헤더 테스트 삼아 넣어 둔 거라 삭제해도 됩니다
const AppDiv = styled.div`
  height: 100vh;
`;

export default App;
