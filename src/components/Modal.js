import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Portal from "../elements/Portal";
import MbModal from "./MbModal";
import { Text, Grid, Button, CloseButton } from "../elements";

function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={visible}
      >
        <ModalInner tabIndex={0} className="modal-inner">
          <ModalShadow>
            <Grid center="right" height="auto">
              {closable && (
                <CloseButton className="modal-close" _onClick={close} />
              )}
            </Grid>
            <div style={{ height: "100%" }}>
              <Contents>
                <div
                  className="pc-modal"
                  style={{
                    display: "flex",
                    alignContent: "space-between",
                    flexDirection: "column",
                    minWidth: "47%",
                  }}
                >
                  <Text color="white" size="5rem" bold="800" margin="0 0 20rem">
                    Say more with the perfect GIF.
                  </Text>
                  <img
                    src="https://tenor.com/assets/img/tenor-logo-white.svg"
                    alt="tenor"
                    style={{ color: "white", width: "8rem", height: "2rem" }}
                  />
                </div>
                <Grid
                  bg="#ffffff"
                  radius="t"
                  maxWidth="26rem"
                  height="41rem"
                  padding="4rem 1.7rem"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "100%",
                      textAlign: "center",
                      height: "90%",
                    }}
                  >
                    <Text
                      size="2.4rem"
                      bold="700"
                      color="#007add"
                      margin="0 auto"
                    >
                      Create a Tenor Account
                    </Text>
                    <Text size="1.5rem" bold="600" margin="1.5rem 0 3.5rem">
                      Search, share and upload your own GIFs to your Tenor
                      account and access them anywhere, anytime.
                    </Text>
                    <Button bgImg="https://tenor.com/assets/img/auth/google/2x/btn_google_signin_dark_normal_web@2x.png"></Button>
                    <span
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "600",
                        margin: "2rem 0 3rem",
                      }}
                    >
                      Already have an account?{" "}
                      <span onClick={() => {}} style={{ color: "#007add" }}>
                        Sign in
                      </span>
                    </span>
                  </div>
                  <Text size="0.9rem" center="t" bold="500">
                    By clicking Sign in with Google, you agree to
                    <a
                      href="https://tenor.com/legal-terms"
                      style={{ color: "#2f3640", margin: "0 0 0 0.5rem" }}
                    >
                      our Terms of Service
                    </a>{" "}
                    and
                    <a
                      href="https://policies.google.com/privacy"
                      style={{ color: "#2f3640", margin: "0 0 0 0.5rem" }}
                    >
                      Privacy Policy
                    </a>
                  </Text>
                </Grid>
              </Contents>
              <MbModal/>
            </div>
          </ModalShadow>
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
}

Modal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
};

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1002;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1001;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 70rem;
  max-width: 100rem;
  height: 50rem;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  background-image: url("https://media0.giphy.com/media/nDSlfqf0gn5g4/giphy.gif");
  background-position: center;
  background-size: cover;

  @media (max-width: 840px) {
    width: 39rem;
    max-width: 50rem;
    height: 65rem;
  }
`;

const ModalShadow = styled.div`
  box-sizing: border-box;
  position: relative;
  background-image: linear-gradient(
    270deg,
    rgba(76, 175, 255, 0.7),
    rgba(46, 147, 230, 0.7)
  );
  border-radius: 10px;
  width: 70rem;
  max-width: 100rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 1rem 0.3rem;

  @media (max-width: 840px) {
    width: 39rem;
    max-width: 50rem;
    height: 65rem;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5rem 5rem;

  @media (max-width: 840px) {
      display: none;
  }
`;

export default Modal;
