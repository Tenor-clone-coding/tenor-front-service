import React from "react";
import { history } from "../redux/configureStore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDetectOutsideClick } from "../elements/useDetectOutsideClick";

import "./search.css";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import logo_white from "../logo_white.svg";
import { actionCreators as postActions } from "../redux/modules/post";
import { Text, Grid } from "../elements";

const SearchBar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post.list);
  const recent_word = useSelector((state) => state.post.recent_word);

  // 검색기능
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [checkRecent, setCheckRecent] = useState(false);

  const changeSearch = (e) => {
    const targetWord = e.target.value;
    setSearchTitle(targetWord);
    setCheckRecent(false);
    // console.log(e.target);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(targetWord.toLowerCase());
    });
    if (targetWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setIsActive(!isActive);
      // console.log(filteredData);
    }
  };

  const changeText = (text) => {
    setSearchTitle(text);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      letSearch();
    }
  };

  const letSearch = () => {
    if (searchTitle !== "") {
      setSearchTitle("");
      setFilteredData([]);
      dispatch(postActions.searchPostAX(searchTitle));
      console.log(searchTitle);
    } else {
      window.alert("검색어를 입력해주세요");
    }
  };

  const recentKeyword = () => {
    console.log(searchTitle);
    console.log(checkRecent);
    if (searchTitle === "") {
      setCheckRecent(true);
      setIsActive(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // 메뉴 드롭다운
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  // searchBar style
  const [isScrollDown, setIsScrollDown] = useState(false);

  const handleScrollDown = (e) => {
    if (e.target.documentElement.scrollTop !== 0) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  useEffect(() => {
    dispatch(postActions.recentWordAX());
    window.addEventListener("scroll", handleScrollDown);
    return () => window.removeEventListener("scroll", handleScrollDown);
  }, []);

  return (
    <SearchWrap>
      <Container>
        <Span isScrollDown={isScrollDown}>
          <img src={logo_white} alt="logo_basic" />
        </Span>
        <Form isScrollDown={isScrollDown} onSubmit={handleSubmit} noValidate>
          <Input
            onClick={recentKeyword}
            placeholder="Search for GIFs and Stickers"
            value={searchTitle}
            onChange={changeSearch}
            type="text"
            onKeyPress={onKeyPress}
          ></Input>
          <Button type="button" onClick={letSearch}>
            <SearchIcon fontSize="large" />
          </Button>
        </Form>

        <nav
          ref={dropdownRef}
          className={`search ${isActive ? "active" : "inactive"}`}
        >
          {filteredData.length !== 0 ? (
            <Grid>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {filteredData.slice(0, 10).map((word, idx) => {
                  return (
                    <LiHover
                      key={idx}
                      onClick={() => {
                        changeText(word.title);
                      }}
                    >
                      <Text size="1.6rem" bold="600" padding="0">
                        {word.title}
                      </Text>
                    </LiHover>
                  );
                })}
              </ul>
            </Grid>
          ) : (
            <Grid>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {recent_word.map((word, idx) => {
                  return (
                    <LiHover
                      key={idx}
                      onClick={() => {
                        changeText(word.keyword);
                      }}
                    >
                      <Text size="1.6rem" bold="600">
                        {word.keyword}
                      </Text>
                    </LiHover>
                  );
                })}
              </ul>
            </Grid>
          )}
        </nav>
      </Container>
    </SearchWrap>
  );
};

const LiHover = styled.li`
  padding: 1rem 2rem;
  transition: all 0.3s;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const SearchWrap = styled.div`
  width: 100vw;
  background-color: #4cafff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Container = styled.div`
  height: 75px;
  max-width: 125rem;
  width: 100%;
  margin: 0 auto;
  background-color: #4cafff;
  display: flex;
  box-sizing: border-box;
  padding: 10px 5%;
  position: relative;
  & * {
    box-sizing: border-box;
  }
  justify-content: flex-end;
`;

const Input = styled.input`
  width: 100%;
  padding: 1em 1.5em;
  border: none;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 600;
`;

const Button = styled.button`
  position: absolute;
  margin-right: 1rem;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 3px;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  position: relative;
  transition: width 0.5s ease-in-out;
  ${({ isScrollDown }) => (isScrollDown ? "width: 90%;" : "width: 100%;")}
`;

const Span = styled.span`
  margin-right: 1em;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  ${({ isScrollDown }) => (isScrollDown ? `opacity: 1; ` : "opacity: 0; ")};
  margin-right: 1em;
  & img {
    width: 80px;
    aspect-ratio: auto 80 / 22;
    height: 22px;
    top: 50%;
    transform: translateY(0%);
  }
`;

export default SearchBar;
