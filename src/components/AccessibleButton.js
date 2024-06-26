// src/components/AccessibleButton.js
import styled from 'styled-components';

const AccessibleButton = styled.button.attrs((props) => ({
  role: 'button',
  'aria-label': props.label,
}))`
  padding: 10px;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.secondary};
  }
`;

export default AccessibleButton;
