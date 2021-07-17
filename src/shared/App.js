import "./App.css";
import React from "react";
import { Home } from "../pages";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function App() {
  return (
    <AppDiv>
      <ConnectedRouter history={history}>
        <Header />
        <SearchBar />
        <Route path="/" exact component={Home} />
      </ConnectedRouter>
    </AppDiv>
  );
}

// 스크롤+헤더 테스트 삼아 넣어 둔 거라 삭제해도 됩니다
const AppDiv = styled.div`
  height: 200vh;
`;

export default App;
