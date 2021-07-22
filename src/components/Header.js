import React from "react";
import styled from "styled-components";
import "./styles.css";
import { useDetectOutsideClick } from "../elements/useDetectOutsideClick";
import { history } from "../redux/configureStore";

import logo_basic from "../logo_basic.svg";
import upload_icon from "../upload_icon.svg";

import MenuIcon from "@material-ui/icons/Menu";
import Modal from "./Modal";
import { Grid, Text } from "../elements";

const Header = (props) => {
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
        <img
          src={logo_basic}
          alt="tenor"
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.replace("/");
          }}
        />
      </Span>
      <ButtonWrap>
        <UploadBtn
          onClick={() => {
            history.push("/upload");
          }}
        >
          <img src={upload_icon} alt="tenor" />
          Upload
        </UploadBtn>
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
                <Text size="2rem" bold="600" margin="0">
                  PRODUCTS
                </Text>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <Text size="1.6rem">GIF keyboard</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">Android</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">Mac</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">Content Partners</Text>
                  </li>
                </ul>
              </Div>
              <Div>
                <Text size="2rem" bold="600" margin="0">
                  EXPLORE
                </Text>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <Text size="1.6rem">Reaction GIFs</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">Explore GIFs</Text>
                  </li>
                </ul>
              </Div>
              <Div>
                <Text size="2rem" bold="600" margin="0">
                  COMPANY
                </Text>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <Text size="1.6rem">About</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">Press</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">Blog</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">FAQ</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">Terms and Privacy</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">Website Licenses</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">Contact Us</Text>
                  </li>
                </ul>
              </Div>
              <Div>
                <Text size="2rem" bold="600" margin="0">
                  API
                </Text>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>
                    <Text size="1.6rem">Tenor GIF API</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">GIF API Documentation</Text>
                  </li>
                  <li>
                    <Text size="1.6rem">Unity AR SDK</Text>
                  </li>
                </ul>
              </Div>
            </Grid>
          </nav>
        </div>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.header`
  max-width: 125rem;
  width: 100%;
  height: 5.4rem;
  /* width: 130rem; */
  border: 0px solid black;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5px 5%;
  box-sizing: border-box;
  align-items: center;
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
    margin-left: 1rem;
    transition: all 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%), 0 4px 6px 0 rgb(83 83 92 / 11%);
    &:hover {
      transform: translateY(-1.5px);
      cursor: pointer;
    }
  }
  & img {
    margin-right: 8px;
    height: 1em;
    width: auto;
  }
`;

const UploadBtn = styled.button`
  padding: 0.5em 1em;
  display: flex;
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid #007add;
  background-color: white;
  color: #007add;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  background-color: #007add;
  color: white;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%), 0 4px 6px 0 rgb(83 83 92 / 11%);
  transition: all 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  &:hover {
    transform: translateY(-1.5px);
    cursor: pointer;
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
