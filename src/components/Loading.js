// src/components/Loading.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function Loading() {
  return <Loader />;
}

export default Loading;
