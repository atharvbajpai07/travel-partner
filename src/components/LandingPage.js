// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Button = styled(Link)`
  padding: 15px 30px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 25px;
  margin: 20px;
  font-size: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 48px;
  color: #fff;
`;

const SubHeading = styled.h2`
  margin-bottom: 40px;
  font-size: 24px;
  color: #aaa;
`;

function LandingPage() {
  return (
    <LandingContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Heading>Welcome to Travel Partner</Heading>
      <SubHeading>Choose your role to get started</SubHeading>
      <Button to="/login">Login as Customer</Button>
      <Button to="/signup">Sign Up as Customer</Button>
      <Button to="/login">Login as Partner</Button>
      <Button to="/signup">Sign Up as Partner</Button>
    </LandingContainer>
  );
}

export default LandingPage;
