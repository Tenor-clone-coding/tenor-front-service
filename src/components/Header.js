import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import PublishIcon from "@material-ui/icons/Publish";

const Header = (props) => {
  return (
    <Container>
      <Span>tenor</Span>
      <ButtonWrap>
        <Button>
          <PublishIcon />
          Upload
        </Button>
        <Button>Signin</Button>
        <Button>
          <MenuIcon fontSize="large" />
        </Button>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
  border: 0px solid black;
  display: flex;
  justify-content: space-between;
  padding: 5px 5%;
  box-sizing: border-box;
  & * {
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  padding: 0.5em 1em;
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid #2e93e6;
  background-color: white;
  color: #2e93e6;
  border-radius: 3px;
  &:last-child {
    padding: 0;
    color: black;
    border: none;
  }
  &:not(:first-child) {
    margin-left: 1em;
  }
  &:first-child {
    display: flex;
    align-items: center;
    padding: 0.5em 1em;
    background-color: #2e93e6;
    color: white;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-size: 3rem;
  color: #2e93e6;
`;

export default Header;
