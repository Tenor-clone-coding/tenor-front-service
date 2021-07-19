import React from "react";
import styled from "styled-components";
import "./styles.css";
import { useDetectOutsideClick } from "../elements/useDetectOutsideClick";

import logo_basic from "../logo_basic.svg";
import upload_icon from "../upload_icon.svg";

import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Modal } from "../elements";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  // header 반응형
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // login 모달
  const [modalVisible, setModalVisible] = React.useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // 메뉴 드롭다운
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <Container>
      <Span>
        <img src={logo_basic} alt="tenor" />
      </Span>
      <ButtonWrap>
        <Button
          onClick={() => {
            props.history.push("/upload");
          }}
        >
          <img src={upload_icon} alt="tenor" display="" />
          Upload
        </Button>
        <>
          <Button onClick={openModal}>Sign in</Button>
          {modalVisible && (
            <Modal
              visible={modalVisible}
              closable={true}
              maskClosable={true}
              onClose={closeModal}
            ></Modal>
          )}
        </>
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

  return (
    <Container>
      <Span>
        <img src={logo_basic} alt="tenor" />
      </Span>
      <ButtonWrap>
        <Button
          onClick={() => {
            props.history.push("/upload");
          }}
        >
          <img src={upload_icon} alt="tenor" />
          Upload
        </Button>
        <>
          <Button onClick={openModal}>Sign in</Button>
          {modalVisible && (
            <Modal
              visible={modalVisible}
              closable={true}
              maskClosable={true}
              onClose={closeModal}
            ></Modal>
          )}
        </>
        <div className="menu-container">
          <button
            style={{
              backgroundColor: "#fff",
              border: "none",
              marginLeft: "0.5rem",
            }}
            onClick={onClick}
          >
            <MenuIcon fontSize="large" />
          </button>

          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <Grid maxWidth="110rem" is_flex="t" padding="5rem 9rem">
              <Div>
                <Text size="2rem" bold="600" margin='0'>
                  PRODUCTS
                </Text>
                <ul style={{listStyle: "none", padding: 0}}>
                  <li>
                    <Text size='1.6rem'>GIF keyboard</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>Android</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>Mac</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>Content Partners</Text>
                  </li>
                </ul>
              </Div>
              <Div>
                <Text size="2rem" bold="600" margin='0'>
                  EXPLORE
                </Text>
                <ul style={{listStyle: "none", padding: 0}}>
                  <li>
                    <Text size='1.6rem'>Reaction GIFs</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>Explore GIFs</Text>
                  </li>
                </ul>
              </Div>
              <Div>
                <Text size="2rem" bold="600" margin='0'>
                  COMPANY
                </Text>
                <ul style={{listStyle: "none", padding: 0}}>
                  <li>
                    <Text size='1.6rem'>About</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>Press</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>Blog</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>FAQ</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>Terms and Privacy</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>Website Licenses</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>Contact Us</Text>
                  </li>
                </ul>
              </Div>
              <Div>
                <Text size="2rem" bold="600" margin='0'>
                  API
                </Text>
                <ul style={{listStyle: "none", padding: 0}}>
                  <li>
                    <Text size='1.6rem'>Tenor GIF API</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>GIF API Documentation</Text>
                  </li>
                  <li>
                    <Text size='1.6rem'>Unity AR SDK</Text>
                  </li>
                </ul>
              </Div>
            </Grid>
          </nav>
        </div>

        {/*         
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{
            transform: "translateX(-50%)",
          }}
        >
          <Grid></Grid>
          <Grid _onClick={handleClose}>Profile</Grid>
          <Grid _onClick={handleClose}>My account</Grid>
          <Grid _onClick={handleClose}>Logout</Grid>
        </Menu> */}
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


const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 2rem;
  width: fit-content;
`;

export default Header;
