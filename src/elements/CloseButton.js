import React from 'react'
import styled from 'styled-components';
import closeIcon from './image/close.png'
import { Button, Image } from '.'

const CloseButton = (props) => {
    const {
        _onClick,
      } = props;
    
    return (
        <React.Fragment>
        <ElButton onClick={_onClick}>
          <Image size='2.5' src={closeIcon}/>
        </ElButton>
      </React.Fragment>
    )
};

Button.defaultProps = {
    _onClick: () => {},
  };

const ElButton = styled.button`
  width: auto;
  height: auto;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  text-align: right;
  background-image: url('');
  cursor: pointer;
`;

export default CloseButton
