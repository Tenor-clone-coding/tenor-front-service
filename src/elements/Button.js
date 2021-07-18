import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    _onClick,
    children,
    margin,
    width,
    height,
    padding,
    bg,
    color,
    radius,
    size,
    cursor,
    border,
    bgImg,
    bgBtnImg,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    bg: bg,
    color: color,
    radius: radius,
    size: size,
    cursor: cursor,
    border: border,
    bgImg: bgImg,
    bgBtnImg: bgBtnImg,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  _onClick: () => {},
  margin: false,
  width: "100%",
  height: "100%",
  size: "",
  padding: false,
  bg: false,
  color: "",
  radius: "",
  cursor: "",
  border: "",
  bgImg: "",
  bgBtnImg: "",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.size ? `font-size: ${props.size}` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  box-sizing: border-box;
  border: none;
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.cursor ? `cursor: pointer;` : "")};
  ${(props) => (props.border ? `border: ${props.border}` : "")}
  ${(props) =>
    props.bgImg
      ? `background-image: url(${props.bgImg}); width: 16.3rem; height: 3.9rem; background-position: center; background-size: cover; border-radius: 0.5rem`
      : ""}
    ${(props) =>
    props.bgBtnImg
      ? `background-image: url(${props.bgBtnImg}); width: 23rem; height: 4.9rem; background-position: center; background-size: cover; border-radius: 0.5rem`
      : ""}
`;

export default Button;
