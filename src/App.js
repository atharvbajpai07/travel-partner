// src/App.js
import React, { useState, useEffect } from 'react';
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
import { GlobalStyle, lightTheme, darkTheme } from './theme';
import ThemeToggle from './components/ThemeToggle';
import Notification from './components/Notification';
import socket from './services/socket';

const AnimatedDiv = styled(motion.div)`
  padding: 20px;
`;

function App() {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    socket.on('notification', (notification) => {
      setNotifications((prev) => [...prev, notification]);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
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
          {notifications.map((notification, index) => (
            <Notification key={index} message={notification.message} />
          ))}
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
