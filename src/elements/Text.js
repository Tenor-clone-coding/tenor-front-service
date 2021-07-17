import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, margin, children, _onClick, cursor, width } = props;

  const styles = { bold: bold, color: color, size: size, margin: margin, width: width, cursor };
  return <P {...styles} onClick={_onClick}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  // bold 가 보통 600 정도
  bold: false,
  color: "#222831",
  size: "1.4rem",
  margin: false,
  cursor: '',
  width: '',
  _onClick: () => {},
};

const P = styled.p`
  ${(props) => (props.margin? `margin: ${props.margin};`: '')};
  ${(props) => (props.width? `width: ${props.width};`: '')};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  vertical-align: middle;
  ${(props) => (props.cursor? `cursor: pointer;`: '')};
`;

export default Text;
