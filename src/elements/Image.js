import styled from "styled-components";
import React from "react";
import { Text } from ".";

const Image = (props) => {
  const { shape, src, size, radius, _onClick, cursor, title } = props;

  const styles = {
    src: src,
    size: size,
    radius: radius,
    cursor: cursor,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles} onClick={_onClick}></ImageCircle>;
  }
  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles} onClick={_onClick}></AspectInner>
      </AspectOutter>
    );
  }

  if (shape === "swiper") {
    return <SwiperImage {...styles} onClick={_onClick}></SwiperImage>;
  }

  if (shape === "K") {
    return <Kakao {...styles} onClick={_onClick}></Kakao>;
  }

  if (shape === "card") {
    return (
      <Hover>
        <CardImages>
          <CardImage {...styles} onClick={_onClick}></CardImage>
          <figcaption style={{ position: "relative", top: -36 }}>
            <Text margin='0' size='1.7rem' bold='600' color='#fff'><i># {title}</i></Text>
          </figcaption>
        </CardImages>
      </Hover>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles} onClick={_onClick} />
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://image.flaticon.com/icons/png/512/64/64572.png",
  size: 3.6,
  radius: "",
  _onClick: () => {},
  cursor: "",
  title: "",
  height: "",
};

const Hover = styled.figure`
  height: 100%;
  margin: 0;
  :hover{
    & figcaption{
      background-color: rgba(0, 0, 0, 0.7);
      opacity: 1;
    }
  }
  & figcaption{
    width: ${(props) => props.size}rem;
    height: ${(props) => props.height}rem;
    padding: 7px 2rem;
    margin: 0;
    opacity: 0;
    border-radius: 0%.5rem;
    :hover{
      background-color: rgba(0, 0, 0, 0.7);
      opacity: 1;
      text-decoration: white underline;
      text-underline-position: under;
    }
  }
`;

const ImageDefault = styled.div`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 25rem;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  ${(props) => (props.radius ? `border-radius: 0.5rem;` : "")}
  ${(props) => (props.cursor ? `cursor: pointer;` : "")}
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  min-width: var(--size);
  height: var(--size);
  min-width: var(--size);
  border-radius: 50%;

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 0.4rem;
  ${(props) => (props.cursor ? `cursor: pointer;` : "")};
`;

const SwiperImage = styled.div`
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  border-radius: 0.5rem;
  cursor: pointer;

  width: 18rem;
  height: 10rem;
`;

const CardImages = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;
  /* box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 8%); */
  width: auto;
  height: 100%;
  margin: 0 auto;
`;

const CardImage = styled.img`
  position: relative;
  src: url("${(props) => props.src}");
  alt: initial;
  border-radius: 0.5rem;
  width: ${(props) => props.size}rem;
  border: 1px solid #dfe4ea;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%), 0 2px 4px 0 rgb(0 0 0 / 8%);
`;

const Kakao = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  display: inline-block;
  margin: auto 0.8rem auto 0;
`;

export default Image;
