import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "../elements";

const Upload = (props) => {
  return (
    <React.Fragment>
      <Grid
        padding="4rem 2.7rem"
        margin="0 auto"
        height="52rem"
        bg="#0F83E0"
        maxWidth="100%"
      >
        <Text bold="500" color="#fff" size="3.2rem" margin="0.8rem" center>
          Tenor GIF Maker
        </Text>
        <Text color="#fff" size="2rem" margin="0.5rem" center>
          Upload and edit GIFs, share everywhere
        </Text>
        <Container>
          <Grid
            width="100%"
            padding="2rem"
            margin="0 auto"
            height="44rem"
            bg="#fff"
            maxWidth="64.5rem"
            radius="5px"
          >
            <UploadImageButton>
              <input />
            </UploadImageButton>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

const Container = styled.div``;
const UploadImageButton = styled.div``;

export default Upload;
