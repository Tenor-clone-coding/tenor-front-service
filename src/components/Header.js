import React from "react";
import styled from "styled-components";

import logo_basic from "../logo_basic.svg";
import upload_icon from "../upload_icon.svg";

import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Span>
        <img src={logo_basic} alt="tenor" />
      </Span>
      <ButtonWrap>
        <Button>
          <img src={upload_icon} alt="tenor" />
          Upload
        </Button>
        <Button>Sign in</Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon fontSize="large" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{
            transform: "translateY(3em)",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.header`
  max-width: 125rem;
  width: 100%;
  /* width: 130rem; */
  border: 0px solid black;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
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
  border: 1px solid #007add;
  background-color: white;
  color: #007add;
  border-radius: 3px;
  cursor: pointer;
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
    background-color: #007add;
    color: white;
  }
  & img {
    margin-right: 8px;
    height: 1em;
    width: auto;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-size: 3rem;
  color: #2e93e6;
  & img {
    width: 80px;
    aspect-ratio: auto 80 / 22;
    height: 22px;
  }
`;

export default Header;
