import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import logo_white from "../logo_white.svg";
import { useEffect } from "react";
import { useState } from "react";

const SearchBar = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);

  const handleScrollDown = (e) => {
    if (e.target.documentElement.scrollTop !== 0) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDown);
    return () => window.removeEventListener("scroll", handleScrollDown);
  }, []);

  return (
    <Container>
      <Span isScrollDown={isScrollDown}>
        <img src={logo_white} alt="logo_basic" />
      </Span>

      <Form isScrollDown={isScrollDown}>
        <Input placeholder="Search for GIFs and Stickers"></Input>
        <Button>
          <SearchIcon fontSize="large" />
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  height: 75px;
  width: 100vw;
  background-color: #4cafff;
  display: flex;
  box-sizing: border-box;
  padding: 10px 5%;
  position: sticky;
  top: 0;
  & * {
    box-sizing: border-box;
  }
  justify-content: flex-end;
  z-index: 1000;
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
  margin-right: 15px;
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
