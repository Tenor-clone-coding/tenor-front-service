import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from ".";

const MbModal = (props) => {
  return (
    <React.Fragment>
      <Contents>
        <div style={{ textAlign: "center", position: "relative", top: -24 }}>
          <img
            src="https://tenor.com/assets/img/tenor-logo-white.svg"
            alt="tenor"
            style={{ color: "white", width: "10rem" }}
          />
        </div>
        <div style={{ textAlign: "center", position: "relative", top: -10 }}>
          <Grid
            margin="0 auto"
            bg="#ffffff"
            radius="t"
            maxWidth="43rem"
            height="55rem"
            padding="4rem 2.7rem"
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
                size="3.2rem"
                bold="700"
                color="#007add"
                margin="0 auto 1.5rem"
              >
                Create a Tenor Account
              </Text>
              <Text size="2rem" bold="600" margin="1.5rem 0 6rem">
                Search, share and upload your own GIFs to your Tenor account and
                access them anywhere, anytime.
              </Text>
              <Button bgBtnImg="https://tenor.com/assets/img/auth/google/2x/btn_google_signin_dark_normal_web@2x.png"></Button>
              <span
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "600",
                  margin: "4rem 0 3rem",
                  color: "#57606f",
                }}
              >
                Already have an account?{" "}
                <span onClick={() => {}} style={{ color: "#007add" }}>
                  Sign in
                </span>
              </span>
            </div>
            <Text
              size="1.5rem"
              center="t"
              bold="500"
              margin="0 0 2rem"
              color="#57606f"
            >
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
        </div>
      </Contents>
    </React.Fragment>
  );
};

const Contents = styled.div`
  display: "flex";
  align-items: "center";
  flex-direction: "column";
  padding: 0 1rem 5rem;

  @media (min-width: 840px) {
    display: none;
  }
`;

export default MbModal;
