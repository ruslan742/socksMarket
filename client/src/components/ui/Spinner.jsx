import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 0.8s linear infinite;
`;

const BorderExample = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default BorderExample;