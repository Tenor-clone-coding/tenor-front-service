import React, { useState } from "react";
import styled from "styled-components";
import { Button, Grid, Text } from "../elements";
import { useDropzone } from "react-dropzone";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import sharedImage from "../elements/image/sharedImage.gif";
import folderAnimation from "../elements/image/folderAnimation.gif";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Upload = (props) => {
  const dispatch = useDispatch();
  const [title, setContents] = React.useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/gif",
    onDrop: (acceptedFiles) => {
      // acceptedFiles typeof 확인후 file object 일때 서버로 여기서 넘겨주기
      // dispatch(upload 미들웨어 달기)
      console.log(acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const is_files = () => {
    if (files.length !== 0) {
      console.log(files);
      return true;
    } else console.log(files);
    return false;
  };

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          style={{ width: "26rem", height: "26rem", objectFit: "cover" }}
          alt="preview"
          center="center"
        />
      </div>
    </div>
  ));

  // 새 게시글
  const addPost = () => {
    if (files.length === 0) {
      window.alert("이미지를 선택해주세요");
      return;
    }

    if (!title) {
      window.alert("사진의 제목을 입력해주세요");
      return;
    }

    let post = {
      title: title,
      image: files[0],
    };
    console.log(post);
    window.alert("업로드");
    dispatch(postActions.addPostAX(post));
  };

  return (
    <React.Fragment>
      <Grid
        padding="4rem 0 0 0"
        margin="0 auto"
        height="67rem"
        bg="#0F83E0"
        maxWidth="100%"
      >
        <Text
          bold="500"
          color="#fff"
          size="3.2rem"
          margin="0.8rem"
          center="center"
        >
          Tenor GIF Maker
        </Text>
        <Text color="#fff" size="2rem" margin="0 0 3.2rem" center="center">
          Upload and edit GIFs, share everywhere
        </Text>

        <Grid
          height="44rem"
          padding="1rem 6rem 3rem 6rem"
          margin="0 auto"
          bg="#fff"
          maxWidth="65rem"
          radius="5px"
        >
          <Grid>
            {is_files() ? (
              <>
                <div className="DragDrop">
                  <DragnDrop {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div>{images}</div>
                    <br />
                    <UploadBtn>UPLOAD FROM CAMERA ROLL</UploadBtn>
                  </DragnDrop>
                  <Grid is_flex="t" margin="1rem auto 0">
                    <Grid margin="1rem auto" center="center">
                      <InputBox
                        placeholder="Add Title"
                        value={title}
                        onChange={changeContents}
                        style={{ width: "37rem" }}
                      ></InputBox>
                    </Grid>
                    <Grid center="center" margin="1rem auto">
                      <Button
                        bg="#48abfb"
                        padding="1rem"
                        radius="30px"
                        width="15rem"
                        height="5rem"
                        _onClick={addPost}
                      >
                        <Text color="#fff" margin="0" size="1.8rem" bold="600">
                          UPLOAD
                        </Text>
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </>
            ) : (
              <>
                <div className="DragDrop">
                  <DragnDrop {...getRootProps()}>
                    <input {...getInputProps()} />
                    <img
                      src={folderAnimation}
                      alt="tenor"
                      style={{ width: "14rem", margin: "0 0 3rem 0" }}
                    />
                    <br />
                    <UploadBtn>UPLOAD FROM CAMERA ROLL</UploadBtn>
                  </DragnDrop>
                  <Text size="1.25rem" color="#2B2B2B" center="center">
                    <InfoOutlinedIcon
                      style={{
                        position: "absolute",
                        color: "#0276D6",
                        fontSize: "large",
                        margin: "-2 10 10 -20",
                      }}
                    />
                    Upload up to 10 GIFs, stickers, MP4s, JPEGs, or PNGs
                  </Text>
                  <InputBox placeholder="Paste a GIF, JPEG, or PNG URL"></InputBox>
                  <Text
                    size="1.1rem"
                    color="#9b9b9b"
                    textDecoration="underline"
                    center="center"
                  >
                    Terms and Privacy
                  </Text>
                </div>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid padding="9rem 0 9rem">
        <Text
          bold="500"
          color="black"
          size="3.2rem"
          margin="0.8rem"
          center="center"
        >
          Getting started on Tenor
        </Text>
        <Content>
          <Item>
            <img
              src="https://tenor.com/assets/img/gifmaker/library.png"
              alt="items"
              style={{ width: "14rem" }}
            />
            <Text bold="550" color="#4A4A4A" size="2rem">
              Build your Library
            </Text>
            <Text color="#4A4A4A" size="1.5rem">
              Upload and edit your GIFs, stickers, or short MP4s to your Tenor
              profile to share with friends and family
            </Text>
          </Item>
          <Item>
            <img
              src="https://tenor.com/assets/img/gifmaker/tag.png"
              alt="items"
              style={{ width: "13rem" }}
            />
            <Text bold="550" color="#4A4A4A" size="2rem">
              Tag and Discovery
            </Text>
            <Text color="#4A4A4A" size="1.5rem">
              Tag your GIFs to be discovered and shared. Search for your content
              on Tenor’s partners, including Gboard, Twitter, and many more.
            </Text>
          </Item>
          <Item>
            <img
              src="https://tenor.com/assets/img/gifmaker/share.png"
              alt="items"
              style={{ height: "11.2rem" }}
            />
            <Text bold="550" color="#4A4A4A" size="2rem" margin="1rem">
              Share with millions
            </Text>
            <Text color="#4A4A4A" size="1.5rem">
              Get notified on how your GIFs are searched and shared.
            </Text>
          </Item>
        </Content>
      </Grid>
      <Grid padding="9rem" bg="#f5f5f5">
        <CreateBox>
          <CreateItem>
            <Text bold="500" color="black" size="3.2rem">
              Create your own GIFs
            </Text>
            <Text bold="250" color="#4A4A4A" size="1.8rem">
              Creating GIFs is fun and easy! Edit the GIFs and Mp4s that you
              upload to Tenor by trimming, cropping, and adding custom captions
              to your content.
            </Text>
            <CreateBtn>CREATE GIFS</CreateBtn>
          </CreateItem>
          <CreateItem>
            <ImageBorder>
              <img
                src="https://tenor.com/assets/img/gifmaker/create.gif"
                alt="create"
              />
            </ImageBorder>
          </CreateItem>
        </CreateBox>
      </Grid>

      <Container>
        <SharedItem>
          <ImgBox>
            <img src={sharedImage} alt="tenor" />
          </ImgBox>
        </SharedItem>
        <SharedItem>
          <Text bold="500" color="black" size="3.2rem">
            Share anywhere
          </Text>

          <Text bold="250" color="#4A4A4A" size="1.8rem">
            Access GIFs you uploaded anytime from Tenor products including Tenor
            website and <a href="https://NotFound">GIF Keyboard</a>. Tenor also
            powers GIF search for Gboard, Facebook, Twitter, Line, WhatsApp, and
            more!
          </Text>
          <Grid>
            <Grid is_flex>
              <img
                src="https://tenor.com/assets/img/about/about-us/apipartners/whatsapp.png"
                alt="tenor"
                style={{ width: "15rem" }}
              />
              <img
                src="https://tenor.com/assets/img/about/about-us/apipartners/gboard.png"
                alt="tenor"
                style={{ width: "5rem" }}
              />
              <img
                src="https://tenor.com/assets/img/about/about-us/apipartners/linkedin.png"
                alt="tenor"
                style={{ width: "15rem" }}
              />
            </Grid>
            <Grid is_flex padding="0 4rem">
              <img
                src="https://tenor.com/assets/img/about/about-us/apipartners/facebook.png"
                alt="tenor"
                style={{ width: "15rem" }}
              />
              <img
                src="https://tenor.com/assets/img/about/about-us/apipartners/twitter.png"
                alt="tenor"
                style={{ width: "5rem" }}
              />
            </Grid>
          </Grid>
        </SharedItem>
      </Container>
    </React.Fragment>
  );
};

const Item = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 250px;
  line-height: 21px;
  text-align: center;
  margin: 0;
`;

const Content = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  max-width: 100rem;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  margin-right: auto;
  margin-left: auto;
`;

const DragnDrop = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  text-align: center;
  margin: 0;
`;

const UploadBtn = styled.button`
  width: 35rem;
  height: 5rem;
  padding: 0.5em 1em;
  font-size: 1.8rem;
  font-weight: 600;
  border: 1px solid #48abfb;
  background-color: #48abfb;
  color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
`;

const InputBox = styled.input`
  width: 100%;
  height: 42px;
  padding: 1em 1.5em;
  color: #373a3c;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  font-size: 15px;
  font-weight: 300;
`;

const CreateBox = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100%;
  flex-wrap: wrap;
  background-color: #f5f5f5;
  max-width: 100rem;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  margin-right: auto;
  margin-left: auto;
`;

const CreateItem = styled.div`
  width: 40rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  line-height: 21px;
  text-align: left;
  margin: 0;
`;

const CreateBtn = styled.button`
  width: 18rem;
  height: 5rem;
  padding: 0.5rem 1rem;
  font-size: 1.7rem;
  font-weight: 600;
  border: 1px solid #48abfb;
  background-color: #48abfb;
  color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
  margin-bottom: 3rem;
`;

const ImageBorder = styled.div`
  width: 330px;
  height: 245px;
  padding-top: 16px;
  border: 3px solid #dcdfe6;
  border-radius: 6px;
  justify-content: center;
  text-align: center;
`;

const ImgBox = styled.div`
  width: 230px;
  padding: 30px 10px;
  border-radius: 30px;
  box-shadow: 0 0 4px 4px rgb(0 0 0 / 7%);
  background: #fff;
`;

const Container = styled.div`
  padding: 9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100%;
  flex-wrap: wrap;
  background-color: #ffffff;
  max-width: 100rem;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  margin-right: auto;
  margin-left: auto;
`;

const SharedItem = styled.div`
  width: 40rem;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  line-height: 21px;
  text-align: left;
  margin: 0;
`;

export default Upload;
