// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../services/chat';

const ChatContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
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

const MessageList = styled.div`
  margin-top: 20px;
`;

const MessageItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: left;
`;

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleMessageSend = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <ChatContainer>
      <h1>Chat</h1>
      <MessageForm onSubmit={handleMessageSend}>
        <TextArea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
        <Button type="submit">Send</Button>
      </MessageForm>
      <MessageList>
        {messages.map((msg, index) => (
          <MessageItem key={index}>
            <p>{msg}</p>
          </MessageItem>
        ))}
      </MessageList>
    </ChatContainer>
  );
}

export default Chat;
