// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../redux/slices/authSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Loading from './Loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
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
`;

const RedirectLink = styled(Link)`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`;

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch(loginSuccess({ user: email, role: 'customer' }));
      navigate('/home');
    } catch (error) {
      dispatch(loginFailure());
      console.error('Failed to login', error);
    }
  };

  return (
    loading ? <Loading /> : 
    <Container as={motion.div} initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <Button type="submit">Login</Button>
      </Form>
      <RedirectLink to="/signup">Don't have an account? Sign Up</RedirectLink>
    </Container>
  );
}

export default Login;
