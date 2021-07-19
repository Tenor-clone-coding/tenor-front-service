import React from "react";
import styled from "styled-components";

const Upload = () => {
  return (
    <React.Fragment>
      <Container>
        <Title>Tenor GIF Maker</Title>
        <SubTitle>Upload and edit GIFs, share everywhere</SubTitle>
        <ContentBox>
          <UploadSection>
            <UploadImageButton>
              <input />
            </UploadImageButton>
          </UploadSection>
        </ContentBox>
      </Container>
    </React.Fragment>
  );
};

const Title = styled.p`
  color: #fff;
  font-size: 3.2rem;
  margin-bottom: 8px;
`;
const SubTitle = styled.p`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  background-color: #057dde;
`;

const ContentBox = styled.div`
  text-align: center;
`;

const UploadSection = styled.div``;

const UploadImageButton = styled.div``;

export default Upload;
