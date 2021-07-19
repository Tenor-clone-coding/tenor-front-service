import React from "react";
import styled from "styled-components";
import { Image } from "../elements/index";

const Flex4 = (props) => {
  const arr1 = props.data.filter((post, idx) => idx % 4 === 0);
  const arr2 = props.data.filter((post, idx) => idx % 4 === 1);
  const arr3 = props.data.filter((post, idx) => idx % 4 === 2);
  const arr4 = props.data.filter((post, idx) => idx % 4 === 3);
  return (
    <GridWrap>
      <Columns>
        {arr1.map((post) => (
          <GifList key={post.id}>
            <Image shape="card" src={post.src} size='23'></Image>
          </GifList>
        ))}
      </Columns>
      <Columns>
        {arr2.map((post) => (
          <GifList key={post.id}>
            <Image shape="card" src={post.src} size='23'></Image>
          </GifList>
        ))}
      </Columns>
      <Columns>
        {arr3.map((post) => (
          <GifList key={post.id}>
            <Image shape="card" src={post.src} size='23'></Image>
          </GifList>
        ))}
      </Columns>
      <Columns>
        {arr4.map((post) => (
          <GifList key={post.id}>
            <Image shape="card" src={post.src} size='23'></Image>
          </GifList>
        ))}
      </Columns>
    </GridWrap>
  );
};

const GridWrap = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1110px) {
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

export default Flex4;
