import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size, radius, _onClick, cursor } = props;

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

  return (
    <React.Fragment>
      <ImageDefault {...styles} onClick={_onClick}/>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://image.flaticon.com/icons/png/512/64/64572.png",
  size: 3.6,
  radius: "",
  _onClick: () => {},
  cursor: '',
};

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
  ${(props) => (props.cursor? `cursor: pointer;`: '')}
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
  ${(props) => (props.cursor? `cursor: pointer;`: '')};
`;

export default Image;
