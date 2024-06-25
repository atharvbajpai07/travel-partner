// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { motion } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Search from './components/Search';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import Messaging from './components/Messaging';
import Help from './components/Help';
import store from './redux/store';
import { GlobalStyle, theme } from './theme';

const AnimatedDiv = styled(motion.div)`
  padding: 20px;
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <AnimatedDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<Search />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </AnimatedDiv>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
