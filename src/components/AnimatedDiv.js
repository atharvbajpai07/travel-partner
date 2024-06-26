// src/components/AnimatedDiv.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';

const Container = styled(animated.div)`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function AnimatedDiv({ children }) {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
  });

  return <Container style={props}>{children}</Container>;
}

export default AnimatedDiv;
