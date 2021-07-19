import React from "react";
import styled from "styled-components";
import { Image } from "../elements/index";

const Flex2 = (props) => {
  const arr1 = props.data.filter((post, idx) => idx % 2 === 0);
  const arr2 = props.data.filter((post, idx) => idx % 2 === 1);
  return (
    <GridWrap>
      <Columns>
        {arr1.map((post) => (
          <GifList key={post.id}>
            <Image shape="card" src={post.src} size='31.5'></Image>
          </GifList>
        ))}
      </Columns>
      <Columns>
        {arr2.map((post) => (
          <GifList key={post.id}>
            <Image shape="card" src={post.src} size='31.5'></Image>
          </GifList>
        ))}
      </Columns>
    </GridWrap>
  );
};

const GridWrap = styled.div`
  max-width: 680px;
  margin: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 680px) {
    display: none;
  }
`;

const Columns = styled.div`
  margin: 0 0.5rem;
  display: inline-flex;
  flex-direction: column;
  flex-basis: auto;
`;

const GifList = styled.div`
  margin: 0 auto;
`;

export default Flex2;
