// src/components/ThemeToggle.js
import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const ToggleSwitch = styled.input.attrs({ type: 'checkbox' })`
  width: 40px;
  height: 20px;
  appearance: none;
  background-color: #ddd;
  border-radius: 20px;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: 1px;
    transition: 0.3s;

    &:checked {
      left: 21px;
    }
  }
`;

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <ToggleContainer>
      <ToggleSwitch checked={theme === 'dark'} onChange={toggleTheme} />
    </ToggleContainer>
  );
}

export default ThemeToggle;
